import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Button from 'shared/controls/buttons/button';
import MenuDropdown from 'shared/components/menu/menuDropdown';

const { Header } = Layout;

export default function SubHeader({
  name,
  buttons,
  redirectURL = '',
  redirectLabel = '',
  responsiveClass = '',
}) {
  const {
    showTopBanner,
    topBannerHeight,
    headerHeight,
    collapsed,
    hidden,
    mobileView,
    sidebarWidth,
    subHeaderHeight,
  } = useSelector((state) => state.layout);

  const SideBarActiveWidth = hidden || mobileView ? 0 : collapsed ? 80 : sidebarWidth;
  const topContainerWidth = mobileView ? '100%' : `calc(100% - ${SideBarActiveWidth}px)`;
  const top = showTopBanner ? headerHeight + topBannerHeight : headerHeight;

  return (
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: topContainerWidth,
        top,
        height: subHeaderHeight,
        // borderTop: '1px solid #eff2f5',
        ...(mobileView ? { left: 0 } : {}),
      }}
      className="site-layout-sub-header">
      <div className="sub-header-container">
        <div className="px-5 sub-header-wrapper">
          <div className="sub-header-title">
            {redirectURL && (
              <div className="redirect-btn">
                <Link to={redirectURL} className="d-flex align-items-center gap-2">
                  <ArrowLeftOutlined />
                  <span>{redirectLabel}</span>
                </Link>
              </div>
            )}

            <h2>{name}</h2>
          </div>

          {buttons?.length > 0 && (
            <div className={`sub-header-menu ${responsiveClass}`}>
              {/* Desktop View */}
              <div className="btn-desktop-view">
                {buttons.map((item) => (
                  <Button key={item.label} {...item} />
                ))}
              </div>

              {/* Mobile View */}
              <span className="btn-mobile-view">
                <MenuDropdown selectorDirection="vertical" menuList={buttons} />
              </span>
            </div>
          )}
        </div>
      </div>
    </Header>
  );
}
