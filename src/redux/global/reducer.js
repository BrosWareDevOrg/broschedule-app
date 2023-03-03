import { INCREMENT, DECREMENT } from './constants';

const INITIAL_STATE = {
  counter: 1,
};

const globalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;
