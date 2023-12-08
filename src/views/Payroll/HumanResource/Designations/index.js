import { useState } from 'react';
import CustomTable from 'shared/controls/Table';
import SubHeader from 'shared/layout/subHeader';
import DesignationFormModal from './Components/designationFormModal';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import ActionMenu from 'shared/components/menu/actionMenu';
import { numberSorter, stringSorter } from 'utils/shared';
import { useHRDesignationQuery } from 'services/api/actions/payroll/HumanResource';
import { useDispatch } from 'react-redux';
import { updatePageLoader } from 'store/actions/shared';
import CheckBox from 'shared/controls/inputs/checkBox';

const Designations = () => {
  const dispatch = useDispatch();
  const { getList, deleteRecords, submitRecord, invalidateList } = useHRDesignationQuery();
  const [formModal, setFormModal] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleModal = () => setFormModal((prevState) => !prevState);

  const onEdit = (record) => {
    setSelected(record);
    toggleModal();
  };

  const onAdd = () => {
    setSelected(null);
    toggleModal();
  };

  const handleDelete = (id) => {
    dispatch(updatePageLoader(true));
    deleteRecords
      .mutateAsync(id)
      .then(() => {
        dispatch(updatePageLoader(false));
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
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => stringSorter(a, b, 'name'),
    },
    {
      title: 'Post',
      dataIndex: 'status',
      sorter: (a, b) => numberSorter(a, b, 'status'),
      render: (_, record) => <CheckBox value={record?.status} controlled disabled />,
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
                onClick: () => handleDelete(record.id),
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
  ];

  const resolvedData = getList.isError ? [] : getList?.data || [];

  return (
    <>
      <DesignationFormModal
        submitRecord={submitRecord}
        invalidateList={invalidateList}
        open={formModal}
        onCancel={toggleModal}
        selected={selected}
      />

      <SubHeader name="Designations" buttons={buttons} />
      <div className="app_page_content">
        <CustomTable
          columns={columns}
          data={resolvedData}
          loading={getList.isLoading}
          searchKeys={['code', 'name', 'status']}
        />
      </div>
    </>
  );
};

export default Designations;
