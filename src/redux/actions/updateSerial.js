import * as types from './actionTypes';
import serialsApi from '../../services/serials';

const updateSerial = (serial) => (dispatch) => serialsApi.updateSerial(serial).then(data => {
      dispatch({
        type: types.UPDATE_SERIAL_SUCCESS,
        data
      });
    }).catch(error => {
      throw(error);
    })

  export default updateSerial;
