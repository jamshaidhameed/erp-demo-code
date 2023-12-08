import { useState } from 'react';
import SubHeader from 'shared/layout/subHeader';
import CustomTable from 'shared/controls/Table';
import VoucherTypeFormModal from './Components/voucherTypeFormModal';
import ActionMenu from 'shared/components/menu/actionMenu';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { stringSorter, numberSorter } from 'utils/shared';
import { useVoucherTypesQuery } from 'services/api/actions/financial/configurations';
import { updatePageLoader } from 'store/actions/shared';
import { useDispatch } from 'react-redux';

export default function VoucherTypes() {
  const [addModal, setAddModal] = useState(false);
  // const [selectedRows, setSelectedRows] = useState([]);
  const [selected, setSelected] = useState(null);

  const { getList, deleteRecords } = useVoucherTypesQuery();
  const dispatch = useDispatch();

  const onAdd = () => {
    setSelected(null);
    toggleModal();
  };

  const onEdit = (record) => {
    setSelected(record);
    toggleModal();
  };

  const toggleModal = () => {
    setAddModal((prevState) => !prevState);
  };

  // const handleDelete = (record) => {
  //   deleteRecord
  //     .mutateAsync({ voucher_id: record.id })
  //     .then((response) => {})
  //     .catch((error) => {
  //       toast.error(parseError(error));
  //     });
  // };

  const deleteRows = (deleteIds) => {
    dispatch(updatePageLoader(true));
    deleteRecords
      .mutateAsync(deleteIds)
      .then(() => {
        dispatch(updatePageLoader(false));
        // setSelectedRows([]);
        setSelected(null);
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  // const onSelect = (selectedRowIds) => setSelectedRows(selectedRowIds);

  const columns = [
    {
      title: 'Voucher Type Code',
      dataIndex: 'ST_VOUCHER_TYPE_CODE',
      sorter: (a, b) => stringSorter(a, b, 'ST_VOUCHER_TYPE_CODE'),
    },
    {
      title: 'Description',
      dataIndex: 'ST_VOUCHER_TYPE_DESC',
      sorter: (a, b) => stringSorter(a, b, 'ST_VOUCHER_TYPE_DESC'),
    },
    {
      title: 'Sequence',
      dataIndex: 'ST_VOUCHER_SEQUENCE',
      sorter: (a, b) => stringSorter(a, b, 'ST_VOUCHER_SEQUENCE'),
      render: (_, record) => <div>{record.ST_VOUCHER_SEQUENCE === 'M' ? 'Monthly' : 'Yearly'}</div>,
    },
    {
      title: 'Book Wise',
      dataIndex: 'BOOK_WISE_NUMBERING',
      sorter: (a, b) => numberSorter(a, b, 'BOOK_WISE_NUMBERING'),
      render: (_, record) => <div>{record.BOOK_WISE_NUMBERING === 1 ? 'Yes' : 'No'}</div>,
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) => {
        return (
          <ActionMenu
            menu={false}
            options={[
              {
                label: 'Edit',
                buttonType: 'primary',
                icon: <EditOutlined />,
                onClick: () => onEdit(record),
              },
              {
                label: 'Delete',
                buttonType: 'danger',
                icon: <DeleteOutlined />,
                confirmAction: true,
                onClick: () => deleteRows([record.OID.toString()]),
              },
            ]}
          />
        );
      },
    },
  ];

  const headersButtons = [
    {
      label: 'Add',
      key: 'edit',
      onClick: onAdd,
    },
    // {
    //   label: 'Delete',
    //   key: 'delete',
    //   buttonType: 'danger',
    //   confirmAction: true,
    //   disabled: !selectedRows?.length,
    //   onClick: () => deleteRows(selectedRows.map((item) => item.toString())),
    // },
  ];

  const resolvedData = getList.isError ? [] : getList?.data || [];

  return (
    <>
      <SubHeader name="Voucher Types" buttons={headersButtons} />
      <div className="app_page_content">
        <CustomTable
          columns={columns}
          data={resolvedData}
          selectAble={false}
          loading={getList.isLoading}
          // selectedRows={selectedRows}
          // onSelect={onSelect}
          searchKeys={['ST_VOUCHER_TYPE_CODE', 'ST_VOUCHER_TYPE_DESC']}
        />
      </div>

      <VoucherTypeFormModal open={addModal} onCancel={toggleModal} selected={selected} />
    </>
  );
}
