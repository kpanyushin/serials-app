import React from 'react';
import PropTypes from 'prop-types';
import './SerialsList.css';
import { Link } from 'react-router-dom';

const SerialsList = (data) => (
  <Link to={`/serials/${data.data.id}`}>
    {data.data.id} - {data.data.title}
  </Link>
)

SerialsList.propTypes = {
  data: PropTypes.object.isRequired
}

export default SerialsList;
