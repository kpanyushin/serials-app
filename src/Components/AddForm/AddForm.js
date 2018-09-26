import React from 'react';
import { connect } from 'react-redux';
import serialsApi from '../../services/serials';
import * as types from '../../redux/actions/actionTypes';


class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serial: {
        title: '',
        description: ''
      },
      saving: false
    }
    this.saveSerial = this.saveSerial.bind(this);
    this.updateState = this.updateState.bind(this);
    this.create = this.create.bind(this);
  }

  updateState(event) {
    const field = event.target.name;
    const { serial } = this.state;
    serial[field] = event.target.value;
    return this.setState({serial});
  }

  create(dispatch, serial) {
    serialsApi.createSerial(serial).then(data => {
      dispatch({
        type: types.CREATE_SERIAL_SUCCESS,
        serial: data
      })
    })
  }

  saveSerial(event) {
    const { dispatch } = this.props;
    const { serial } = this.state;
    event.preventDefault();
    this.create(dispatch, serial);
  }

  render() {
    return (
      <div className="serial-container">
        <h1 className="serial_heading">Добавить сериал</h1>
        <form className="form" >
          <input
            required
            type="text"
            placeholder="Введите название сериала"
            name='title'
            onChange={this.updateState}/><br /><br />
          <textarea
            required
            rows="5"
            cols="28"
            name='description'
            placeholder="Введите описание"
            onChange={this.updateState}/><br /><br />
          <button
            type='button'
            className='btn btn-success'
            onClick={this.saveSerial}>
            Добавить
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(AddForm);
