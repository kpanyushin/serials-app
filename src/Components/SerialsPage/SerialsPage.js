import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import './SerialsPage.css';
import SerialsList from '../SerialsList/SerialsList';
import * as createSerial from '../../redux/actions/createSerial';
import * as updateSerial from '../../redux/actions/updateSerial';
import * as deleteSerial from '../../redux/actions/deleteSerial';

class SerialsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSerials: this.props.serials,
      isSearching: false
    }

    this.onSearch = this.onSearch.bind(this);
    this.stopSearch = this.stopSearch.bind(this);
  }

  onSearch(event) {
    const { serials } = this.props;
    const newState = _.filter(serials, serial => serial.title.includes(event.target.value.toLowerCase()));
    this.setState({
      currentSerials: newState,
      isSearching: true
    });
  }

  stopSearch() {
    this.setState({
      isSearching: true
    });
  }

  render() {
    const { currentSerials, isSearching } = this.state;
    return (
      <div>
        <div className='col-md-8 offset-md-2'>
          <h3 className="serial_heading">Поиск сериала</h3>
            <div className="input-group mb-3">
              <input
                type="text"
                name="search"
                className="form-control"
                placeholder="Введите название сериала"
                onChange={this.onSearch}/>
            </div>
          <h1 className="serial_heading">Все сериалы</h1>
          <ul className='list-group'>
            {isSearching && currentSerials.map(serial => <li className='list-group-item' key={serial.id}>
              <SerialsList
                data={serial}
                key={serial.id}
                stopSearch={this.stopSearch}
              />
            </li>)}
            {!isSearching && this.props.serials.map(serial => <li className='list-group-item' key={serial.id}>
              <SerialsList
                data={serial}
                key={serial.id}
                stopSearch={this.stopSearch}
              />
            </li>)}
          </ul>
        </div>
      </div>
    )
  }
}

SerialsPage.propTypes = {
  serials: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = (state, props) => ({
  serials: state.serials, props
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
    createSerial,
    updateSerial,
    deleteSerial
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SerialsPage);
