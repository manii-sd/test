import * as ActionTypes from '../../constants/ActionTypes'

const todo = (state, action) => {
  switch (action.type) {
    case ActionTypes.CLICK_BUTTON_WITH_CHECKOX:
      return {
        
        completed: true
      }
    case ActionTypes.CLICK_BUTTON_WITHOUT_CHECKOX:
      return {
        completed: false
      }

    default:
      return state
  }
}

const initialState = [ ]

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CLICK_BUTTON_WITH_CHECKOX:
      return 
      case ActionTypes.CLICK_BUTTON_WITHOUT_CHECKOX:
      return [
      ]
    
    default:
      return state
  }
}

export default todos
