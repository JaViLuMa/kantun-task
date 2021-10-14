import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { Table } from 'antd';
import { Load, Error } from '..';

import TableWrapper from './TableWrapper';

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
        scroll={{ x: 800, y: 200 }}
        rowKey="id"
        bordered
        style={{ marginTop: '64px', borderBottom: '1px solid lightgray' }}
      />
    </TableWrapper>
  );
};

export default MoviesTable;
