import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { Table } from 'antd';
import { useMediaQuery } from 'react-responsive';

import { Load, Error } from '..';

import TableWrapper from './TableWrapper';

import { onSuccess, onFailure } from '../../utils/notifications';

import columns from './columns/tableColumns';

const MoviesTable = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const smallScreen = useMediaQuery({ query: '(max-width: 730px)' });

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
    return <Load />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <TableWrapper>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="id"
        bordered
        scroll={smallScreen && { y: 500 }}
      />
    </TableWrapper>
  );
};

export default MoviesTable;
