import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as createSerial from './redux/actions/createSerial';
import AddForm from './Components/AddForm/AddForm';


const App = (serials) => (
  <div className='app'>
    <Link to='/serials'><h2 className="center ">Мои сериалы</h2></Link>
    <AddForm serials={serials} actions={createSerial}/>
  </div>
)

App.propTypes = {
  serials: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => ({
  serials: state.serials, props
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
    createSerial
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
