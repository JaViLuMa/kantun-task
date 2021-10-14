import React from 'react';

import ErrorWrapper from './ErrorWrapper';

const Error = () => {
  return (
    <ErrorWrapper>
      <b>
        Something went wrong :(
        <br />
        Maybe the server isn't on?
      </b>
    </ErrorWrapper>
  );
};

export default Error;
