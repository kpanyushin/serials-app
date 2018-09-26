import * as types from './actionTypes';
import serialsApi from '../../services/serials';

const deleteSerial = (serial) => (dispatch) => serialsApi.deleteSerial(serial).then(data => {
      dispatch({
        type: types.DELETE_SERIAL_SUCCESS,
        id: serial.id,
        serial: data
      });
    }).catch(error => {
      throw(error);
    })

  export default deleteSerial;
