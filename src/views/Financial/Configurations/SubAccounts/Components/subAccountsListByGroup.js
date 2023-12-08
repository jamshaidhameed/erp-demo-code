import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { useSubAccountsQuery } from 'services/api/actions/financial/configurations';
import ActionMenu from 'shared/components/menu/actionMenu';
import CustomTable from 'shared/controls/Table';
import CheckBox from 'shared/controls/inputs/checkBox';
import { updatePageLoader } from 'store/actions/shared';
import { numberSorter, stringSorter } from 'utils/shared';

const SubAccountsListByGroup = ({ group, getSubAccountDetails }) => {
  const { deleteRecord } = useSubAccountsQuery({ loadList: false });
  const { getList } = useSubAccountsQuery({
    account_group_id: group,
    listKey: group,
  });
  const dispatch = useDispatch();

  const onEdit = (record) => {
    getSubAccountDetails(record.OID);
  };
  const handleSingleDelete = (record) => {
    deleteRecord
      .mutateAsync(record.OID)
      .then(() => {
        dispatch(updatePageLoader(false));
        // setSelected(null);
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const columns = [
    {
      title: 'Sub Account Code',
      dataIndex: 'ST_SUB_ACCOUNT_CODE',
      sorter: (a, b) => numberSorter(a, b, 'ST_SUB_ACCOUNT_CODE'),
    },
    {
      title: 'Sub Account Desc',
      dataIndex: 'ST_SUB_ACCOUNT_DESC',
      sorter: (a, b) => stringSorter(a, b, 'ST_SUB_ACCOUNT_DESC'),
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
  const resolvedData = getList.isError ? [] : getList?.data || [];

  return (
    <div>
      <CustomTable
        columns={columns}
        data={resolvedData}
        selectAble={false}
        loading={getList.isLoading}
        cardClassName="custom_table_card_user_accounts"
        searchKeys={['ST_SUB_ACCOUNT_DESC', 'ST_SUB_ACCOUNT_CODE']}
      />
    </div>
  );
};

export default SubAccountsListByGroup;
