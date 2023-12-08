import { SearchOutlined } from '@ant-design/icons';
import SearchInput from 'react-search-input';

const SearchField = ({ setSearch }) => {
  const handleSearch = (text) => {
    setSearch(text);
  };
  return (
    <div className="custom_search_input_container">
      <div className="custom_search_input_content">
        <SearchInput className="custom_search_input px-5" onChange={handleSearch} />
        <SearchOutlined className="custom_search_icon" />
      </div>
    </div>
  );
};

export default SearchField;
