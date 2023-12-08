import { useState } from 'react';
import CustomTable from 'shared/controls/Table';
import SubHeader from 'shared/layout/subHeader';
import EobiFormModal from './Components/eobiFormModal';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import ActionMenu from 'shared/components/menu/actionMenu';
import { numberSorter, stringSorter } from 'utils/shared';
import { useHREobiQuery } from 'services/api/actions/payroll/HumanResource';
import { useDispatch } from 'react-redux';
import { updatePageLoader } from 'store/actions/shared';
import CheckBox from 'shared/controls/inputs/checkBox';
import { toLocalDateTime } from 'utils/shared/dateTime';
import { DATE_FORMATE } from 'constants/shared/common';

const EobiHR = () => {
  const dispatch = useDispatch();
  const { getList, deleteRecords, submitRecord, invalidateList } = useHREobiQuery();
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

  const handleDelete = (id) => {
    dispatch(updatePageLoader(true));
    deleteRecords
      .mutateAsync(id)
      .then(() => {
        dispatch(updatePageLoader(false));
        setSelected(null);
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const columns = [
    {
      title: 'Financial Year Id',
      dataIndex: 'financial_year_id',
      sorter: (a, b) => numberSorter(a, b, 'financial_year_id'),
    },
    {
      title: 'Financial Year Description',
      dataIndex: 'financial_year_description',
      sorter: (a, b) => stringSorter(a, b, 'financial_year_description'),
    },
    {
      title: 'Financial Year Start Date',
      dataIndex: 'start_date',
      sorter: (a, b) => stringSorter(a, b, 'start_date'),
      render: (_, record) => toLocalDateTime(record.start_date, DATE_FORMATE[10]),
    },
    {
      title: 'Financial Year End Date',
      dataIndex: 'end_date',
      sorter: (a, b) => stringSorter(a, b, 'end_date'),
      render: (_, record) => toLocalDateTime(record.end_date, DATE_FORMATE[10]),
    },
    {
      title: 'Minimum Salary',
      dataIndex: 'minimum_salary',
      sorter: (a, b) => numberSorter(a, b, 'minimum_salary'),
    },
    {
      title: 'Employee Contribution',
      dataIndex: 'employee_contribution',
      sorter: (a, b) => numberSorter(a, b, 'employee_contribution'),
    },
    {
      title: 'Employee Amount',
      dataIndex: 'employee_amount',
      sorter: (a, b) => numberSorter(a, b, 'employee_amount'),
    },
    {
      title: 'Employer Contribution',
      dataIndex: 'employer_contribution',
      sorter: (a, b) => numberSorter(a, b, 'employer_contribution'),
    },
    {
      title: 'Employer Amount',
      dataIndex: 'employer_amount',
      sorter: (a, b) => numberSorter(a, b, 'employer_amount'),
    },
    {
      title: 'Post',
      dataIndex: 'post',
      sorter: (a, b) => numberSorter(a, b, 'post'),
      render: (_, record) => <CheckBox value={record?.post} controlled disabled />,
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) => {
        return (
          <ActionMenu
            menu={true}
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
                onClick: () => handleDelete(record.id),
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
      <EobiFormModal
        submitRecord={submitRecord}
        invalidateList={invalidateList}
        open={formModal}
        onCancel={toggleModal}
        selected={selected}
      />

      <SubHeader name="EOBI" buttons={buttons} />
      <div className="app_page_content">
        <CustomTable
          columns={columns}
          data={resolvedData}
          loading={getList.isLoading}
          searchKeys={[
            'financial_year_id',
            'financial_year_description',
            'minimum_salary',
            'employee_contribution',
            'employee_amount',
            'employer_contribution',
            'employer_amount',
          ]}
        />
      </div>
    </>
  );
};

export default EobiHR;
