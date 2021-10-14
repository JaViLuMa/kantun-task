import React from 'react';

import { Menu } from 'antd';

import { MovieCreate } from '..';

import logo from '../../images/logo.gif';

const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="logo">
        <img
          src={logo}
          style={{ width: '170px' }}
          title="Lighthouse movies"
          alt="Lighthouse moives logo"
        />
      </Menu.Item>
      <Menu.Item key="add-movie" style={{ marginLeft: 'auto' }}>
        <MovieCreate />
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
