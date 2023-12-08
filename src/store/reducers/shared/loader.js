import { UPDATE_APP_LOADER, UPDATE_PAGE_LOADER } from '../../types';

const iState = {
  appLoading: false, // will show loader with hidden background
  pageLoading: false, // will show transparent loading over the page
};

const ShowLoader = (state = iState, action) => {
  switch (action.type) {
    case UPDATE_APP_LOADER: {
      return { ...state, appLoading: action.payload };
    }

    case UPDATE_PAGE_LOADER: {
      return { ...state, pageLoading: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default ShowLoader;
