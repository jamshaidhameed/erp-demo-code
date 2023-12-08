import { EditOutlined } from '@ant-design/icons';
import { useFinancialPeriodsQuery } from 'services/api/actions/financial/configurations';
import ActionMenu from 'shared/components/menu/actionMenu';
import CustomTable from 'shared/controls/Table';
import SubHeader from 'shared/layout/subHeader';
import { numberSorter, stringSorter } from 'utils/shared';
import { useNavigate } from 'react-router-dom';
import { CONFIGURATIONS_FP_FORM_BASE } from 'router/routes/financialRoutes';
import { toLocalDateTime } from 'utils/shared/dateTime';
import { DATE_FORMATE, OPEN_CLOSE_ENUM } from 'constants/shared/common';
import CheckBox from 'shared/controls/inputs/checkBox';

export default function FinancialPeriods() {
  const navigate = useNavigate();
  const { getList } = useFinancialPeriodsQuery();

  const columns = [
    {
      title: 'Period Code',
      dataIndex: 'ST_PERIOD_CODE',
      sorter: (a, b) => numberSorter(a, b, 'ST_PERIOD_CODE'),
    },
    {
      title: 'Period Desc',
      dataIndex: 'ST_PERIOD_DESC',
      sorter: (a, b) => stringSorter(a, b, 'ST_PERIOD_DESC'),
    },
    {
      title: 'From Date',
      dataIndex: 'FROM_DATE',
      render: (_, record) => toLocalDateTime(record.FROM_DATE, DATE_FORMATE[10]),
      sorter: (a, b) => stringSorter(a, b, 'FROM_DATE'),
    },
    {
      title: 'To Date',
      dataIndex: 'TO_DATE',
      render: (_, record) => toLocalDateTime(record.TO_DATE, DATE_FORMATE[10]),
      sorter: (a, b) => stringSorter(a, b, 'TO_DATE'),
    },
    {
      title: 'Financial Year',
      dataIndex: 'ST_YEAR_CODE',
      sorter: (a, b) => stringSorter(a, b, 'ST_YEAR_CODE'),
    },
    {
      title: 'Active',
      dataIndex: 'POST',
      sorter: (a, b) => numberSorter(a, b, 'POST'),
      render: (_, record) => <CheckBox value={record.POST} controlled disabled />,
    },
    {
      title: 'Status',
      dataIndex: 'PeriodStatus',
      sorter: (a, b) => numberSorter(a, b, 'PeriodStatus'),
      render: (_, record) => OPEN_CLOSE_ENUM[record.PeriodStatus],
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
                onClick: () =>
                  navigate(
                    `${CONFIGURATIONS_FP_FORM_BASE}/${record.financial_year_ID}_${record.OID}`
                  ),
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
      onClick: () => navigate(`${CONFIGURATIONS_FP_FORM_BASE}/new`),
    },
  ];

  const resolvedData = getList.isError ? [] : getList?.data || [];

  return (
    <>
      <SubHeader name="Financial Periods" buttons={buttons} />
      <div className="app_page_content">
        <CustomTable
          columns={columns}
          data={resolvedData}
          loading={getList.isLoading}
          searchKeys={['ST_PERIOD_CODE', 'ST_PERIOD_DESC', 'ST_YEAR_CODE']}
        />
      </div>
    </>
  );
}
