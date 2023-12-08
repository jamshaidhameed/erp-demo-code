import React, { useEffect } from 'react';
import SideBar from './sideBar';
import AppHeader from './header';
import { Layout } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { updateLayout } from 'store/actions/shared';

const { Content } = Layout;

export default function AppLayout({ hideSidebar = false, hideHeaderMenu = false, children }) {
  const dispatch = useDispatch();
  const { layout } = useSelector((state) => state);
  const {
    showTopBanner,
    topBannerHeight,
    headerHeight,
    collapsed,
    hidden,
    mobileView,
    sidebarWidth,
    subHeaderHeight,
  } = layout;

  const onCollapse = (isCollapsed) =>
    dispatch(
      updateLayout({
        collapsed: isCollapsed,
      })
    );

  const toggle = () =>
    dispatch(
      updateLayout({
        hidden: !hidden,
      })
    );

  const SideBarActiveWidth = hidden || mobileView ? 0 : collapsed ? 80 : sidebarWidth;
  const topContainerWidth = mobileView ? '100%' : `calc(100% - ${SideBarActiveWidth}px)`;
  let contentTop = subHeaderHeight + headerHeight;
  contentTop += showTopBanner ? topBannerHeight : 0;
  const contentBottom = 0; // UserAuthentication.isWorkingOnline === 1 ? 0 : 80;

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      dispatch(
        updateLayout({
          mobileView: true,
          hidden: true,
          collapsed: false,
        })
      );
    } else {
      dispatch(
        updateLayout({
          mobileView: false,
          hidden: false,
        })
      );
    }
  }, []);

  useEffect(() => {
    dispatch(
      updateLayout({
        hidden: hideSidebar,
      })
    );
  }, [hideSidebar]);

  return (
    <Layout hasSider>
      <SideBar
        collapsed={collapsed}
        hidden={hidden}
        mobileView={mobileView}
        onCollapse={onCollapse}
        toggle={toggle}
        width={sidebarWidth}
        top={showTopBanner ? topBannerHeight + headerHeight : headerHeight}
      />

      <div className="site-layout-content" style={{ paddingLeft: SideBarActiveWidth }}>
        <AppHeader
          hideSidebar={hideSidebar}
          hideHeaderMenu={hideHeaderMenu}
          mobileView={mobileView}
          hidden={hidden}
          toggle={toggle}
          collapsed={collapsed}
          topContainerWidth={topContainerWidth}
          top={showTopBanner ? topBannerHeight : 0}
          height={headerHeight}
          onCollapse={onCollapse}
        />

        <Content
          style={{ marginTop: contentTop, marginBottom: contentBottom }}
          className="layout_content">
          {children}
        </Content>
      </div>
    </Layout>
  );
}
