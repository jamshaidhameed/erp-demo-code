import { useEffect } from 'react';
import CustomTable from 'shared/controls/Table';
import { numberSorter, stringSorter } from 'utils/shared';
import { useUserRightsBooksQuery } from 'services/api/actions/financial/userRights';
import { useConfigBooksQuery } from 'services/api/actions/financial/configurations';

export default function UserRightsBooksList({ userId, selectedBooks, setSelectedBooks }) {
  const { getBooksList } = useUserRightsBooksQuery({
    listKey: userId,
    userId: userId,
    loadUserList: false,
  });
  const { getList: getAllBooks } = useConfigBooksQuery();

  const booksColumns = [
    {
      title: 'Code',
      dataIndex: 'ST_BOOK_CODE',
      sorter: (a, b) => numberSorter(a, b, 'ST_BOOK_CODE'),
    },
    {
      title: 'Description',
      dataIndex: 'ST_BOOK_DESC',
      sorter: (a, b) => stringSorter(a, b, 'ST_BOOK_DESC'),
    },
  ];

  const allBooks = getAllBooks.isError ? [] : getAllBooks?.data && userId ? getAllBooks?.data : [];

  const assignedBooks = getBooksList.isError ? [] : getBooksList?.data || [];

  const onSelect = (selectedRowIds) => setSelectedBooks(selectedRowIds);

  useEffect(() => {
    if (allBooks?.length > 0 && assignedBooks?.length > 0) {
      const booksIds = assignedBooks?.map((item) => item.GL_BOOKS) ?? [];
      setSelectedBooks(booksIds);
    } else {
      setSelectedBooks([]);
    }
  }, [getBooksList?.data, getAllBooks?.data]);

  return (
    <div className="mt-4">
      <CustomTable
        columns={booksColumns}
        // data={data}
        data={allBooks}
        selectAble={true}
        selectedRows={selectedBooks}
        onSelect={onSelect}
        loading={getBooksList.isLoading}
        scrollY={200}
        cardClassName="custom_table_card_user_accounts pt-2"
        // selectedRows={selectedRows}
        // onSelect={onSelect}
        searchKeys={['ST_BOOK_CODE', 'ST_BOOK_DESC']}
      />
    </div>
  );
}
