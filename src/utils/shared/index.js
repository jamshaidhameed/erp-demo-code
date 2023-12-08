import { DEFAULT_MSG } from 'constants/shared/common';
import { Modal } from 'antd';

export const numberSorter = (a, b, column) => a[column] - b[column];
export const stringSorter = (a, b, column) => a[column]?.localeCompare(b[column]);

export const resolveObject = (obj) =>
  obj && obj.constructor === Object && Object.keys(obj).length > 0 ? obj : null;

export const parseError = (error) =>
  error?.message || error?.meta?.message || DEFAULT_MSG.StandardErrorMsg;

export const confirm = (
  title,
  content,
  onOk,
  okType = 'danger',
  okText = 'Yes',
  cancelText = 'No'
) => {
  Modal.confirm({
    title,
    content,
    okText,
    okType,
    cancelText,
    onOk,
  });
};
