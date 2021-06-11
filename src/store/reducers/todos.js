import * as ActionTypes from '../../constants/ActionTypes';

const initialState = {
  isCheckBoxChecked: false,
  a: {

  },
  c: {
    x: 20
  }
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CLICK_BUTTON_WITH_CHECKBOX:
      return {
        ...state,
        isCheckBoxChecked: false
      }
    default:
      return state;
  }
};

export default todos;
