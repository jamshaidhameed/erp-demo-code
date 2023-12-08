import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHREmployeeBasicInfoQuery } from 'services/api/actions/payroll/HumanResource';
import ActionMenu from 'shared/components/menu/actionMenu';
import CustomTable from 'shared/controls/Table';
import SubHeader from 'shared/layout/subHeader';
import { updatePageLoader } from 'store/actions/shared';
import { stringSorter } from 'utils/shared';

const EBIContractExtension = ({ onAddEdit }) => {
  const dispatch = useDispatch();

  const { getList, deleteRecords } = useHREmployeeBasicInfoQuery();
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
      title: 'Days',
      dataIndex: 'days',
      sorter: (a, b) => stringSorter(a, b, 'days'),
    },
    {
      title: 'Months',
      dataIndex: 'months',
      sorter: (a, b) => stringSorter(a, b, 'months'),
    },
    {
      title: 'Years',
      dataIndex: 'years',
      sorter: (a, b) => stringSorter(a, b, 'years'),
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      sorter: (a, b) => stringSorter(a, b, 'endDate'),
    },
    {
      title: 'Leave Entitlement',
      dataIndex: 'leaveEntitlement',
      sorter: (a, b) => stringSorter(a, b, 'leaveEntitlement'),
    },
    {
      title: 'Leave Availed',
      dataIndex: 'leaveAvailed',
      sorter: (a, b) => stringSorter(a, b, 'leaveAvailed'),
    },
    {
      title: 'Medical Entitlement',
      dataIndex: 'medicalEntitlement',
      sorter: (a, b) => stringSorter(a, b, 'medicalEntitlement'),
    },
    {
      title: 'Medical Claimed',
      dataIndex: 'medicalClaimed',
      sorter: (a, b) => stringSorter(a, b, 'medicalClaimed'),
    },
    {
      title: 'LWP Days',
      dataIndex: 'lwpDays',
      sorter: (a, b) => stringSorter(a, b, 'lwpDays'),
    },
    {
      title: 'Gratuity Proportionate Days',
      dataIndex: 'gratuityProportionateDays',
      sorter: (a, b) => stringSorter(a, b, 'gratuityProportionateDays'),
    },
    {
      title: 'Final Settlement Tax Paid',
      dataIndex: 'finalSettlementTaxPaid',
      sorter: (a, b) => stringSorter(a, b, 'finalSettlementTaxPaid'),
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
                onClick: () => onAddEdit(record.id),
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
      onClick: () => onAddEdit('new'),
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
      <SubHeader name="Employee Basic Info" buttons={buttons} />
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

export default EBIContractExtension;
