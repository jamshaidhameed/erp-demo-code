import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHREmployeeBasicInfoQuery } from 'services/api/actions/payroll/HumanResource';
import ActionMenu from 'shared/components/menu/actionMenu';
import CustomTable from 'shared/controls/Table';
import SubHeader from 'shared/layout/subHeader';
import { updatePageLoader } from 'store/actions/shared';
import { stringSorter } from 'utils/shared';

const EmployeeBasicInfoAudit = ({ onAddEdit }) => {
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
      title: 'Code',
      dataIndex: 'code',
      sorter: (a, b) => stringSorter(a, b, 'code'),
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      sorter: (a, b) => stringSorter(a, b, 'firstName'),
    },
    {
      title: 'Middle Name',
      dataIndex: 'middleName',
      sorter: (a, b) => stringSorter(a, b, 'middleName'),
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      sorter: (a, b) => stringSorter(a, b, 'lastName'),
    },
    {
      title: 'Father Name',
      dataIndex: 'fatherName',
      sorter: (a, b) => stringSorter(a, b, 'fatherName'),
    },
    {
      title: 'Initials',
      dataIndex: 'initials',
      sorter: (a, b) => stringSorter(a, b, 'initials'),
    },
    {
      title: 'Titles',
      dataIndex: 'titles',
      sorter: (a, b) => stringSorter(a, b, 'titles'),
    },
    {
      title: 'Job Title',
      dataIndex: 'jobTitle',
      sorter: (a, b) => stringSorter(a, b, 'jobTitle'),
    },
    {
      title: 'Executive Grade',
      dataIndex: 'executiveGrade',
      sorter: (a, b) => stringSorter(a, b, 'executiveGrade'),
    },
    {
      title: 'Department',
      dataIndex: 'department',
      sorter: (a, b) => stringSorter(a, b, 'department'),
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      sorter: (a, b) => stringSorter(a, b, 'gender'),
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

export default EmployeeBasicInfoAudit;
