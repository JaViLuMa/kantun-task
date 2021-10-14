import React from 'react';

import { Layout } from 'antd';

import logo from '../../images/logo.gif';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header
      style={{
        position: 'fixed',
        zIndex: 100,
        width: '100%',
        backgroundColor: 'white',
        borderBottom: '1px solid lightgray',
      }}
    >
      <img
        src={logo}
        style={{ width: '170px' }}
        title="Lighthouse movies"
        alt="Lighthouse moives logo"
      />
    </Header>
  );
};

export default Navbar;
