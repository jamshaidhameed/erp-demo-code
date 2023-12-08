import { listByAttributeName, resolveArray } from 'utils/shared/list';
import {
  UPDATE_BASE_URLS,
  UPDATE_LOCATIONS,
  LOGOUT,
  RESET_ORGANIZATION_DETAILS,
  UPDATE_LOCATION,
} from '../../types';

const iState = {
  location: '',
  locations: [],
  locationsById: {},
  apiBaseUrls: {
    financial: '',
    ams: '',
    inventory: '',
    payroll: '',
  },
};

const Configs = (state = iState, action) => {
  switch (action.type) {
    case UPDATE_BASE_URLS: {
      return { ...state, apiBaseUrls: action.payload };
    }

    case UPDATE_LOCATIONS: {
      let { locations } = action.payload;
      locations = resolveArray(locations);
      const locationsById = listByAttributeName(locations, 'OID');
      return { ...state, locations, locationsById };
    }

    case UPDATE_LOCATION: {
      return { ...state, location: action.payload };
    }

    case RESET_ORGANIZATION_DETAILS: {
      return { ...state, location: '', locations: [], locationsById: {} };
    }

    case LOGOUT: {
      return {
        ...state,
        location: '',
        locations: [],
        locationsById: {},
        apiBaseUrls: {
          financial: '',
          ams: '',
          inventory: '',
          payroll: '',
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default Configs;
