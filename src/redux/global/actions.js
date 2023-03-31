import { SET_MODAL_STATE } from './constants';

export const setModalState = (payload) => {
  return {
    type: SET_MODAL_STATE,
    payload
  }
}
