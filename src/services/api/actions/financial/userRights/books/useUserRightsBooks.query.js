import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getUserRightsBooksList,
  getUserRightsUsersList,
  assignUserRightsBooks,
} from './userRightsBooks.api';
import { FL_USER_RIGHTS_USERS_LIST, FL_USER_RIGHTS_BOOKS_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { DEFAULT_MSG } from 'constants/shared/common';
import { useSelector } from 'react-redux';
import { parseError } from 'utils/shared';

export default function useUserRightsBooksQuery({
  listKey = '',
  userId = null,
  loadUserList = true,
}) {
  const organization = useSelector((state) => state.configs.location);
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries([FL_USER_RIGHTS_BOOKS_LIST]);
    queryClient.invalidateQueries([FL_USER_RIGHTS_USERS_LIST]);
  };

  const refreshData = (msg) => {
    invalidateList();
    toast.success(msg);
  };

  const getUsersList = loadUserList
    ? useQuery({
        queryKey: [FL_USER_RIGHTS_USERS_LIST],
        queryFn: () => getUserRightsUsersList(organization),
        onError: (error) => toast.error(parseError(error)),
      })
    : [];

  const getBooksList = useQuery({
    queryKey: [FL_USER_RIGHTS_BOOKS_LIST, listKey],
    queryFn: () => getUserRightsBooksList(organization, userId),
    onError: (error) => toast.error(parseError(error)),
  });

  const assignBooks = useMutation({
    mutationFn: (data) => assignUserRightsBooks({ ...data, organization_ID: organization }),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  return {
    getUsersList,
    getBooksList,
    assignBooks,
  };
}
