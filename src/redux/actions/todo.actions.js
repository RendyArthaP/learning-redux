import axios from "axios";

export const GET_TODO_REQUEST = 'GET_TODO_REQUEST';
export const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS';
export const GET_TODO_ERROR = 'GET_TODO_ERROR';

export const getTodoRequest = () => {
  return {
    type: GET_TODO_REQUEST
  }
}

export const getTodoSuccess = (result) => {
  return {
    type: GET_TODO_SUCCESS,
    result
  }
}

export const getTodoError = (error) => {
  return {
    type: GET_TODO_ERROR,
    error
  }
}

export const getTodo = () => {
  return function(dispatch) {
    dispatch(getTodoRequest())

    axios
      .get('https://6023a95a6bf3e6001766b546.mockapi.io/todos')
      .then((result) => dispatch(getTodoSuccess(result.data)))
      .catch((error) => dispatch(getTodoError(error)))
  }
}