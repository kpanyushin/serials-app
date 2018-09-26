import * as types from './actionTypes';
import serialsApi from '../../services/serials';

const createSerial = (serial) => (dispatch) => serialsApi.createSerial(serial).then(data => {
      dispatch({
        type: types.CREATE_SERIAL_SUCCESS,
        data
      });
    }).catch(error => {
      throw(error);
    });

  export default createSerial;
