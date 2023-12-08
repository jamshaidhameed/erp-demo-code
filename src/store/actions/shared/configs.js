import {
  UPDATE_BASE_URLS,
  UPDATE_LOCATIONS,
  UPDATE_LOCATION,
  RESET_ORGANIZATION_DETAILS,
} from '../../types';

export const updateBaseUrls = (payload) => ({ type: UPDATE_BASE_URLS, payload });
export const updateLocations = (payload) => ({ type: UPDATE_LOCATIONS, payload });
export const updateLocation = (payload) => ({ type: UPDATE_LOCATION, payload });
export const resetOrganizationDetails = (payload) => ({
  type: RESET_ORGANIZATION_DETAILS,
  payload,
});
