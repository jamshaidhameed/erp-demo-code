import { UserOutlined } from '@ant-design/icons';
import * as keys from 'router/routeKeys';
import { HOME } from 'router/routes';
import { MANAGE_USERS } from 'router/routes/AMSRoutes';
import { ADMIN_USER_STORES } from 'router/routes/inventoryRoutes';
import { FINANCIAL_DASHBOARD } from 'router/routes/financialRoutes';
import { PAYROLL_DASHBOARD } from 'router/routes/payrollRoutes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserShield,
  faCoins,
  faUsers,
  faMoneyCheck,
  faPeopleArrows,
  faRulerCombined,
  faMoneyBillWave,
  faLayerGroup,
  faBusAlt,
  faUserTie,
  faCogs,
  faTools,
  faCubes,
} from '@fortawesome/free-solid-svg-icons';

export const sideMenu = [
  {
    name: 'Home',
    key: keys.DEFAULT_HOME,
    icon: <UserOutlined />,
    url: HOME,
    hasSubMenu: false,
    hasPermission: true,
    menu: [],
  },
  {
    name: 'AMS',
    key: keys.DEFAULT_AMS,
    icon: <FontAwesomeIcon icon={faUserShield} />,
    url: MANAGE_USERS,
    hasSubMenu: false,
    hasPermission: true,
    menu: [],
  },
  {
    name: 'Inventory',
    key: keys.DEFAULT_INVENTORY,
    icon: <FontAwesomeIcon icon={faCubes} />,
    url: ADMIN_USER_STORES,
    hasSubMenu: false,
    hasPermission: true,
    menu: [],
  },
  {
    name: 'Financial',
    key: keys.DEFAULT_FINANCIAL,
    icon: <FontAwesomeIcon icon={faCoins} />,
    url: FINANCIAL_DASHBOARD,
    hasSubMenu: false,
    hasPermission: true,
    menu: [],
  },
  {
    name: 'Human Resources',
    key: keys.DEFAULT_HUMAN_RESOURCES,
    icon: <FontAwesomeIcon icon={faUsers} />,
    url: '',
    hasSubMenu: false,
    hasPermission: true,
    menu: [],
  },
  {
    name: 'Payroll',
    key: keys.DEFAULT_PAYROLL,
    icon: <FontAwesomeIcon icon={faMoneyCheck} />,
    url: PAYROLL_DASHBOARD,
    hasSubMenu: false,
    hasPermission: true,
    menu: [],
  },
  {
    name: 'Group Consolidation',
    key: keys.DEFAULT_GROUP_CONSOLIDATION,
    icon: <FontAwesomeIcon icon={faPeopleArrows} />,
    url: '',
    hasSubMenu: false,
    hasPermission: true,
    menu: [],
  },
  {
    name: 'Production Planning and Control',
    key: keys.DEFAULT_PRODUCTION_PLANNING,
    icon: <FontAwesomeIcon icon={faRulerCombined} />,
    url: '',
    hasSubMenu: false,
    hasPermission: true,
    menu: [],
  },
  {
    name: 'Raw Material Management',
    key: keys.DEFAULT_RAW_MATERIAL,
    icon: <FontAwesomeIcon icon={faTools} />,
    url: '',
    hasSubMenu: false,
    hasPermission: true,
    menu: [],
  },
  {
    name: 'Costing',
    key: keys.DEFAULT_COSTING,
    icon: <FontAwesomeIcon icon={faMoneyBillWave} />,
    url: '',
    hasSubMenu: false,
    hasPermission: true,
    menu: [],
  },
  {
    name: 'Transportation',
    key: keys.DEFAULT_TRANSPORTATION,
    icon: <FontAwesomeIcon icon={faBusAlt} />,
    url: '',
    hasSubMenu: false,
    hasPermission: true,
    menu: [],
  },
  {
    name: 'Quality Control',
    key: keys.DEFAULT_QUALITY_CONTROL,
    icon: <FontAwesomeIcon icon={faCogs} />,
    url: '',
    hasSubMenu: false,
    hasPermission: true,
    menu: [],
  },
  {
    name: 'Visitor Management',
    key: keys.DEFAULT_VISITOR_MANAGEMENT,
    icon: <FontAwesomeIcon icon={faUserTie} />,
    url: '',
    hasSubMenu: false,
    hasPermission: true,
    menu: [],
  },
  {
    name: 'Fixed Assets',
    key: keys.DEFAULT_VISITOR_FIXED_ASSETS,
    icon: <FontAwesomeIcon icon={faLayerGroup} />,
    url: '',
    hasSubMenu: false,
    hasPermission: true,
    menu: [],
  },
];
