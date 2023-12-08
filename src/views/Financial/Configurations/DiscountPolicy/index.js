import { useState } from 'react';
import SubHeader from 'shared/layout/subHeader';
import { EditOutlined } from '@ant-design/icons';
import CustomTable from 'shared/controls/Table';
import ActionMenu from 'shared/components/menu/actionMenu';
import { stringSorter, numberSorter } from 'utils/shared';
import DiscountPolicyFormModal from './Components/discountPolicyFormModal';
import { useDiscountPolicyQuery } from 'services/api/actions/financial/configurations';
import CheckBox from 'shared/controls/inputs/checkBox';

export default function DiscountPolicy() {
  const [addModal, setAddModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const { getList } = useDiscountPolicyQuery();

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

  const resolvedData = getList.isError ? [] : getList?.data || [];

  const columns = [
    {
      title: 'Policy Name',
      dataIndex: 'PolicyName',
      sorter: (a, b) => stringSorter(a, b, 'PolicyName'),
    },
    {
      title: 'Policy Desc',
      dataIndex: 'PolicyDesc',
      sorter: (a, b) => stringSorter(a, b, 'PolicyDesc'),
    },
    {
      title: 'Discount %',
      dataIndex: 'DiscountPerc',
      sorter: (a, b) => numberSorter(a, b, 'DiscountPerc'),
    },
    {
      title: 'Active',
      dataIndex: 'Active',
      sorter: (a, b) => numberSorter(a, b, 'Active'),
      render: (_, record) => <CheckBox value={record?.Active} controlled disabled />,
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
  return (
    <>
      <SubHeader name="Discount Policy" buttons={buttons} />
      <div className="app_page_content">
        <div className="app_page_content">
          <CustomTable
            columns={columns}
            data={resolvedData}
            selectAble={false}
            loading={getList.isLoading}
            searchKeys={['PolicyName', 'PolicyDesc', 'DiscountPerc']}
          />
        </div>
      </div>

      <DiscountPolicyFormModal open={addModal} onCancel={toggleModal} selected={selected} />
    </>
  );
}
