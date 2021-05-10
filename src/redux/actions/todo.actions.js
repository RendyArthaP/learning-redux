import axios from "axios";

export const GET_TODO_REQUEST = 'GET_TODO_REQUEST';
export const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS';
export const GET_TODO_ERROR = 'GET_TODO_ERROR';

export const POST_TODO_REQUEST = 'POST_TODO_REQUEST';
export const POST_TODO_SUCCESS = 'POST_TODO_SUCCESS';
export const POST_TODO_ERROR = 'POST_TODO_ERROR';

export const UPDATE_TODO_REQUEST = 'UPDATE_TODO_REQUEST';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_ERROR = 'UPDATE_TODO_ERROR';

export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_ERROR = 'DELETE_TODO_ERROR';

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

export const postTodoRequest = () => {
  return {
    type: POST_TODO_REQUEST
  }
}

export const postTodoSuccess = (result) => {
  return {
    type: POST_TODO_SUCCESS,
    result
  }
}

export const postTodoError = (error) => {
  return {
    type: POST_TODO_ERROR,
    error
  }
}

export const deleteTodoRequest = () => {
  return {
    type: DELETE_TODO_REQUEST
  }
}

export const deleteTodoSuccess = (result) => {
  return {
    type: DELETE_TODO_SUCCESS,
    result
  }
}

export const deleteTodoError = (error) => {
  return {
    type: DELETE_TODO_ERROR,
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

export const postTodo = (dataTodo) => {
  return function(dispatch) {
    dispatch(postTodoRequest())

    axios
      .post('https://6023a95a6bf3e6001766b546.mockapi.io/todos', {
        todo: dataTodo
      })
      .then((result) => dispatch(postTodoSuccess(result.data)))
      .catch((error) => dispatch(postTodoError(error)))
  }
}

export const deleteTodo = (id) => {
  return function(dispatch) {
    dispatch(deleteTodoRequest())

    axios
      .delete(`https://6023a95a6bf3e6001766b546.mockapi.io/todos/${id}`)
      .then((result) => dispatch(deleteTodoSuccess(result.data)))
      .catch((error) => dispatch(deleteTodoError(error)))
  }
}