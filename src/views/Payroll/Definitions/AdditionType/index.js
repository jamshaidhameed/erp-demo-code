import { useState } from 'react';
import CustomTable from 'shared/controls/Table';
import SubHeader from 'shared/layout/subHeader';
import AdditionTypeFormModal from './Components/additionTypeFormModal';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import ActionMenu from 'shared/components/menu/actionMenu';
import { numberSorter, stringSorter } from 'utils/shared';
import { useDispatch } from 'react-redux';
import { updatePageLoader } from 'store/actions/shared';
import CheckBox from 'shared/controls/inputs/checkBox';
import { useDesignationsAdvanceTypesQuery } from 'services/api/actions/payroll/definitions';

const AdditionType = () => {
  const dispatch = useDispatch();

  const { getList, deleteRecords, submitRecord, invalidateList } =
    useDesignationsAdvanceTypesQuery();
  const resolvedData = getList.isError ? [] : getList?.data || [];

  const [formModal, setFormModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);

  const toggleModal = () => setFormModal((prevState) => !prevState);
  const onSelect = (selectedRowIds) => setSelectedRows(selectedRowIds);

  const onEdit = (record) => {
    setSelected(record);
    toggleModal();
  };

  const onAdd = () => {
    setSelected(null);
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
      title: 'Code',
      dataIndex: 'code',
      sorter: (a, b) => numberSorter(a, b, 'code'),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      sorter: (a, b) => stringSorter(a, b, 'description'),
    },
    {
      title: 'Short Description',
      dataIndex: 'shortDescription',
      sorter: (a, b) => stringSorter(a, b, 'shortDescription'),
    },
    {
      title: 'GL Code',
      dataIndex: 'minServiceMonth',
      sorter: (a, b) => numberSorter(a, b, 'minServiceMonth'),
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
      <AdditionTypeFormModal
        open={formModal}
        onCancel={toggleModal}
        selected={selected}
        submitRecord={submitRecord}
        invalidateList={invalidateList}
      />

      <SubHeader name="Addition Type" buttons={buttons} />
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

export default AdditionType;
