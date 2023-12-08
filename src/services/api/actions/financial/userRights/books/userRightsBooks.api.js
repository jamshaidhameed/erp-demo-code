import api from 'services/api';
import {
  GET_USER_RIGHTS_ASSIGNED_BOOKS,
  GET_USER_RIGHTS_USERS_LIST,
  ADD_USER_RIGHTS_BOOK,
} from 'services/api/endPoints/financial';
import { resolveArray } from 'utils/shared/list';

export const getUserRightsUsersList = async (organizationId) =>
  await api
    .get(`${GET_USER_RIGHTS_USERS_LIST}?organization_ID=${organizationId}`)
    .then((response) => resolveArray(response.data));

export const getUserRightsBooksList = async (organizationId, userId) =>
  userId
    ? await api
        .get(
          `${GET_USER_RIGHTS_ASSIGNED_BOOKS}?organization_ID=${organizationId}&user_ID=${parseInt(
            userId
          )}`
        )
        .then((response) => resolveArray(response.data))
    : [];

export const assignUserRightsBooks = async (body) => await api.post(ADD_USER_RIGHTS_BOOK, body);
