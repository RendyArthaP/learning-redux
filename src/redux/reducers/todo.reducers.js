import {
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
  POST_TODO_REQUEST,
  POST_TODO_SUCCESS,
  POST_TODO_ERROR,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
  UPDATE_TODO_ERROR,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS
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
    case DELETE_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case DELETE_TODO_SUCCESS:
      let deleteTodo = state.data.filter(todos => todos.id !== action.result.id)
      return {
        ...state,
        data: [...deleteTodo],
        isLoading: false,
        isError: false
      }
    case DELETE_TODO_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    case UPDATE_TODO_REQUEST: 
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case UPDATE_TODO_SUCCESS: 
      let updateTodo = state.data.find(todos => todos.id === action.result.id)
      updateTodo.todos = action.todos.data

      return state
    case UPDATE_TODO_ERROR:
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default handleTodo