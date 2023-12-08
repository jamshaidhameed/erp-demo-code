import { Layout, Menu } from 'antd';
import { app_logo, mobile_logo } from 'utils/shared/images';
import { Link, useLoaderData } from 'react-router-dom';
import { sideMenu as financialMenu } from 'constants/financial/sideMenu';
import { sideMenu as amsMenu } from 'constants/ams/sideMenu';
import { sideMenu as inventoryMenu } from 'constants/inventory/sideMenu';
import { sideMenu as payrollMenu } from 'constants/payroll/sideMenu';
import { sideMenu as defaultMenu } from 'constants/shared/sideMenu';
import menuKeys from 'router/menuKeys';
import { HOME } from 'router/routes';
import { useMemo } from 'react';

const { Sider } = Layout;
const { SubMenu } = Menu;

const menuList = {
  [menuKeys.default]: defaultMenu,
  [menuKeys.financial]: financialMenu,
  [menuKeys.ams]: amsMenu,
  [menuKeys.inventory]: inventoryMenu,
  [menuKeys.payroll]: payrollMenu,
};

export default function SideBar({ collapsed, hidden, onCollapse, width, mobileView, toggle, top }) {
  const { routeKey, menuKey } = useLoaderData();
  const resolvedMenu = menuList[menuKey] ?? [];

  const onMenuItemClick = () => {
    if (mobileView) toggle();
  };

  const renderMenu = (data) => {
    const content = [];
    for (const menu of data) {
      if (menu.hasPermission) {
        content.push(
          menu.hasSubMenu && menu.menu?.length > 0 ? (
            <SubMenu key={menu.key} icon={menu.icon} title={menu.name}>
              <div className="sidebar_border" />
              {renderMenu(menu.menu)}
            </SubMenu>
          ) : (
            <Menu.Item key={menu.key} icon={menu.icon} onClick={onMenuItemClick}>
              <Link to={menu.url}>{menu.name}</Link>
            </Menu.Item>
          )
        );
      }
    }
    return content;
  };

  const menuOptions = useMemo(() => renderMenu(resolvedMenu), [resolvedMenu]);

  return (
    <Sider
      id="app_layout_sidebar"
      theme="light"
      // collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={width}
      {...(mobileView ? { trigger: null } : {})}
      hidden={hidden}
      {...(mobileView ? { width: '100vw' } : {})}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: mobileView ? top : 0,
        bottom: 0,
        zIndex: 999,
      }}>
      {!mobileView && (
        <Link to={HOME} className="sidebar_logo_wrapper">
          <div className={`sidebar-logo-container ${collapsed ? 'sidebar-logo-collapsed' : ''}`}>
            <img src={collapsed ? mobile_logo : app_logo} className="sidebar_logo" />
          </div>
        </Link>
      )}

      <div className="list_item_menu">
        <Menu
          className="custom_scroll app_layout_sidebar_menu"
          theme="light"
          selectedKeys={[routeKey]}
          mode="inline"
          style={{ height: mobileView ? '85vh' : '90vh' }}>
          {menuOptions}
        </Menu>
      </div>
    </Sider>
  );
}
