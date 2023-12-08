import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import ActionMenu from 'shared/components/menu/actionMenu';
import CustomTable from 'shared/controls/Table';
import CheckBox from 'shared/controls/inputs/checkBox';

export default function DetailsListSection({ data, onEdit, onDelete }) {
  const columns = [
    {
      title: 'Line No',
      dataIndex: 'ST_MAIN_ACCOUNT_CODE',
    },
    {
      title: 'From Account',
      dataIndex: 'ST_MAIN_ACCOUNT_DESC',
    },
    {
      title: 'To Account',
      dataIndex: 'ST_SUB_ACCOUNT_CODE',
    },
    {
      title: 'Report Id',
      dataIndex: 'ST_SUB_ACCOUNT_DESC',
    },
    {
      title: 'Debit/Credit',
      dataIndex: 'ST_SUB_ACCOUNT_DESC',
    },
    {
      title: 'Sum/Det',
      dataIndex: 'ST_SUB_ACCOUNT_DESC',
    },
    {
      title: 'Add Ref No To',
      dataIndex: 'ST_SUB_ACCOUNT_DESC',
    },
    {
      title: 'Ref No',
      dataIndex: 'ST_SUB_ACCOUNT_DESC',
    },
    {
      title: 'Str 1',
      dataIndex: 'ST_SUB_ACCOUNT_DESC',
    },
    {
      title: 'Str 2',
      dataIndex: 'ST_SUB_ACCOUNT_DESC',
    },
    {
      title: 'Symbol',
      dataIndex: 'ST_SUB_ACCOUNT_DESC',
    },
    {
      title: 'Indent Position',
      dataIndex: 'ST_SUB_ACCOUNT_DESC',
    },
    {
      title: 'Print',
      dataIndex: 'Active',
      render: (_, record) => <CheckBox value={record?.Active} controlled disabled />,
    },
    {
      title: 'Parenth',
      dataIndex: 'Active',
      render: (_, record) => <CheckBox value={record?.Active} controlled disabled />,
    },
    {
      title: 'Bold',
      dataIndex: 'Active',
      render: (_, record) => <CheckBox value={record?.Active} controlled disabled />,
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
              {
                label: 'Delete',
                buttonType: 'danger',
                icon: <DeleteOutlined />,
                confirmAction: true,
                onClick: () => onDelete(record.id),
              },
            ]}
          />
        );
      },
    },
  ];

  return (
    <CustomTable rowKey="id" searchAble={false} columns={columns} data={data} searchKeys={[]} />
  );
}
