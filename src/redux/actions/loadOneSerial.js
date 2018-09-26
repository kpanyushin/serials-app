import * as types from './actionTypes';
import serialsApi from '../../services/serials';

const loadOneSerial = (id) => (dispatch) => serialsApi.getOneSerial(id).then(data => {
  dispatch({
    type: types.LOAD_ONE_SERIAL_SUCCESS,
    serials: data
    });
  });

export default loadOneSerial;
