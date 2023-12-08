// import { useState } from 'react';
import CustomTable from 'shared/controls/Table';
import SubHeader from 'shared/layout/subHeader';
import { stringSorter } from 'utils/shared';
import { ACCOUNTS_DATA as data } from 'utils/data/accounts.data';

export default function Accounts() {
  // const [selectedRows, setSelectedRows] = useState([]);

  const columns = [
    {
      dataIndex: 'key',
      rowScope: 'row',
      width: 80,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => stringSorter(a, b, 'name'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];

  // const buttons = [
  //   {
  //     label: 'Add',
  //     key: 'add',
  //     onClick: toggleModal,
  //   },
  //   {
  //     label: 'Delete',
  //     key: 'delete',
  //     buttonType: 'danger',
  //     confirmAction: true,
  //     disabled: !selectedRows?.length,
  //     onClick: handleMultiDelete,
  //   },
  // ];

  return (
    <>
      <SubHeader name="Accounts" />
      <div className="app_page_content user_accounts_container">
        <CustomTable
          columns={columns}
          data={data}
          selectAble={false}
          searchKeys={['name', 'email']}
        />
        <div>
          <CustomTable
            columns={columns}
            data={data}
            selectAble={true}
            scrollY={200}
            cardClassName="custom_table_card_user_accounts"
            // selectedRows={selectedRows}
            // onSelect={onSelect}
            searchKeys={['name', 'email']}
          />
        </div>
      </div>
    </>
  );
}
