import { useSelector, useDispatch } from 'react-redux';
import { Menu, Dropdown } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import { UserAvatar } from 'utils/shared/images';
import { logout } from 'store/actions/shared';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from 'router/routes';

export default function UserMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const logoutUser = () => {
    dispatch(logout());
    navigate(LOGIN);
  };

  const menu = (
    <Menu className="user-dropdown-menu">
      <div className="user-dropdown-menu-user-info">
        {/* <div className="user-dropdown-menu-options">
          <Avatar className="user-menu-avatar" style={{ backgroundColor: '#635bff' }}>
            Ali
          </Avatar>
        </div> */}
        <div className="user-dropdown-menu-options">{user?.USERNAME}</div>
        {/* <div className="user-dropdown-menu-options">Ali@yahoo.com</div> */}
      </div>
      <div className="user-dropdown-menu-user-options">
        <Menu.Item>Profile</Menu.Item>
        <Menu.Item onClick={logoutUser}>
          {/* <span className="logout-icon">
            <img src={logoutIcon} />
          </span> */}
          Logout
        </Menu.Item>
      </div>
    </Menu>
  );

  return (
    <div className="user_icon_dropdown">
      <Dropdown overlay={menu} trigger={['click']}>
        <img src={UserAvatar} className="user_avatar" />
        {/* <Avatar shape="square" size="large" icon={UserAvatar} /> */}
      </Dropdown>
    </div>
  );
}
