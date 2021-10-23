import React, { useState } from 'react';

import { Button } from 'antd';

import CreateMovieModal from './CreateMovieModal';

import { createMovie } from '../../utils/API';

const MovieCreate = ({ ...rest }) => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    createMovie(values);

    setVisible(false);
  };

  return (
    <>
      <Button
        {...rest}
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Add movie
      </Button>

      <CreateMovieModal
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

export default MovieCreate;
