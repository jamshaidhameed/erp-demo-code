import { useEffect, useMemo, useState } from 'react';
import CustomTable from 'shared/controls/Table';
import SubHeader from 'shared/layout/subHeader';
import { DeleteOutlined, EditOutlined, PrinterOutlined, CopyOutlined } from '@ant-design/icons';
import ActionMenu from 'shared/components/menu/actionMenu';
import { parseError } from 'utils/shared';
import { useJournalVouchersQuery } from 'services/api/actions/financial/GLTransactions';
import { useDispatch } from 'react-redux';
import { updatePageLoader } from 'store/actions/shared';
import { useNavigate } from 'react-router-dom';
import { dateTimeToString, toLocalDateTime } from 'utils/shared/dateTime';
import {
  DATE_FORMATE,
  DEFAULT_AUTO_COMPLETE,
  DEFAULT_TABLE_PROPS,
  TABLE_ACTIONS,
} from 'constants/shared/common';
import { GLT_JV_FORM_BASE } from 'router/routes/financialRoutes';
import JournalVouchersSearch from './Components/searchSection';
import { Form } from 'antd';
import { toast } from 'react-toastify';
import {
  getJournalVoucher,
  getJournalVouchersList,
} from 'services/api/actions/financial/GLTransactions/journalVouchers/journalVouchers.api';
import { listByAttributeName, resolveArray } from 'utils/shared/list';
import CheckBox from 'shared/controls/inputs/checkBox';
import JVPrint from './Components/jvPrint';
import { printContainer } from 'utils/shared/files';
import { elementIds } from 'constants/financial';
import { useCostCentreQuery } from 'services/api/actions/ams';
import { calculateJVStats } from 'helpers/financial/journalVouchers';

const POST_OPTIONS = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Yes',
    value: '1',
  },
  {
    label: 'No',
    value: '0',
  },
];

