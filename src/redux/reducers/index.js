import { combineReducers } from 'redux';
import handleTodo from './todo.reducers';

const rootReducers = combineReducers({
  handleTodo
})

export default rootReducers;