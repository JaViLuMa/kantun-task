import React, { useState, useEffect } from 'react';

import { Table } from 'antd';

import axios from 'axios';

import columns from './tableColumns';

const MoviesTable = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/movies').then((response) => {
      setLoading(false);
      setData(response.data);
    });
  }, []);

  if (loading === true) {
    return <h1>Loading...</h1>;
  }

  return <Table columns={columns} dataSource={data} />;
};

export default MoviesTable;
