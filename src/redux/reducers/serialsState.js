import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function serialsState(state = initialState.serials, action) {
  switch(action.type) {
    case types.LOAD_SERIALS_SUCCESS:
      return action.serials;
    case types.CREATE_SERIAL_SUCCESS:
      return [
        ...state.filter(serial => serial.id !== action.serial.id),
        Object.assign({}, action.serial)
      ];
    case types.UPDATE_SERIAL_SUCCESS:
      return [
        ...state.filter(serial => serial.id !== action.serial.id),
        Object.assign({}, action.serial)
      ];
    case types.DELETE_SERIAL_SUCCESS:
      const newState = Object.assign([], state);
      const index = state.findIndex(serial => serial.id === action.serial.id);
      newState.splice(index, 1);
      console.log(newState);
      return newState;
    default:
      return state;
  }
}
