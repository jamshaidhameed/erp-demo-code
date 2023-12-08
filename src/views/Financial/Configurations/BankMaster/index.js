import { useState } from 'react';
import SubHeader from 'shared/layout/subHeader';
import CustomTable from 'shared/controls/Table';
import CashMasterFormModal from './Components/bankMasterFormModal';
import ActionMenu from 'shared/components/menu/actionMenu';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { numberSorter, stringSorter } from 'utils/shared';
import { useBankMasterQuery } from 'services/api/actions/financial/configurations';
import { updatePageLoader } from 'store/actions/shared';
import { useDispatch } from 'react-redux';
import CheckBox from 'shared/controls/inputs/checkBox';

export default function BankMaster() {
  const [addModal, setAddModal] = useState(false);
  const [selected, setSelected] = useState(null);

  const { getList, deleteRecords } = useBankMasterQuery();
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

  // const handleDelete = (record) => {
  //   deleteRecord
  //     .mutateAsync({ voucher_id: record.id })
  //     .then((response) => {})
  //     .catch((error) => {
  //       toast.error(parseError(error));
  //     });
  // };

  const handleDelete = (deleteIds) => {
    dispatch(updatePageLoader(true));
    deleteRecords
      .mutateAsync(deleteIds)
      .then(() => {
        dispatch(updatePageLoader(false));
        setSelected(null);
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const columns = [
    {
      title: 'Bank Name',
      dataIndex: 'BankName',
      sorter: (a, b) => stringSorter(a, b, 'BankName'),
    },
    {
      title: 'Bank Account No',
      dataIndex: 'BankAccountNo',
      sorter: (a, b) => stringSorter(a, b, 'BankAccountNo'),
    },
    {
      title: 'Branch Name',
      dataIndex: 'BranchName',
      sorter: (a, b) => stringSorter(a, b, 'BranchName'),
    },
    {
      title: 'Branch Address',
      dataIndex: 'BranchAddress',
      sorter: (a, b) => stringSorter(a, b, 'BranchAddress'),
    },
    {
      title: 'Main Account Desc',
      dataIndex: 'GlAccountId',
      sorter: (a, b) => numberSorter(a, b, 'GlAccountId'),
      render: (_, record) =>
        `${record?.ST_MAIN_ACCOUNT_CODE ? record?.ST_MAIN_ACCOUNT_CODE + '-' : ''}${
          record?.main_account_name ?? ''
        }`,
    },
    {
      title: 'Active',
      dataIndex: 'Active',
      sorter: (a, b) => numberSorter(a, b, 'Active'),
      render: (_, record) => <CheckBox value={record?.Active} controlled disabled />,
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
                onClick: () => handleDelete(record.OID),
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
  ];

  const resolvedData = getList.isError ? [] : getList?.data || [];

  return (
    <>
      <SubHeader name="Bank Master" buttons={headersButtons} />
      <div className="app_page_content">
        <CustomTable
          columns={columns}
          data={resolvedData}
          loading={getList.isLoading}
          searchKeys={['ST_VOUCHER_TYPE_CODE', 'ST_VOUCHER_TYPE_DESC']}
        />
      </div>

      <CashMasterFormModal open={addModal} onCancel={toggleModal} selected={selected} />
    </>
  );
}
