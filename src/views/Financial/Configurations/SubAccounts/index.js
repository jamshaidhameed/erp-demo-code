import CustomTable from 'shared/controls/Table';
import SubHeader from 'shared/layout/subHeader';
import { numberSorter, stringSorter } from 'utils/shared';
import ActionMenu from 'shared/components/menu/actionMenu';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useSubAccountsQuery } from 'services/api/actions/financial/configurations';
import { useDispatch } from 'react-redux';
import { updatePageLoader } from 'store/actions/shared';
import { useNavigate } from 'react-router-dom';
import { CONFIGURATIONS_SUB_ACCOUNTS_FROM_BASE } from 'router/routes/financialRoutes';
import CheckBox from 'shared/controls/inputs/checkBox';

export default function SubAccounts() {
  const dispatch = useDispatch();

  const { getList, deleteRecord } = useSubAccountsQuery({
    account_group_id: null,
  });

  const navigate = useNavigate();

  const handleSingleDelete = (record) => {
    deleteRecord
      .mutateAsync(record.OID)
      .then(() => {
        dispatch(updatePageLoader(false));
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
                onClick: () =>
                  navigate(
                    `${CONFIGURATIONS_SUB_ACCOUNTS_FROM_BASE}/${record.OID}_${record.GL_SUB_ACCOUNT_GROUPS}`
                  ),
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
      onClick: () => navigate(`${CONFIGURATIONS_SUB_ACCOUNTS_FROM_BASE}/new`),
    },
  ];

  const resolvedData = getList.isError ? [] : getList?.data || [];

  return (
    <>
      <SubHeader name="Sub Account" buttons={buttons} />
      <div className="app_page_content">
        <CustomTable
          columns={columns}
          data={resolvedData}
          selectAble={false}
          loading={getList.isLoading}
          searchKeys={['ST_SUB_ACCOUNT_DESC', 'ST_SUB_ACCOUNT_CODE']}
        />
      </div>
    </>
  );
}
