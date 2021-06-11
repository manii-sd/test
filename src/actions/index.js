import * as ActionTypes from '../constants/ActionTypes'

export const withTodo = () => {
  return {
    type: ActionTypes.CLICK_BUTTON_WITH_CHECKBOX
  }
}
export const withoutTodo = () => {
  return {
    type: ActionTypes.CLICK_BUTTON_WITHOUT_CHECKBOX
  }
}