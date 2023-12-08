import api from 'services/api';
import { Login, GetOrganizations, SetOrganization } from 'services/api/endPoints';

export const loginValidate = async ({ username, password }) =>
  await api.post(Login, { username, password });

export const getOrganizations = async (token) => {
  return await api.post(
    GetOrganizations,
    {},
    {
      headers: {
        common: {
          Authorization: `Bearer ${token}`,
        },
      },
    }
  );
};

export const setOrganization = async (token, organization_id) => {
  return await api.post(
    SetOrganization,
    { organization_id },
    {
      headers: {
        common: {
          Authorization: `Bearer ${token}`,
        },
      },
    }
  );
};
