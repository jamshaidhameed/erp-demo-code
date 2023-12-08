import { useState } from 'react';
import CustomTable from 'shared/controls/Table';
import SubHeader from 'shared/layout/subHeader';
import BanksFormModal from './Components/banksFormModal';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import ActionMenu from 'shared/components/menu/actionMenu';
import { numberSorter, stringSorter } from 'utils/shared';
import { useHRBankQuery } from 'services/api/actions/payroll/HumanResource';
import { useDispatch } from 'react-redux';
import { updatePageLoader } from 'store/actions/shared';
import CheckBox from 'shared/controls/inputs/checkBox';

const Eobi = () => {
  const dispatch = useDispatch();
  const { getList, deleteRecords, submitRecord, invalidateList } = useHRBankQuery();
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
      dataIndex: 'bank_code',
      sorter: (a, b) => numberSorter(a, b, 'bank_code'),
    },
    {
      title: 'Bank Name',
      dataIndex: 'bank_name',
      sorter: (a, b) => stringSorter(a, b, 'bank_name'),
    },
    {
      title: 'Abbreviation',
      dataIndex: 'bank_short_name',
      sorter: (a, b) => stringSorter(a, b, 'bank_short_name'),
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
      <BanksFormModal
        submitRecord={submitRecord}
        invalidateList={invalidateList}
        open={formModal}
        onCancel={toggleModal}
        selected={selected}
      />

      <SubHeader name="Banks" buttons={buttons} />
      <div className="app_page_content">
        <CustomTable
          columns={columns}
          data={resolvedData}
          selectAble={false}
          loading={getList.isLoading}
          searchKeys={['bank_code', 'bank_name', 'bank_short_name']}
        />
      </div>
    </>
  );
};

export default Eobi;
