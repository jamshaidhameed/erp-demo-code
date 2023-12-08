import api from 'services/api';
import {
  GET_CONFIG_BOOKS_LIST,
  GET_CONFIG_BOOK,
  GET_CONFIG_BOOK_CODE,
  ADD_CONFIG_BOOK,
  DELETE_CONFIG_BOOKS,
  UPDATE_CONFIG_BOOK,
} from 'services/api/endPoints/financial';
import { resolveArray } from 'utils/shared/list';

export const getConfigBooksList = async (organizationId) =>
  await api
    .get(`${GET_CONFIG_BOOKS_LIST}?organization_id=${organizationId}`)
    .then((response) => resolveArray(response.data));

export const getConfigBook = async (id = '') => await api.get(`${GET_CONFIG_BOOK}?book_id=${id}`);
export const getBookCodeByVT = async (id = '') =>
  await api.get(`${GET_CONFIG_BOOK_CODE}?voucher_type_id=${id}`);
export const addConfigBook = async (body) => await api.post(ADD_CONFIG_BOOK, body);
export const updateConfigBook = async (body) => await api.put(UPDATE_CONFIG_BOOK, body);

export const deleteConfigBooks = async (book_id) =>
  await api.delete(DELETE_CONFIG_BOOKS, { data: { book_id } });
