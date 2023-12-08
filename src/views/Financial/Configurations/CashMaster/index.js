import { useState } from 'react';
import SubHeader from 'shared/layout/subHeader';
import CustomTable from 'shared/controls/Table';
import CashMasterFormModal from './Components/cashMasterFormModal';
import ActionMenu from 'shared/components/menu/actionMenu';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { parseError, stringSorter } from 'utils/shared';
import { useCashMasterQuery } from 'services/api/actions/financial/configurations';
import { updatePageLoader } from 'store/actions/shared';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export default function CashMaster() {
  const [addModal, setAddModal] = useState(false);
  const [selected, setSelected] = useState(null);

  const { getList, deleteRecord } = useCashMasterQuery();
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

  const handleDelete = (OID) => {
    dispatch(updatePageLoader(true));
    deleteRecord
      .mutateAsync(OID)
      .then((response) => {
        dispatch(updatePageLoader(false));
      })
      .catch((error) => {
        dispatch(updatePageLoader(false));
        toast.error(parseError(error));
      });
  };

  const columns = [
    {
      title: 'Cash Account Name',
      dataIndex: 'AccountName',
      sorter: (a, b) => stringSorter(a, b, 'AccountName'),
    },
    {
      title: 'Cash Account Desc',
      dataIndex: 'AccountDesc',
      sorter: (a, b) => stringSorter(a, b, 'AccountDesc'),
    },
    {
      title: 'Main Account Desc',
      dataIndex: 'main_account_name',
      sorter: (a, b) => stringSorter(a, b, 'main_account_name'),
      render: (_, record) =>
        `${record?.ST_MAIN_ACCOUNT_CODE ? record?.ST_MAIN_ACCOUNT_CODE + '-' : ''}${
          record?.main_account_name ?? ''
        }`,
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
                onClick: () => handleDelete(record?.OID),
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
      <SubHeader name="Cash Master" buttons={headersButtons} />
      <div className="app_page_content">
        <CustomTable
          columns={columns}
          data={resolvedData}
          loading={getList.isLoading}
          searchKeys={['AccountName', 'AccountDesc']}
        />
      </div>

      <CashMasterFormModal open={addModal} onCancel={toggleModal} selected={selected} />
    </>
  );
}
