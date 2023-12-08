import React from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import UserMenu from './userMenu';
import { NavLink, Link, useLocation, useLoaderData } from 'react-router-dom';
import { app_logo } from 'utils/shared/images';
import { HOME } from 'router/routes';
import { MANAGE_USERS } from 'router/routes/AMSRoutes';
import menuKeys from 'router/menuKeys';
import OrganizationSelect from 'shared/controls/select/organizationSelect';

const { Header } = Layout;

export default function AppHeader({
  mobileView,
  hidden,
  toggle,
  topContainerWidth,
  top = 0,
  height,
  collapsed,
  onCollapse,
  hideSidebar,
  hideHeaderMenu,
}) {
  const { pathname } = useLocation();
  const { menuKey } = useLoaderData();

  return (
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: topContainerWidth,
        top,
        height,
        borderBottom: '1px solid rgb(239, 242, 245)',
      }}
      className="site-layout-background app-layout-main-header">
      <div className="header-main">
        <div className="left-header">
          {(mobileView || hidden) && (
            <Link to={HOME}>
              <div className="full_header_app_logo_container">
                <img className="full-header-app-logo" src={app_logo} />
              </div>
            </Link>
          )}

          {!hideSidebar && (
            <div
              className="header-menu-icon"
              onClick={() => (mobileView ? toggle() : onCollapse(!collapsed))}>
              {React.createElement(hidden || collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
              })}
            </div>
          )}

          {!hideHeaderMenu && (
            <div className="d-flex gap-2 items-center pt-2 header_menu">
              <NavLink
                to={HOME}
                className={`${pathname === HOME ? 'header_menu-active ' : ''}header_menu_item`}>
                Home
              </NavLink>

              <NavLink
                to={MANAGE_USERS}
                className={`${
                  menuKey && menuKey === menuKeys.ams ? 'header_menu-active ' : ''
                }header_menu_item`}>
                AMS
              </NavLink>
            </div>
          )}
        </div>

        <div className="right-header">
          <OrganizationSelect disabled />
          <UserMenu />
        </div>
      </div>
    </Header>
  );
}
