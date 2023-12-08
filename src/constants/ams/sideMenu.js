import { SettingOutlined } from '@ant-design/icons';
import * as keys from 'router/routeKeys/AMSKeys';
import * as routes from 'router/routes/AMSRoutes';

export const sideMenu = [
  {
    name: 'Manage Users',
    key: keys.AMS_MANAGE_USERS,
    icon: <SettingOutlined />,
    url: routes.MANAGE_USERS,
    hasSubMenu: false,
    hasPermission: true,
  },
  {
    name: 'Manage Roles',
    key: keys.AMS_MANAGE_ROLES,
    icon: <SettingOutlined />,
    url: routes.MANAGE_ROLES,
    hasSubMenu: false,
    hasPermission: true,
  },
  {
    name: 'User Type',
    key: keys.AMS_USER_TYPES,
    icon: <SettingOutlined />,
    url: routes.USER_TYPES,
    hasSubMenu: false,
    hasPermission: true,
  },
  {
    name: 'Departments',
    key: keys.AMS_DEPARTMENTS,
    icon: <SettingOutlined />,
    url: routes.DEPARTMENTS,
    hasSubMenu: false,
    hasPermission: true,
  },
  {
    name: 'Cost Centre',
    key: keys.AMS_COST_CENTRE,
    icon: <SettingOutlined />,
    url: routes.COST_CENTRE,
    hasSubMenu: false,
    hasPermission: true,
  },
  {
    name: 'Sites',
    key: keys.AMS_SITES,
    icon: <SettingOutlined />,
    url: routes.SITES,
    hasSubMenu: false,
    hasPermission: true,
  },
];
