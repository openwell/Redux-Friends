import axios from "axios";

export const POSTING = "POSTING";
export const FAILURE = "FAILURE";
export const FETCHINGFRIENDS = "FETCHINGFRIENDS";
export const LOGGINGIN = "LOGGINGIN";
export const SAVE = 'SAVE'


export const fetch = (data, history) => dispatch => {
  dispatch(logIn(true));
  axios
    .post("http://localhost:5000/api/login", data)
    .then(res => {
      dispatch(logIn(false));
      localStorage.setItem("token", res.data.payload);
      history.push('/friends');
    })
    .catch(err => {
      dispatch(failure(err.message));
    });
};
export const logIn = res => {
  return {
    type: LOGGINGIN,
    val: res
  };
};
export const fetchingFri = () => dispatch => {
  dispatch({ type: FETCHINGFRIENDS, val: true });
  axios
    .get("http://localhost:5000/api/friends", {
      'headers': {
        'authorization': localStorage.getItem("token")
      }
    })
    .then(res => {
      dispatch({ type: FETCHINGFRIENDS, val: false });
      dispatch({ type: SAVE, val: res.data });
    })
    .catch(err => {
      dispatch(failure(err.message));
    });
};

export const failure = err => {
  return {
    type: FAILURE,
    val: err
  };
};
