import HomeCard from './Components/card';
import SubHeader from 'shared/layout/subHeader';
import { FINANCIAL_DASHBOARD } from 'router/routes/financialRoutes';
import { PAYROLL_DASHBOARD } from 'router/routes/payrollRoutes';
import { ADMIN_USER_STORES } from 'router/routes/inventoryRoutes';
import { MANAGE_USERS } from 'router/routes/AMSRoutes';

import {
  faUserShield,
  faCubes,
  faCoins,
  faUsers,
  faMoneyCheck,
  faMoneyBillWave,
  faLayerGroup,
  faPeopleArrows,
  faRulerCombined,
  faBusAlt,
  faUserTie,
  faCogs,
  faTools,
} from '@fortawesome/free-solid-svg-icons';

const cards = [
  {
    title: 'AMS',
    image: faUserShield,
    color: '#50cd89',
    bgColor: '#e8fff3',
    to: MANAGE_USERS,
  },
  {
    title: 'Inventory',
    image: faCubes,
    color: '#50cd89',
    bgColor: '#e8fff3',
    to: ADMIN_USER_STORES,
  },
  {
    title: 'Financial',
    image: faCoins,
    color: '#009ef7',
    bgColor: '#f1faff',
    to: FINANCIAL_DASHBOARD,
  },
  {
    title: 'Human Resources',
    image: faUsers,
    color: '#f1416c',
    bgColor: '#fff5f8',
    to: '',
  },
  {
    title: 'Payroll',
    image: faMoneyCheck,
    color: '#ffc700',
    bgColor: '#fff8dd',
    to: PAYROLL_DASHBOARD,
  },
  {
    title: 'Group Consolidation',
    image: faPeopleArrows,
    color: '#50cd89',
    bgColor: '#e8fff3',
    to: '',
  },
  {
    title: 'Production Planning and Control',
    image: faRulerCombined,
    color: '#009ef7',
    bgColor: '#f1faff',
    to: '',
  },
  {
    title: 'Raw Material Management',
    image: faTools,
    color: '#f1416c',
    bgColor: '#fff5f8',
    to: '',
  },
  {
    title: 'Costing',
    image: faMoneyBillWave,
    color: '#ffc700',
    bgColor: '#fff8dd',
    to: '',
  },
  {
    title: 'Transportation',
    image: faBusAlt,
    color: '#50cd89',
    bgColor: '#e8fff3',
    to: '',
  },
  {
    title: 'Quality Control',
    image: faCogs,
    color: '#009ef7',
    bgColor: '#f1faff',
    to: '',
  },
  {
    title: 'Visitor Management',
    image: faUserTie,
    color: '#f1416c',
    bgColor: '#fff5f8',
    to: '',
  },
  {
    title: 'Fixed Assets',
    image: faLayerGroup,
    color: '#ffc700',
    bgColor: '#fff8dd',
    to: '',
  },
];

export default function Dashboard() {
  return (
    <>
      <SubHeader name="Home" />

      <div className="app_page_content">
        <div className="home_cards_container">
          <div className="home_cards mt-4">
            {cards.map(({ title, image, color, bgColor, to }, index) => (
              <HomeCard
                title={title}
                CardImage={image}
                key={index}
                bgColor={bgColor}
                color={color}
                to={to}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