export default function JournalVouchers() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { deleteRecords } = useJournalVouchersQuery();

  const { getList: getCostCentreList } = useCostCentreQuery();
  const costCentreList = getCostCentreList.isError ? [] : getCostCentreList?.data || [];
  const costCentresById = useMemo(
    () => listByAttributeName(costCentreList, 'id'),
    [costCentreList]
  );

  const [printData, setPrintData] = useState(null);
  const [tableProps, setTableProps] = useState({ ...DEFAULT_TABLE_PROPS });
  const [search, setSearch] = useState({
    voucher_code: '',
    books: [],
    voucher_date: null,
    narration: '',
    detail_narration: '',
    account: { ...DEFAULT_AUTO_COMPLETE },
    subAccount: { ...DEFAULT_AUTO_COMPLETE },
    post: 'all',
  });

  const onSearchChange = (name, value) => {
    const updated = { [name]: value };
    if (name === 'account' && value.option == null)
      updated.subAccount = { ...DEFAULT_AUTO_COMPLETE };
    setSearch({ ...search, ...updated });
  };

  const printRow = (recordId) => {
    getJournalVoucher(recordId)
      .then((response) => {
        const { totalCredit, totalDebit, difference } = calculateJVStats(
          response.data?.voucherDetails
        );
        setPrintData({ ...response.data, totalCredit, totalDebit, difference });
        dispatch(updatePageLoader(false));
        setTimeout(() => {
          printContainer(elementIds.JV_PRINT_CONTENT_LIST);
          setPrintData(null);
        }, 10);
      })
      .catch((error) => {
        dispatch(updatePageLoader(false));
        toast.error(parseError(error));
      });
  };

  const deleteRows = (deleteId, isPost) => {
    if (isPost == 1) return toast.error("Journal Voucher is Posted can't Delete.");
    dispatch(updatePageLoader(true));
    deleteRecords
      .mutateAsync(deleteId)
      .then(() => {
        dispatch(updatePageLoader(false));
        populateTable(
          DEFAULT_TABLE_PROPS.current,
          DEFAULT_TABLE_PROPS.pageSize,
          tableProps.sortOrder,
          tableProps.sortField
        );
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const populateTable = (current, pageSize, sortOrder, sortField) => {
    const payload = {
      limit: pageSize,
      page: current,
    };

    if (search.post !== 'all') payload.post = search.post;
    if (search.narration) payload.narration = search.narration;
    if (search.detail_narration) payload.detail_narration = search.detail_narration;
    if (search.voucher_code) payload.voucher_code = search.voucher_code.toString();
    if (search.voucher_date)
      payload.voucher_date = dateTimeToString(new Date(search.voucher_date), DATE_FORMATE[9]);
    if (search.account.option) payload.main_account_id = search.account.option.value;
    if (search.subAccount.option) payload.sub_account_id = search.subAccount.option.value;
    if (search.books.length > 0) payload.book_id = search.books.toString();

    if (sortOrder && sortField) {
      payload.sort_name = sortField;
      payload.sort_type = sortOrder === 'ascend' ? 'asc' : 'desc';
    }

    setTableProps({ ...tableProps, loading: true });
    getJournalVouchersList(payload)
      .then((response) => {
        setTableProps({
          ...tableProps,
          loading: false,
          data: resolveArray(response.data?.data),
          total: response.data.total_records,
          current,
          pageSize,
          sortOrder,
          sortField,
        });
      })
      .catch((error) => {
        setTableProps({ ...tableProps, loading: false });
        toast.error(parseError(error));
      });
  };

  const onSearch = () => {
    populateTable(
      DEFAULT_TABLE_PROPS.current,
      DEFAULT_TABLE_PROPS.pageSize,
      tableProps.sortOrder,
      tableProps.sortField
    );
  };

  const onChange = (pagination, filters, sorter, { action }) => {
    if (![TABLE_ACTIONS.sort, TABLE_ACTIONS.paginate].includes(action)) return;
    const current =
      pagination.pageSize === tableProps.pageSize
        ? pagination.current
        : DEFAULT_TABLE_PROPS.current;

    const pageSize = pagination.pageSize;
    const sortOrder = action === TABLE_ACTIONS.sort ? sorter.order ?? '' : tableProps.sortOrder;
    const sortField =
      action === TABLE_ACTIONS.sort ? (sortOrder ? sorter.field : '') : tableProps.sortField;
    populateTable(current, pageSize, sortOrder, sortField);
  };

  useEffect(() => {
    populateTable(
      tableProps.current,
      tableProps.pageSize,
      tableProps.sortOrder,
      tableProps.sortField
    );
  }, []);

  const columns = [
    {
      title: 'Voucher Code',
      dataIndex: 'voucher_code',
      sorter: true,
    },
    {
      title: 'Book',
      dataIndex: 'ST_BOOK_DESC',
      sorter: true,
    },
    {
      title: 'Voucher Date',
      dataIndex: 'voucher_date',
      render: (_, record) => toLocalDateTime(record.voucher_date, DATE_FORMATE[10]),
      sorter: true,
    },
    {
      title: 'Narration',
      dataIndex: 'voucher_narration',
      sorter: true,
    },
    {
      title: 'Post',
      dataIndex: 'POST',
      render: (_, record) => <CheckBox value={record.POST} controlled disabled />,
      sorter: true,
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) => {
        return (
          <ActionMenu
            menu={true}
            options={[
              {
                label: 'Edit',
                buttonType: 'primary',
                icon: <EditOutlined />,
                onClick: () => navigate(`${GLT_JV_FORM_BASE}/${record.voucher_id}`),
              },
              {
                label: 'Delete',
                buttonType: 'danger',
                icon: <DeleteOutlined />,
                confirmAction: record.POST != 1,
                onClick: () => deleteRows(record.voucher_id.toString(), record.POST),
              },
              {
                label: 'Print',
                buttonType: 'primary',
                icon: <PrinterOutlined />,
                onClick: () => printRow(record.voucher_id),
              },
              {
                label: 'JV Copy',
                buttonType: 'primary',
                icon: <CopyOutlined />,
                onClick: () =>
                  navigate(`${GLT_JV_FORM_BASE}/new`, {
                    state: { id: record.voucher_id },
                  }),
              },
            ]}
          />
        );
      },
    },
  ];

  const buttons = [
    {
      label: 'Add',
      onClick: () => navigate(`${GLT_JV_FORM_BASE}/new`),
    },
  ];

  return (
    <>
      <SubHeader name="Journal Vouchers" buttons={buttons} />

      <JVPrint
        containerId={elementIds.JV_PRINT_CONTENT_LIST}
        costCentresById={costCentresById}
        data={printData}
      />

      <div className="app_page_content">
        <JournalVouchersSearch
          form={form}
          search={search}
          onChange={onSearchChange}
          onSearch={onSearch}
          POST_OPTIONS={POST_OPTIONS}
        />

        <CustomTable
          rowKey="voucher_code"
          columns={columns}
          {...tableProps}
          onChange={onChange}
          searchAble={false}
        />
      </div>
    </>
  );
}
