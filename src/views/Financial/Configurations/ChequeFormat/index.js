import { useState } from 'react';
import CustomTable from 'shared/controls/Table';
import SubHeader from 'shared/layout/subHeader';
import { stringSorter } from 'utils/shared';
import ChequeFormatFormModal from './Components/chequeFormatFormModal';
import ActionMenu from 'shared/components/menu/actionMenu';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useChequeFormatQuery } from 'services/api/actions/financial/configurations';
import { useDispatch } from 'react-redux';
import { updatePageLoader } from 'store/actions/shared';
import { toLocalDateTime } from 'utils/shared/dateTime';
import { DATE_FORMATE } from 'constants/shared/common';

export default function ChequeFormat() {
  const [addModal, setAddModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();

  const { getList, deleteRecord } = useChequeFormatQuery();

  const onAdd = () => {
    setSelected(null);
    toggleModal();
  };

  const onEdit = (record) => {
    setSelected(record);
    toggleModal();
  };

  const toggleModal = () => {
    setAddModal((prevState) => !prevState);
  };

  const handleSingleDelete = (record) => {
    deleteRecord
      .mutateAsync([record.OID])
      .then(() => {
        dispatch(updatePageLoader(false));
        setSelected(null);
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const columns = [
    {
      title: 'Cheque Name',
      dataIndex: 'CHEQUENAME',
      sorter: (a, b) => stringSorter(a, b, 'CHEQUENAME'),
    },
    {
      title: 'Cheque Date',
      dataIndex: 'CHEQUEDATE',
      sorter: (a, b) => stringSorter(a, b, 'CHEQUEDATE'),
      render: (_, record) => toLocalDateTime(record.FROM_DATE, DATE_FORMATE[10]),
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
      <SubHeader name="Cheque Format" buttons={buttons} />
      <div className="app_page_content">
        <CustomTable
          columns={columns}
          data={resolvedData}
          loading={getList.isLoading}
          searchKeys={['CHEQUENAME']}
        />
      </div>

      <ChequeFormatFormModal open={addModal} selected={selected} onCancel={toggleModal} />
    </>
  );
}
