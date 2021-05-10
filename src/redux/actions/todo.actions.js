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