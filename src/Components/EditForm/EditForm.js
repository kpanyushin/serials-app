import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import serialsApi from '../../services/serials';
import * as types from '../../redux/actions/actionTypes';

class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
    this.saveSerial = this.saveSerial.bind(this);
    this.delete = this.delete.bind(this);
    this.delSerial = this.delSerial.bind(this);
  }

  update(dispatch, serial) {
    serialsApi.updateSerial(serial).then(data => {
      dispatch({
        type: types.UPDATE_SERIAL_SUCCESS,
        serial: data
      })
    })
  }

  delete(dispatch, serial) {
    serialsApi.deleteSerial(serial).then(data => {
      dispatch({
        type: types.DELETE_SERIAL_SUCCESS,
        serial,
        data
      })
    })
  }

  delSerial(evt) {
    evt.preventDefault();
    const { dispatch, serial } = this.props;
    this.delete(dispatch, serial);
  }

  saveSerial(evt) {
    evt.preventDefault();
    const { dispatch, serial } = this.props;
    this.update(dispatch, serial);
  }

  render() {
    const { onChange, onClose } = this.props;
    return (
      <div className="serial-container">
        <h1 className="serial_heading">Редактировать сериал</h1>
        <form className="form" >
          <input
            required
            type="text"
            placeholder="Введите название сериала"
            name='title'
            onChange={onChange}/><br /><br />
          <textarea
            required
            rows="5"
            cols="28"
            name='description'
            placeholder="Введите описание"
            onChange={onChange}/><br /><br />
          <div className='control-buttons'>
            <button
              type='button'
              className='btn btn-primary'
              onClick={this.saveSerial}>
              Сохранить
            </button>
            <button
              type='button'
              className='btn btn-danger'
              onClick={this.delSerial}>Удалить</button>
            <button
              type='button'
              className='btn btn-warning'
              onClick={onClose}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    );
  }
}

EditForm.propTypes = {
  serial: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect()(EditForm);
