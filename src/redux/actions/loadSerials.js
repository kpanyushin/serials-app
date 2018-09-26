import * as types from './actionTypes';
import serialsApi from '../../services/serials';

// export const loadSerialsSuccess = (serials) => ({
//     type: types.LOAD_SERIALS_SUCCESS, serials
//   });
const loadSerials = () => (dispatch) => serialsApi.getSerials().then(data => {
  dispatch({
    type: types.LOAD_SERIALS_SUCCESS,
    serials: data
    });
  });

export default loadSerials;
