import { LoadingOutlined } from '@ant-design/icons';
import { Form, AutoComplete, Spin } from 'antd';
import { debounce } from 'lodash';
import { useEffect, useMemo } from 'react';
import { listByAttributeName } from 'utils/shared/list';

const AutoCompleteInput = ({
  label,
  name,
  messageLabel,
  placeholder = 'Search',
  onChange,
  onSearch,
  value,
  options = [],
  required = false,
  controlled = false,
  autoFocus = false,
  allowClear = false,
  loading = false,
  className = '',
  disabled = false,
  parentClassName = '',
  style = {},
  async = false,
  selectedOption = null,
  defaultValue = '',
}) => {
  const debouncedSearch = useMemo(
    () =>
      debounce((value) => {
        if (async) onSearch(value);
      }, 500),
    []
  );

  const notFoundContent = useMemo(
    () =>
      loading ? (
        <Spin
          style={{ fontSize: 20 }}
          indicator={<LoadingOutlined style={{ color: '#635bff' }} spin />}
        />
      ) : (
        ''
      ),
    [loading]
  );

  const optionsByLabel = useMemo(() => listByAttributeName(options, 'value'), [options]);

  const filterOption = (inputValue, option) =>
    (option.label ?? '').toLowerCase().includes(inputValue.toLowerCase());

  const handleOnChange = (value, option) =>
    onChange({ value: option?.label ?? value, option, defaultValue: '' });

  const onBlur = () => {
    if (selectedOption == null && value) handleOnChange('', null);
  };

  const attributes = () => {
    const inputProps = {
      popupClassName: `antd-selectInput-custom ${className}`,
      placeholder,
      autoFocus,
      allowClear,
      disabled,
      options,
      notFoundContent,
      filterOption: async ? false : filterOption,
    };

    if (async) inputProps.onSearch = debouncedSearch;

    if (controlled) {
      inputProps.value = value;
      inputProps.onChange = (value) => handleOnChange(value, null);
      inputProps.onSelect = handleOnChange;
      inputProps.onBlur = onBlur;
    }

    return inputProps;
  };

  useEffect(() => {
    if (defaultValue && optionsByLabel[defaultValue]) {
      onChange({
        value: optionsByLabel[defaultValue].label,
        option: optionsByLabel[defaultValue],
        defaultValue: '',
      });
    }
  }, [defaultValue, optionsByLabel]);

  return (
    <Form.Item
      name={name}
      style={style}
      className={parentClassName}
      validateTrigger="onBlur"
      label={label}
      rules={[
        {
          required,
          message: `Please select ${messageLabel}.`,
        },
      ]}>
      <AutoComplete {...attributes()} />
    </Form.Item>
  );
};

export default AutoCompleteInput;
