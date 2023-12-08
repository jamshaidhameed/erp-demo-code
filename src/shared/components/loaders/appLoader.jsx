import { useSelector } from 'react-redux';
// import ScaleLoader from 'react-spinners/ScaleLoader';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default function AppLoader() {
  const { pageLoading, appLoading } = useSelector((state) => state.showLoader);
  const antIcon = <LoadingOutlined style={{ color: '#635bff' }} spin />;

  return (
    <>
      {(appLoading || pageLoading) && (
        <div
          className="loader_main"
          style={{
            background: appLoading ? '#fafafa' : 'rgba(193, 201, 210, 0.7)',
          }}>
          <div className="loader_main_indicator">
            {/* <ScaleLoader color="#635bff" height={40} width={4} /> */}
            <Spin style={{ fontSize: 40 }} indicator={antIcon} />
          </div>
        </div>
      )}
    </>
  );
}
