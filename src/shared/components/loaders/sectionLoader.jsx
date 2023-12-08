import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default function SectionLoader({ children, loading }) {
  const antIcon = <LoadingOutlined style={{ color: '#635bff' }} spin />;

  return (
    <>
      {loading ? (
        <div className="section_loader_main">
          <Spin style={{ fontSize: 60 }} indicator={antIcon} />
          {children}
        </div>
      ) : (
        children
      )}
    </>
  );
}
