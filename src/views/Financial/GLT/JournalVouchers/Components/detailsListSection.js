import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import ActionMenu from 'shared/components/menu/actionMenu';
import CustomTable from 'shared/controls/Table';
import { thousandFormat } from 'utils/shared/numbers';
const { Summary } = Table;

export default function DetailsListSection({
  isApproved,
  detailStats,
  data,
  onEdit,
  onDelete,
  costCentresById,
  formMode,
  modes,
}) {
  const columns = [
    {
      title: 'Main Account Code',
      dataIndex: 'ST_MAIN_ACCOUNT_CODE',
    },
    {
      title: 'Main Account Desc',
      dataIndex: 'ST_MAIN_ACCOUNT_DESC',
    },
    {
      title: 'Sub Account Code',
      dataIndex: 'ST_SUB_ACCOUNT_CODE',
    },
    {
      title: 'Sub Account Desc',
      dataIndex: 'ST_SUB_ACCOUNT_DESC',
    },
    {
      title: 'Cost Centre',
      dataIndex: 'CostCentre',
      render: (_, record) => costCentresById[record.CostCentre]?.title ?? '',
    },
    {
      title: 'Debit/Credit',
      dataIndex: 'TYPE',
    },
    {
      title: 'Amount',
      dataIndex: 'original_amount',
      render: (_, record) => thousandFormat(record.original_amount),
    },
    {
      title: 'Narration',
      dataIndex: 'ST_LINE_NARRATION',
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
                hidden: formMode === modes.copy || isApproved == 1,
              },
            ]}
          />
        );
      },
    },
  ];

  const summary = (pageData) => {
    return (
      <Summary.Row className="journal_voucher_table_summary">
        <Summary.Cell>Credit: {detailStats.totalCredit}</Summary.Cell>
        <Summary.Cell>Debit: {detailStats.totalDebit}</Summary.Cell>
        <Summary.Cell colSpan={3} />
        <Summary.Cell>Difference</Summary.Cell>
        <Summary.Cell>{detailStats.difference}</Summary.Cell>
        <Summary.Cell colSpan={2} />
      </Summary.Row>
    );
  };

  return (
    <>
      <div className="text-end fw-bold me-4">Net Difference {detailStats.netDifference}</div>
      <CustomTable
        rowKey="id"
        searchAble={false}
        columns={columns}
        data={data}
        searchKeys={[]}
        summary={summary}
      />
    </>
  );
}
