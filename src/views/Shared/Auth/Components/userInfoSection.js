import { Link } from 'react-router-dom';
import { Form } from 'antd';
import FormElement from 'shared/controls/form';
import { InputField } from 'shared/controls/inputs/inputField';
import { AuthButton } from 'shared/controls/buttons/authButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { LockOutlined } from '@ant-design/icons';
import { INPUT_TYPES } from 'constants/shared/common';

const UserInfoSection = ({ loading, loginUser }) => {
  const [form] = Form.useForm();

  return (
    <FormElement name="login" onSubmit={loginUser} form={form}>
      <InputField
        label="User Name"
        required
        autoFocus
        type={INPUT_TYPES.text}
        name="username"
        prefix={<FontAwesomeIcon className="login_form_icon" icon={faUser} />}
        messageLabel="user name"
        placeholder="Enter User Name"
      />

      <InputField
        label="Password"
        required
        type={INPUT_TYPES.password}
        name="password"
        messageLabel="password"
        prefix={<LockOutlined className="login_form_icon" />}
        placeholder="Enter password"
      />

      <Link to="#" className="forgot_link fs-6 fw-bolder">
        Forgot Password ?
      </Link>

      <AuthButton label="Login" className="mt-4" loading={loading} />
    </FormElement>
  );
};

export default UserInfoSection;
