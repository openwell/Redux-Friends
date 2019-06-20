import * as types from "../actions/index";
const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POSTING:
      return state;
      case types.LOGGINGIN:
      return { ...state, loggingIn: action.val };
    case types.FETCHINGFRIENDS:
      return { ...state, fetchingFriends: action.val };
    case types.SAVE:
      return { ...state, friends: action.val };
    case types.FAILURE:
      return { ...state, error: action.val };
    default:
      return state;
  }
};
