import { useEffect, useRef } from 'react';
import { Button as ButtonComponent } from 'antd';
import { confirm } from 'utils/shared';
import { useSelector } from 'react-redux';
import { shortKeys, DEFAULT_MSG } from 'constants/shared/common';

const typesClass = {
  primary: 'custom_button_primary',
  secondary: 'custom_button_secondary',
  danger: 'custom_button_danger',
};

const Button = ({
  label,
  onClick,
  icon = '',
  type = 'primary',
  buttonType = 'primary',
  htmlType = 'button',
  loading = false,
  className = '',
  disabled = false,
  confirmAction = false,
  confirmTitle = 'Deleting',
  confirmMsg = DEFAULT_MSG.DeleteConfirmMsg,
  shortKey = '',
  style = {},
}) => {
  const actionKey = shortKey && shortKeys[shortKey] ? shortKey : '';
  const { pageLoading, appLoading } = useSelector((state) => state.showLoader);

  const PageLoadingRef = useRef(pageLoading);
  PageLoadingRef.current = pageLoading;

  const AppLoadingRef = useRef(appLoading);
  AppLoadingRef.current = appLoading;

  const LoadingRef = useRef(loading);
  LoadingRef.current = loading;

  const DisabledRef = useRef(disabled);
  DisabledRef.current = disabled;

  const buttonRef = useRef();

  const enableShortKey = (event) => {
    if (actionKey !== event.key) return;

    event.preventDefault();
    const modalElement = document.getElementsByClassName('ant-modal');
    const modalHidden =
      modalElement.length === 0 || [...modalElement].every((item) => item.offsetWidth === 0);

    if (
      !PageLoadingRef.current &&
      !AppLoadingRef.current &&
      !LoadingRef.current &&
      !DisabledRef.current &&
      modalHidden
    )
      buttonRef.current.click();
  };

  useEffect(() => {
    if (actionKey) {
      window.addEventListener('keydown', enableShortKey);
      return () => window.removeEventListener('keydown', enableShortKey);
    }
  }, []);

  return (
    <ButtonComponent
      ref={buttonRef}
      className={`custom_button ${className} ${typesClass[buttonType]}`}
      type={type}
      style={style}
      htmlType={htmlType}
      loading={loading}
      onClick={() => (confirmAction ? confirm(confirmTitle, confirmMsg, onClick) : onClick())}
      disabled={loading || disabled}>
      {loading ? (
        <></>
      ) : (
        <div className="custom_button_content">
          {icon && icon}
          <span>{actionKey ? `${label} (${actionKey})` : label}</span>
        </div>
      )}
    </ButtonComponent>
  );
};

export default Button;
