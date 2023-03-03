import { DECREMENT, INCREMENT } from './constants';

export const incrementBy = (payload) => {
  return {
    type: INCREMENT,
    payload,
  };
};

export const decrementBy = (payload) => {
  return {
    type: DECREMENT,
    payload,
  };
};
