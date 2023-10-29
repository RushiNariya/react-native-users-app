import axios from 'axios';
import {
  ADD_FAVORITE_USER,
  FETCH_USERS_LIST_ERROR,
  FETCH_USERS_LIST_REQUEST,
  FETCH_USERS_LIST_SUCCESS,
} from './type';

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_LIST_REQUEST,
  };
};

export const fetchUsersSuccess = (data: any) => {
  return {
    type: FETCH_USERS_LIST_SUCCESS,
    payload: data,
  };
};

export const fetchUsersError = (error: any) => {
  return {
    type: FETCH_USERS_LIST_ERROR,
    payload: error,
  };
};

export const addFavoriteUser = (users: any) => {
  return {
    type: ADD_FAVORITE_USER,
    payload: users,
  };
};

export const fetchUsersThunkAction = (page: number) => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchUsersRequest());
      const {data} = await axios.get(
        `https://randomuser.me/api/?page=${page}&results=10&seed=abc&gender=female`,
      );

      data.results = data.results.map((user: any) => ({
        ...user,
        isFavorite: false,
      }));

      dispatch(fetchUsersSuccess(data.results));
    } catch (error: any) {
      dispatch(fetchUsersError(error?.message || 'soething went wrong'));
    }
  };
};
