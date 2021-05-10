import {
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
  POST_TODO_REQUEST,
  POST_TODO_SUCCESS,
  POST_TODO_ERROR
} from '../../redux/actions/todo.actions.js';

const initialState = {
  data: [],
  isLoading: false,
  isError: false
}

const handleTodo = (state = initialState, action) => {
  switch(action.type) {
    case GET_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case GET_TODO_SUCCESS:
      return {
        ...state,
        data: action.result,
        isLoading: false,
        isError: false
      }
    case GET_TODO_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        isError: true
      }
    case POST_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case POST_TODO_SUCCESS:
      return {
        ...state,
        data: [
          ...state.data,
          action.result
        ],
        isLoading: false,
        isError: false
      }
    case POST_TODO_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        isError: true
      }
    default:
      return state;
  }
}

export default handleTodo