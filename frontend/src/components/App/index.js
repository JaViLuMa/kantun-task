import React from 'react';

import { MoviesTable, MovieCreate, Navbar } from '..';

const App = () => {
  return (
    <>
      <Navbar />
      <MovieCreate />
      <MoviesTable />
    </>
  );
};

export default App;
