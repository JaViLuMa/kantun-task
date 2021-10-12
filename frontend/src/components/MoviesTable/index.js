import React, { useState, useEffect } from 'react';

import Loader from 'react-loader-spinner';
import axios from 'axios';

import { Table } from 'antd';
import { TableWrapper, LoaderWrapper, ErrorWrapper } from '..';

import { onSuccess, onFailure } from '../../utils/notifications';

import columns from './columns/tableColumns';

const MoviesTable = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('/api/v1/movies')
      .then((response) => {
        setLoading(false);
        setData(response.data);
        onSuccess();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(true);
        onFailure();
      });
  }, []);

  if (loading) {
    return (
      <LoaderWrapper>
        <Loader type="Watch" color="#000000" height={100} width={100} />
      </LoaderWrapper>
    );
  }

  if (error) {
    return (
      <ErrorWrapper>
        <b>Something went wrong :(</b>
      </ErrorWrapper>
    );
  }

  return (
    <TableWrapper>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: 800 }}
        rowKey="id"
      />
    </TableWrapper>
  );
};

export default MoviesTable;
