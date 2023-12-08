import AppTabs from 'shared/components/tabs';
import { useState } from 'react';
import EGList from './Components/list';
import EGAuditList from './Components/auditList';
import EGForm from './Components/form';
import EGFuelAllowance from './Components/fuelAllowance';

const tabKeys = {
  record: 'record',
  list: 'list',
  auditList: 'auditList',
  auditRecord: 'auditRecord',
  fuelAllowance: 'fuelAllowance',
};

const ExecutiveGrades = () => {
  const [activeKey, setActiveKey] = useState(tabKeys.list);
  const [selectedId, setSelectedId] = useState('new');

  const addEditList = (id) => {
    setSelectedId(id);
    setActiveKey(tabKeys.record);
  };

  const items = [
    {
      key: tabKeys.record,
      label: 'Record',
      children: <EGForm id={selectedId} />,
    },
    {
      key: tabKeys.list,
      label: 'List',
      children: <EGList onAddEdit={addEditList} />,
    },
    {
      key: tabKeys.auditList,
      label: 'Audit List',
      children: <EGAuditList onAddEdit={addEditList} />,
    },
    {
      key: tabKeys.fuelAllowance,
      label: 'Fuel Allowance',
      children: <EGFuelAllowance />,
    },
  ];

  return <AppTabs items={items} activeKey={activeKey} onChange={(key) => setActiveKey(key)} />;
};

export default ExecutiveGrades;
