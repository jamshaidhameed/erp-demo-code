import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default function ContentLoader() {
  const antIcon = <LoadingOutlined style={{ color: '#091e42' }} spin />;
  return (
    <div className="dataTable_loader">
      <Spin style={{ fontSize: 35 }} indicator={antIcon} />
    </div>
  );
}
