import SubHeader from 'shared/layout/subHeader';
import CustomTable from 'shared/controls/Table';
import { useFinancialYearsQuery } from 'services/api/actions/financial/configurations';
import ActionMenu from 'shared/components/menu/actionMenu';
import { useState } from 'react';
import FinancialYearsFormModal from './Components/financialYearsFormModal';
import { EditOutlined } from '@ant-design/icons';
import { numberSorter, stringSorter } from 'utils/shared';
import { toLocalDateTime } from 'utils/shared/dateTime';
import { DATE_FORMATE, OPEN_CLOSE_ENUM } from 'constants/shared/common';
import CheckBox from 'shared/controls/inputs/checkBox';

export default function FinancialYears() {
  const { getList } = useFinancialYearsQuery();
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

  const columns = [
    {
      title: 'Year Code',
      dataIndex: 'ST_YEAR_CODE',
      sorter: (a, b) => stringSorter(a, b, 'ST_YEAR_CODE'),
    },
    {
      title: 'Year Desc',
      dataIndex: 'ST_FIN_YEAR_DESC',
      sorter: (a, b) => stringSorter(a, b, 'ST_FIN_YEAR_DESC'),
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
      title: 'Period Status',
      dataIndex: 'PeriodStatus',
      sorter: (a, b) => numberSorter(a, b, 'PeriodStatus'),
      render: (_, record) => OPEN_CLOSE_ENUM[record.PeriodStatus],
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
      <FinancialYearsFormModal open={formModal} onCancel={toggleModal} selected={selected} />

      <SubHeader name="Financial Years" buttons={buttons} />
      <div className="app_page_content">
        <CustomTable
          columns={columns}
          data={resolvedData}
          loading={getList.isLoading}
          searchKeys={['ST_YEAR_CODE', 'ST_FIN_YEAR_DESC']}
        />
      </div>
    </>
  );
}
