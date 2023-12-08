import { useState } from 'react';
import SubHeader from 'shared/layout/subHeader';
import { EditOutlined } from '@ant-design/icons';
import CustomTable from 'shared/controls/Table';
import ActionMenu from 'shared/components/menu/actionMenu';
import { stringSorter } from 'utils/shared';
import GeneralSettingFormModal from './Components/generalSettingFormModal';
import { useGeneralSettingQuery } from 'services/api/actions/financial/configurations';

export default function GeneralSetting() {
  const [addModal, setAddModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const { getList } = useGeneralSettingQuery();

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
      title: 'Freight Account',
      dataIndex: 'FreightAccountDesc',
      sorter: (a, b) => stringSorter(a, b, 'FreightAccountDesc'),
    },
    {
      title: 'Misc. Account',
      dataIndex: 'MisctAccountDesc',
      sorter: (a, b) => stringSorter(a, b, 'MisctAccountDesc'),
    },
    {
      title: 'Security Account',
      dataIndex: 'SecurityAccountDesc',
      sorter: (a, b) => stringSorter(a, b, 'SecurityAccountDesc'),
    },
    {
      title: 'Inventory variant A/C',
      dataIndex: 'InvVarianceAccountDesc',
      sorter: (a, b) => stringSorter(a, b, 'InvVarianceAccountDesc'),
    },
    {
      title: 'WHT-GST Account',
      dataIndex: 'WHTGSTAccountDesc',
      sorter: (a, b) => stringSorter(a, b, 'WHTGSTAccountDesc'),
    },
    {
      title: 'GST Input',
      dataIndex: 'GstInputAccountDesc',
      sorter: (a, b) => stringSorter(a, b, 'GstInputAccountDesc'),
    },
    {
      title: 'WHT Input',
      dataIndex: 'WhtInputAccountDesc',
      sorter: (a, b) => stringSorter(a, b, 'WhtInputAccountDesc'),
    },
    {
      title: 'PRA',
      dataIndex: 'PRAAccountDesc',
      sorter: (a, b) => stringSorter(a, b, 'PRAAccountDesc'),
    },
    {
      title: 'Commission',
      dataIndex: 'CommissionAccountDesc',
      sorter: (a, b) => stringSorter(a, b, 'CommissionAccountDesc'),
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
      <SubHeader name="General Setting" buttons={buttons} />
      <div className="app_page_content">
        <div className="app_page_content">
          <CustomTable
            columns={columns}
            data={resolvedData}
            selectAble={false}
            loading={getList.isLoading}
            searchKeys={[
              'PolicyName',
              'FreightAccountDesc',
              'MisctAccountDesc',
              'SecurityAccountDesc',
              'InvVarianceAccountDesc',
              'WHTGSTAccountDesc',
              'GstInputAccountDesc',
              'WhtInputAccountDesc',
              'PRAAccountDesc',
              'CommissionAccountDesc',
            ]}
          />
        </div>
      </div>

      <GeneralSettingFormModal open={addModal} onCancel={toggleModal} selected={selected} />
    </>
  );
}
