import { Form, Input, InputNumber, Table } from 'antd';
import { useState } from 'react';
import Card from 'shared/components/card';
import SearchField from 'shared/components/searchField';
import { createFilter } from 'react-search-input';
import { resolveArray } from 'utils/shared/list';

const CustomTable = ({
  columns = [],
  data = [],
  rowClassName = '',
  loading = false,
  selectAble = false,
  selectedRows = [],
  onSelect,
  pagination = true,
  current,
  pageSize,
  total,
  pageSizeOptions = [10, 20, 50, 100],
  onChange,
  isEditing,
  scrollX = 768,
  scrollY = null,
  searchAble = true,
  searchKeys = [],
  cardClassName, // ClassName for Parent Card
  rowKey = 'OID',
  selectionType = 'checkbox',
  summary = () => {},
}) => {
  const [searchText, setSearchText] = useState('');

  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}>
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  // const mergedColumns = columns.map((col) => {
  //   if (!col.editable) {
  //     return col;
  //   }

  //   return {
  //     ...col,
  //     onCell: (record) => ({
  //       record,
  //       inputType: col.dataIndex === 'age' ? 'number' : 'text',
  //       dataIndex: col.dataIndex,
  //       title: col.title,
  //       editing: isEditing(record),
  //     }),
  //   };
  // });

  // const showTotal = () => {
  //   return data?.length ?? 0;
  // };

  const searchedData = [...resolveArray(data)].filter(createFilter(searchText, searchKeys));

  const scroll = {};
  if (scrollX != null) scroll.x = scrollX;
  if (scrollY != null) scroll.y = scrollY;

  return (
    <Card className={`table_card_container ${cardClassName}`}>
      {searchAble && <SearchField setSearch={setSearchText} />}

      <Table
        columns={columns}
        dataSource={searchedData}
        rowClassName={rowClassName}
        loading={loading}
        rowKey={rowKey}
        onChange={onChange}
        rowSelection={
          selectAble && {
            selectedRows,
            onChange: onSelect,
            type: selectionType,
            // selections: true,
            selectedRowKeys: selectedRows,
          }
        }
        scroll={scroll}
        pagination={
          pagination && {
            total,
            pageSize,
            current,
            showSizeChanger: true,
            size: 'small',
            pageSizeOptions,
          }
        }
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        summary={summary}
      />
    </Card>
  );
};

export default CustomTable;
