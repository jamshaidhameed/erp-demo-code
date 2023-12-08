import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHRExecutiveGradesQuery } from 'services/api/actions/payroll/HumanResource';
import ActionMenu from 'shared/components/menu/actionMenu';
import CustomTable from 'shared/controls/Table';
import CheckBox from 'shared/controls/inputs/checkBox';
import SubHeader from 'shared/layout/subHeader';
import { updatePageLoader } from 'store/actions/shared';
import { numberSorter, stringSorter } from 'utils/shared';

const ExecutiveGrades = ({ onAddEdit }) => {
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
      title: 'Code',
      dataIndex: 'code',
      sorter: (a, b) => stringSorter(a, b, 'code'),
    },
    {
      title: 'Employee Type',
      dataIndex: 'employeeType',
      sorter: (a, b) => stringSorter(a, b, 'employeeType'),
    },
    {
      title: 'Employee Category',
      dataIndex: 'employeeCategory',
      sorter: (a, b) => stringSorter(a, b, 'employeeCategory'),
    },
    {
      title: 'Post',
      dataIndex: 'post',
      sorter: (a, b) => numberSorter(a, b, 'post'),
      render: (_, record) => <CheckBox value={record?.post} controlled disabled />,
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

export default ExecutiveGrades;
