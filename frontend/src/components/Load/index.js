import React from 'react';

import Loader from 'react-loader-spinner';

import LoaderWrapper from './LoaderWrapper';

const Load = () => {
  return (
    <LoaderWrapper>
      <Loader type="Watch" color="#000000" height={100} width={100} />
    </LoaderWrapper>
  );
};

export default Load;
