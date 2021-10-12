import React, { useState } from 'react';

import { Button } from 'antd';

import CreateMovieModal from './CreateMovieModal';

const CreateMovie = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  return (
    <>
      <Button
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

export default CreateMovie;
