import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHRExecutiveGradesQuery } from 'services/api/actions/payroll/HumanResource';
import ActionMenu from 'shared/components/menu/actionMenu';
import CustomTable from 'shared/controls/Table';
import SubHeader from 'shared/layout/subHeader';
import { updatePageLoader } from 'store/actions/shared';
import { stringSorter } from 'utils/shared';

const ExecutiveGradeFuelAllowance = () => {
  const dispatch = useDispatch();

  const { getList, deleteRecords } = useHRExecutiveGradesQuery();
  const resolvedData = getList.isError ? [] : getList?.data || [];

  const [selectedRows, setSelectedRows] = useState([]);

  const onSelect = (selectedRowIds) => setSelectedRows(selectedRowIds);

  const deleteRows = (deleteIds) => {
    dispatch(updatePageLoader(true));
    deleteRecords
      .mutateAsync(deleteIds)
      .then(() => {
        dispatch(updatePageLoader(false));
        setSelectedRows([]);
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const columns = [
    {
      title: 'WEF Date',
      dataIndex: 'date',
      sorter: (a, b) => stringSorter(a, b, 'date'),
    },
    {
      title: 'Quantity (Ltr.)',
      dataIndex: 'quantity',
      sorter: (a, b) => stringSorter(a, b, 'quantity'),
    },
    {
      title: 'Rate',
      dataIndex: 'rate',
      sorter: (a, b) => stringSorter(a, b, 'rate'),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      sorter: (a, b) => stringSorter(a, b, 'amount'),
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
                onClick: () => {},
              },
              {
                label: 'Delete',
                buttonType: 'danger',
                icon: <DeleteOutlined />,
                confirmAction: true,
                onClick: () => deleteRows([record.id.toString()]),
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
      key: 'add',
      onClick: () => {},
    },
    {
      label: 'Delete',
      key: 'delete',
      buttonType: 'danger',
      confirmAction: true,
      disabled: !selectedRows.length,
      onClick: () => deleteRows(selectedRows.map((item) => item.toString())),
    },
  ];

  return (
    <>
      <SubHeader name="Executive Grades" buttons={buttons} />
      <div className="app_page_content app_page_tab_content">
        <CustomTable
          rowKey="id"
          columns={columns}
          data={resolvedData}
          selectAble={true}
          selectedRows={selectedRows}
          onSelect={onSelect}
          loading={getList.isLoading}
          searchKeys={[]}
        />
      </div>
    </>
  );
};

export default ExecutiveGradeFuelAllowance;
