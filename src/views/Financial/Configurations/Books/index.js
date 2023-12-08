import { useState } from 'react';
import CustomTable from 'shared/controls/Table';
import SubHeader from 'shared/layout/subHeader';
import BooksFormModal from './Components/booksFormModal';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import ActionMenu from 'shared/components/menu/actionMenu';
import { stringSorter } from 'utils/shared';
import { useConfigBooksQuery } from 'services/api/actions/financial/configurations';
import { useDispatch } from 'react-redux';
import { updatePageLoader } from 'store/actions/shared';

const Books = () => {
  const dispatch = useDispatch();
  const { getList, deleteRecords } = useConfigBooksQuery();
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
      title: 'Voucher Type Code',
      dataIndex: 'ST_VOUCHER_TYPE_CODE',
      sorter: (a, b) => stringSorter(a, b, 'ST_VOUCHER_TYPE_CODE'),
    },
    {
      title: 'Voucher Type Description',
      dataIndex: 'ST_VOUCHER_TYPE_DESC',
      sorter: (a, b) => stringSorter(a, b, 'ST_VOUCHER_TYPE_DESC'),
    },
    {
      title: 'Book Code',
      dataIndex: 'ST_BOOK_CODE',
      sorter: (a, b) => stringSorter(a, b, 'ST_BOOK_CODE'),
    },
    {
      title: 'Book Description',
      dataIndex: 'ST_BOOK_DESC',
      sorter: (a, b) => stringSorter(a, b, 'ST_BOOK_DESC'),
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
      <BooksFormModal open={formModal} onCancel={toggleModal} selected={selected} />

      <SubHeader name="Books" buttons={buttons} />
      <div className="app_page_content">
        <CustomTable
          columns={columns}
          data={resolvedData}
          selectAble={true}
          selectedRows={selectedRows}
          onSelect={onSelect}
          loading={getList.isLoading}
          searchKeys={[
            'ST_VOUCHER_TYPE_CODE',
            'ST_VOUCHER_TYPE_DESC',
            'ST_BOOK_CODE',
            'ST_BOOK_DESC',
          ]}
        />
      </div>
    </>
  );
};

export default Books;
