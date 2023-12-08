import { Modal } from 'antd';

const CustomModal = (props) => {
  return (
    <Modal centered {...props}>
      {props.children}
    </Modal>
  );
};

export default CustomModal;
