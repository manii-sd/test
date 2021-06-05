import { combineReducers } from 'redux'
import todos from './todos'
//mport visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp