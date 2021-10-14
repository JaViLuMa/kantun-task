import React from 'react';

import { MoviesTable, MovieCreate, Navbar } from '..';

const App = () => {
  return (
    <>
      <Navbar />
      <MoviesTable />
      <MovieCreate />
    </>
  );
};

export default App;
