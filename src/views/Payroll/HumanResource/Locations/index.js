import { useState } from 'react';
import CustomTable from 'shared/controls/Table';
import SubHeader from 'shared/layout/subHeader';
import LocationsFormModal from './Components/locationsFormModal';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import ActionMenu from 'shared/components/menu/actionMenu';
import { numberSorter, stringSorter } from 'utils/shared';
import { useHRLocationsQuery } from 'services/api/actions/payroll/HumanResource';
import { useDispatch } from 'react-redux';
import { updatePageLoader } from 'store/actions/shared';
import CheckBox from 'shared/controls/inputs/checkBox';

const Locations = () => {
  const dispatch = useDispatch();
  const { getList, deleteRecords, submitRecord, invalidateList } = useHRLocationsQuery();
  const [formModal, setFormModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);

  const toggleModal = () => setFormModal((prevState) => !prevState);
  const onSelect = (selectedRowIds) => setSelectedRows(selectedRowIds);

  const onEdit = (record) => {
    setSelected(record);
    toggleModal();
  };

  const onAdd = () => {
    setSelected(null);
    toggleModal();
  };

  const deleteRows = (deleteIds) => {
    dispatch(updatePageLoader(true));
    deleteRecords
      .mutateAsync(deleteIds)
      .then(() => {
        dispatch(updatePageLoader(false));
        setSelectedRows([]);
        setSelected(null);
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const columns = [
    {
      title: 'Code',
      dataIndex: 'id',
      sorter: (a, b) => numberSorter(a, b, 'id'),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      sorter: (a, b) => stringSorter(a, b, 'description'),
    },
    {
      title: 'Head Office / Branch',
      dataIndex: 'headOffice',
      sorter: (a, b) => stringSorter(a, b, 'headOffice'),
    },
    {
      title: 'Branch',
      dataIndex: 'branch',
      sorter: (a, b) => stringSorter(a, b, 'branch'),
    },
    {
      title: 'Dept Code',
      dataIndex: 'deptCode',
      sorter: (a, b) => stringSorter(a, b, 'deptCode'),
    },
    {
      title: 'Post',
      dataIndex: 'POST',
      sorter: (a, b) => numberSorter(a, b, 'POST'),
      render: (_, record) => <CheckBox value={record?.POST} controlled disabled />,
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
                onClick: () => deleteRows([record.OID.toString()]),
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
    {
      label: 'Delete',
      key: 'delete',
      buttonType: 'danger',
      confirmAction: true,
      disabled: !selectedRows.length,
      onClick: () => deleteRows(selectedRows.map((item) => item.toString())),
    },
  ];

  const resolvedData = getList.isError ? [] : getList?.data || [];

  return (
    <>
      <LocationsFormModal
        open={formModal}
        onCancel={toggleModal}
        selected={selected}
        submitRecord={submitRecord}
        invalidateList={invalidateList}
      />

      <SubHeader name="Offices / Locations" buttons={buttons} />
      <div className="app_page_content">
        <CustomTable
          columns={columns}
          data={resolvedData}
          selectAble={true}
          selectedRows={selectedRows}
          onSelect={onSelect}
          loading={getList.isLoading}
          searchKeys={[]}
        />
      </div>
    </>
  );
};

export default Locations;
