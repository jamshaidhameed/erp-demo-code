import { UPDATE_APP_LAYOUT } from '../../types';

const iState = {
  showTopBanner: false,
  topBannerHeight: 30,
  headerHeight: 64,
  subHeaderHeight: 85,
  collapsed: false,
  hidden: false,
  mobileView: false,
  sidebarWidth: 260,
};

const Layout = (state = iState, action) => {
  switch (action.type) {
    case UPDATE_APP_LAYOUT: {
      return { ...state, ...action.payload };
    }

    default: {
      return state;
    }
  }
};

export default Layout;
