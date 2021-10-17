import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import UpdateMovieModal from './UpdateMovieModal';

const UpdateMovie = ({ data, visible, onCancel }) => {
  const onCreate = async (values) => {
    await axios
      .put(`/api/v1/movies/${data.id}`, values, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('Successful');

        window.location.reload();
      })
      .catch((error) => console.log(error));
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
