import { EditOutlined } from '@ant-design/icons';
import { DATE_FORMATE, OPEN_CLOSE_ENUM } from 'constants/shared/common';
import ActionMenu from 'shared/components/menu/actionMenu';
import PageTitle from 'shared/components/pageTitle';
import CustomTable from 'shared/controls/Table';
import CheckBox from 'shared/controls/inputs/checkBox';
import { toLocalDateTime } from 'utils/shared/dateTime';

export default function PeriodsListSection({ data, onEdit }) {
  const columns = [
    {
      title: 'Period Code',
      dataIndex: 'ST_PERIOD_CODE',
    },
    {
      title: 'Period Desc',
      dataIndex: 'ST_PERIOD_DESC',
    },
    {
      title: 'From Date',
      dataIndex: 'FROM_DATE',
      render: (_, record) => toLocalDateTime(record.FROM_DATE, DATE_FORMATE[10]),
    },
    {
      title: 'To Date',
      dataIndex: 'TO_DATE',
      render: (_, record) => toLocalDateTime(record.TO_DATE, DATE_FORMATE[10]),
    },
    {
      title: 'Active',
      dataIndex: 'POST',
      render: (_, record) => <CheckBox value={record.POST} controlled disabled />,
    },
    {
      title: 'Status',
      dataIndex: 'PeriodStatus',
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
                onClick: () => onEdit(record),
              },
            ]}
          />
        );
      },
    },
  ];

  return (
    <>
      <PageTitle title="Financial Periods" />

      <CustomTable
        searchAble={false}
        columns={columns}
        data={data}
        searchKeys={[]}
        pagination={false}
      />
    </>
  );
}
