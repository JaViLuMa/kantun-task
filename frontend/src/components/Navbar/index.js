import React from 'react';

import { MovieCreate } from '..';

import NavWrapper from './NavWrapper';

const Navbar = () => {
  return (
    <NavWrapper>
      <MovieCreate style={{ marginLeft: 'auto', marginRight: '5vw' }} />
    </NavWrapper>
  );
};

export default Navbar;
