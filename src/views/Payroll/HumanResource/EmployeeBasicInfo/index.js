import { useState } from 'react';
import AppTabs from 'shared/components/tabs';
import EBIForm from './Components/form';
import EBIList from './Components/list';
import EBIAuditList from './Components/audit';
import EBIContractExtension from './Components/contractExtension';

const tabKeys = {
  record: 'record',
  list: 'list',
  audit: 'audit',
  contractExtension: 'contractExtension',
};

const EmployeeBasicInfo = () => {
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
      children: <EBIForm id={selectedId} />,
    },
    {
      key: tabKeys.list,
      label: 'List',
      children: <EBIList onAddEdit={addEditList} />,
    },
    {
      key: tabKeys.audit,
      label: 'Audit',
      children: <EBIAuditList onAddEdit={addEditList} />,
    },
    {
      key: tabKeys.contractExtension,
      label: 'Contract Extension',
      children: <EBIContractExtension />,
    },
  ];

  return <AppTabs items={items} activeKey={activeKey} onChange={(key) => setActiveKey(key)} />;
};

export default EmployeeBasicInfo;
