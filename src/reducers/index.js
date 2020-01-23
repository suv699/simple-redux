import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import CounterReducer from './CounterReducer';
export default combineReducers({
  todos,
  visibilityFilter,
  counter: CounterReducer
})