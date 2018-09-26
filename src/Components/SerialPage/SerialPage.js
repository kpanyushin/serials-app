import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loadAction from '../../redux/actions/loadSerials';
import * as createSerial from '../../redux/actions/createSerial';
import * as updateSerial from '../../redux/actions/updateSerial';
import * as deleteSerial from '../../redux/actions/deleteSerial';
import EditForm from '../EditForm/EditForm';

class SerialPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isEditing: false,
      serial: this.props.serial
    }
    this.setEditing = this.setEditing.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { serial } = this.props;
    if (serial.id !== nextProps.serial.id) {
      this.setState({serial: nextProps.serial});
    }
  }

  setEditing() {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  onChange(evt) {
    const field = evt.target.name;
    const {serial} = this.state;
    serial[field] = evt.target.value;
    return this.setState({serial});
  }

  render() {
    const { isEditing, serial } = this.state;

    if (isEditing) {
      return (
        <div>
          <EditForm
            serial={serial}
            actions={updateSerial}
            onChange={this.onChange}
            onClose={this.setEditing}/>
        </div>
      )
    }
    return (
      <div className='serial col-md-6 offset-md-3'>
        <h2 className='serial_title'>
          {this.props.serial !== undefined &&
            this.props.serial.title}
        </h2>
        <p className='serial_message'>
          {this.props.serial !== undefined &&
            this.props.serial.description}
        </p>
        <div className="control-buttons">
          <button
            type='button'
            className="btn btn-primary"
            onClick={this.setEditing}>Редактировать</button>
        </div>
      </div>
    )
  }
}


SerialPage.propTypes = {
  serial: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => {
  let serial = {
    id: '',
    title: '',
    description: ''
  }
  const id = parseFloat(props.match.params.id);
  if (state.serials.length > 0) {
    serial = Object.assign({}, state.serials.find(s => s.id === id));
  }
  return { serial };
}
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
      createSerial,
      updateSerial,
      loadAction,
      deleteSerial
      }, dispatch)
  });

export default connect(mapStateToProps, mapDispatchToProps)(SerialPage);
