import React from 'react';
import PropTypes from 'prop-types';

import UpdateMovieModal from './UpdateMovieModal';

import { updateMovie } from '../../utils/API';

const UpdateMovie = ({ data, visible, onCancel }) => {
  const onCreate = (values) => {
    updateMovie(data, values);
  };

  return (
    <UpdateMovieModal
      data={data}
      visible={visible}
      onCancel={onCancel}
      onCreate={onCreate}
    />
  );
};

UpdateMovie.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.number,
    explicit: PropTypes.bool,
  }).isRequired,
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default UpdateMovie;
