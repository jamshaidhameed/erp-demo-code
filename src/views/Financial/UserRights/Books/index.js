import CustomTable from 'shared/controls/Table';
import SubHeader from 'shared/layout/subHeader';
import { stringSorter } from 'utils/shared';
import { useUserRightsBooksQuery } from 'services/api/actions/financial/userRights';
import UserRightsBooksList from './Components/userRightBooksList';
import { useState } from 'react';
import { updatePageLoader } from 'store/actions/shared';
import { useDispatch } from 'react-redux';

export default function Books() {
  const { getUsersList, assignBooks } = useUserRightsBooksQuery({
    listKey: '',
  });

  const dispatch = useDispatch();

  const [selectedUser, setSelectedUser] = useState('');
  const [selectedBooks, setSelectedBooks] = useState([]);

  const handleSelect = (record, selected, selectedRows, nativeEvent) => {
    setSelectedUser(selected?.[0]?.OID);
  };

  const accountsColumns = [
    {
      dataIndex: 'key',
      rowScope: 'row',
      width: 50,
    },
    {
      title: 'Name',
      dataIndex: 'user_name',
      sorter: (a, b) => stringSorter(a, b, 'user_name'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: (a, b) => stringSorter(a, b, 'email'),
    },
  ];

  const handleUpdate = () => {
    const data = {
      book_ids: selectedBooks,
      action: 'update',
      user_ID: selectedUser,
    };
    dispatch(updatePageLoader(true));
    assignBooks
      .mutateAsync(data)
      .then(() => {
        dispatch(updatePageLoader(false));
        setSelectedBooks([]);
        // setSelected(null);
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const buttons = [
    {
      label: 'Update',
      key: 'update',
      onClick: () => handleUpdate(),
      disabled: !selectedUser,
    },
  ];

  const usersData = getUsersList.isError ? [] : getUsersList?.data || [];

  return (
    <>
      <SubHeader name="Books" buttons={buttons} />
      <div className="app_page_content user_accounts_container">
        <CustomTable
          columns={accountsColumns}
          data={usersData}
          selectAble={true}
          loading={getUsersList.isLoading}
          selectionType="radio"
          onSelect={handleSelect}
          selectedRows={[selectedUser]}
          scrollY={200}
          cardClassName="custom_table_card_user_accounts"
          searchKeys={['user_name', 'email']}
        />
        <UserRightsBooksList
          userId={selectedUser}
          selectedBooks={selectedBooks}
          setSelectedBooks={setSelectedBooks}
        />
      </div>
    </>
  );
}
