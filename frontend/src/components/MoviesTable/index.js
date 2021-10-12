import React, { useState, useEffect } from 'react';

import Loader from 'react-loader-spinner';
import axios from 'axios';

import { Table } from 'antd';
import { TableWrapper, LoaderWrapper } from '..';

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
    return (
      <LoaderWrapper>
        <Loader type="Watch" color="#000000" height={100} width={100} />
      </LoaderWrapper>
    );
  }

  return (
    <TableWrapper>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="id"
      />
    </TableWrapper>
  );
};

export default MoviesTable;
