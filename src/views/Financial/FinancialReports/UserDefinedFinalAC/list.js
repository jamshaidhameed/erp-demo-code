import { EditOutlined } from '@ant-design/icons';
import ActionMenu from 'shared/components/menu/actionMenu';
import CustomTable from 'shared/controls/Table';
import SubHeader from 'shared/layout/subHeader';
import { numberSorter, stringSorter } from 'utils/shared';
import { useNavigate } from 'react-router-dom';
import { FR_FAC } from 'router/routes/financialRoutes';
import CheckBox from 'shared/controls/inputs/checkBox';
import { useUserDefinedFACQuery } from 'services/api/actions/financial/financialReports';

export default function UserDefinedFinalAC() {
  const navigate = useNavigate();
  const { getList } = useUserDefinedFACQuery();

  const columns = [
    {
      title: 'OID',
      dataIndex: 'OID',
      sorter: (a, b) => numberSorter(a, b, 'OID'),
    },
    {
      title: 'Report Description',
      dataIndex: 'ST_PERIOD_DESC',
      sorter: (a, b) => stringSorter(a, b, 'ST_PERIOD_DESC'),
    },
    {
      title: 'Post',
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
            options={[
              {
                label: 'Edit',
                buttonType: 'primary',
                icon: <EditOutlined />,
                onClick: () => navigate(`${FR_FAC}/${record.OID}`),
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
      onClick: () => navigate(`${FR_FAC}/new`),
    },
  ];

  const resolvedData = getList.isError ? [] : getList?.data || [];

  return (
    <>
      <SubHeader name="User Defined Final Account" buttons={buttons} />
      <div className="app_page_content">
        <CustomTable
          columns={columns}
          data={resolvedData}
          loading={getList.isLoading}
          searchKeys={[]}
        />
      </div>
    </>
  );
}
