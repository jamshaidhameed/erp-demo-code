import { DATE_FORMATE } from 'constants/shared/common';
import PageTitle from 'shared/components/pageTitle';
import CustomTable from 'shared/controls/Table';
import { toLocalDateTime } from 'utils/shared/dateTime';

export default function ListSection({ data }) {
  const columns = [
    {
      title: 'WEF Date',
      dataIndex: 'wefDate',
      render: (_, record) => toLocalDateTime(record.wefDate, DATE_FORMATE[10]),
    },
    {
      title: 'Basic From',
      dataIndex: 'basicFrom',
    },
    {
      title: 'Basic Increment',
      dataIndex: 'basicIncrement',
    },
    {
      title: 'Basic To',
      dataIndex: 'basicTo',
    },
  ];

  return (
    <>
      <PageTitle title="Executive Grade Detail" />

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
