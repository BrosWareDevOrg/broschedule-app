import { SET_MODAL_STATE } from './constants';

const INITIAL_STATE = {
  isModalActive: false,
};

const globalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MODAL_STATE:
      return {
        ...state,
        isModalActive: action.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;
