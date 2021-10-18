import React, { useState } from 'react';
import axios from 'axios';

import { Button } from 'antd';

import CreateMovieModal from './CreateMovieModal';

const MovieCreate = ({ ...rest }) => {
  const [visible, setVisible] = useState(false);

  const onCreate = async (values) => {
    await axios
      .post(`/api/v1/movies`, values, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('Successful');

        window.location.reload();
      })
      .catch((error) => console.log(error));

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
