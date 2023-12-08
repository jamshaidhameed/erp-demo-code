import { useState } from 'react';
import CustomTable from 'shared/controls/Table';
import SubHeader from 'shared/layout/subHeader';
import { numberSorter, stringSorter } from 'utils/shared';
import SubAccountGroupsFormModal from './Components/subAccountGroupsFormModal';
import CheckBox from 'shared/controls/inputs/checkBox';
import ActionMenu from 'shared/components/menu/actionMenu';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useSubAccountGroupsQuery } from 'services/api/actions/financial/configurations';
import { useDispatch } from 'react-redux';
import { updatePageLoader } from 'store/actions/shared';

export default function SubAccountGroups() {
  const [addModal, setAddModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();

  const { getList, deleteRecord } = useSubAccountGroupsQuery();

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

  const handleSingleDelete = (record) => {
    deleteRecord
      .mutateAsync(record.OID)
      .then(() => {
        dispatch(updatePageLoader(false));
        setSelected(null);
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const columns = [
    {
      title: 'Group Code',
      dataIndex: 'ST_SUB_ACCOUNT_GROUP_CODE',
      sorter: (a, b) => numberSorter(a, b, 'ST_SUB_ACCOUNT_GROUP_CODE'),
    },
    {
      title: 'Group Description',
      dataIndex: 'ST_SUB_ACCOUNT_GROUP_DESC',
      sorter: (a, b) => stringSorter(a, b, 'ST_SUB_ACCOUNT_GROUP_DESC'),
    },
    {
      title: 'Active',
      dataIndex: 'POST',
      sorter: (a, b) => numberSorter(a, b, 'POST'),
      render: (_, record) => <CheckBox value={record.POST} controlled disabled />,
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
                onClick: () => handleSingleDelete(record),
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

  const nextCode =
    resolvedData?.length > 0 ? parseInt(resolvedData[resolvedData?.length - 1]?.OID) + 1 : 1;

  return (
    <>
      <SubHeader name="Sub Account Groups" buttons={buttons} />
      <div className="app_page_content">
        <CustomTable
          columns={columns}
          data={resolvedData}
          selectAble={false}
          loading={getList.isLoading}
          searchKeys={['ST_SUB_ACCOUNT_GROUP_CODE', 'ST_SUB_ACCOUNT_GROUP_DESC']}
        />
      </div>

      <SubAccountGroupsFormModal
        open={addModal}
        selected={selected}
        onCancel={toggleModal}
        nextCode={nextCode}
      />
    </>
  );
}
