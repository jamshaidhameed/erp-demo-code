import { Tabs } from 'antd';

const AppTabs = ({ items, activeKey, destroyInactiveTabPane = true, onChange }) => (
  <Tabs
    activeKey={activeKey}
    destroyInactiveTabPane={destroyInactiveTabPane}
    items={items}
    onChange={onChange}
  />
);

export default AppTabs;
