import {
  ADD_FAVORITE_USER,
  FETCH_USERS_LIST_ERROR,
  FETCH_USERS_LIST_REQUEST,
  FETCH_USERS_LIST_SUCCESS,
} from './type';

interface userReducerType {
  loading: boolean;
  users: Array<any>;
  favoriteUsers: Array<any>;
  error: string | null;
}

export const initialState: userReducerType = {
  loading: false,
  users: [],
  favoriteUsers: [],
  error: null,
};

const userReducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case FETCH_USERS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, ...action.payload],
      };

    case FETCH_USERS_LIST_ERROR:
      return {
        ...state,
        loading: false,
        users: [],
      };

    case ADD_FAVORITE_USER:
      return {
        ...state,
        users: action.payload,
        favoriteUsers: action.payload.filter((user: any) => user.isFavorite),
      };

    default:
      return state;
  }
};

export default userReducer;
