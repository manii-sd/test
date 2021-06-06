import { combineReducers } from 'redux'
import todos from './todos'
//mport visibilityFilter from './visibilityFilter'

const reducers = combineReducers({
  todos,
  //visibilityFilter
})

export default reducers
