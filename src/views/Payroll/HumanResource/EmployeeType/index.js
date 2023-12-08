import { useState } from 'react';
import CustomTable from 'shared/controls/Table';
import SubHeader from 'shared/layout/subHeader';
import EmployeeTypesFormModal from './Components/employeeTypesFormModal';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import ActionMenu from 'shared/components/menu/actionMenu';
import { numberSorter, stringSorter } from 'utils/shared';
import { useHREmployeeTypesQuery } from 'services/api/actions/payroll/HumanResource';
import { useDispatch } from 'react-redux';
import { updatePageLoader } from 'store/actions/shared';
import CheckBox from 'shared/controls/inputs/checkBox';
import { generateCode } from 'helpers/payroll';

const EmployeeTypes = () => {
  const dispatch = useDispatch();

  const code_length = 2;
  const { getList, deleteRecords, submitRecord, invalidateList } = useHREmployeeTypesQuery();
  const resolvedData = getList.isError ? [] : getList?.data || [];

  const [formModal, setFormModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentCode, setCurrentCode] = useState('');

  const toggleModal = () => setFormModal((prevState) => !prevState);
  const onSelect = (selectedRowIds) => setSelectedRows(selectedRowIds);

  const onEdit = (record) => {
    setSelected(record);
    toggleModal();
  };

  const onAdd = () => {
    setSelected(null);
    setCurrentCode(generateCode(resolvedData, code_length));
    toggleModal();
  };

  const deleteRows = (deleteIds) => {
    dispatch(updatePageLoader(true));
    deleteRecords
      .mutateAsync(deleteIds)
      .then(() => {
        dispatch(updatePageLoader(false));
        setSelectedRows([]);
        setSelected(null);
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const columns = [
    {
      title: 'Employee Type',
      dataIndex: 'code',
      sorter: (a, b) => stringSorter(a, b, 'code'),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      sorter: (a, b) => stringSorter(a, b, 'description'),
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
                onClick: () => onEdit(record),
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
      onClick: onAdd,
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
      <EmployeeTypesFormModal
        open={formModal}
        onCancel={toggleModal}
        selected={selected}
        submitRecord={submitRecord}
        invalidateList={invalidateList}
        code_length={code_length}
        currentCode={currentCode}
      />

      <SubHeader name="Employee Types" buttons={buttons} />
      <div className="app_page_content">
        <CustomTable
          rowKey="id"
          columns={columns}
          data={resolvedData}
          selectAble={true}
          selectedRows={selectedRows}
          onSelect={onSelect}
          loading={getList.isLoading}
          searchKeys={['code', 'description']}
        />
      </div>
    </>
  );
};

export default EmployeeTypes;
