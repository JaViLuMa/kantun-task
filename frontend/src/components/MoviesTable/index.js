import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { Table, Tag, Divider } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import TableWrapper from './TableWrapper';
import deleteMovie from '../../utils/deleteMovie';

import { Load, Error, UpdateMovie } from '..';
import { ratings, explicit } from './filters';
import { onSuccess, onFailure } from '../../utils/notifications';

const { Column } = Table;

const MoviesTable = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);

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
    <>
      <TableWrapper>
        <Table
          dataSource={data}
          pagination={false}
          rowKey="id"
          bordered
          scroll={smallScreen && { y: 500 }}
        >
          <Column
            title="Name"
            dataIndex="name"
            key="name"
            sorter={(a, b) => a.name.localeCompare(b.name)}
            width={350}
          />
          <Column title="Genre" dataIndex="genre" key="genre" width={250} />
          <Column
            title="Rating"
            dataIndex="rating"
            key="rating"
            onFilter={(value, record) =>
              record.rating.toString().indexOf(value) === 0
            }
            sorter={(a, b) => a.rating - b.rating}
            filters={[...ratings]}
            width={150}
          />
          <Column
            title="Explicit"
            dataIndex="explicit"
            key="explicit"
            render={(bool) =>
              bool ? (
                <Tag color="red">{bool.toString()}</Tag>
              ) : (
                <Tag color="blue">{bool.toString()}</Tag>
              )
            }
            onFilter={(value, record) =>
              record.explicit.toString().indexOf(value) === 0
            }
            filters={[...explicit]}
            width={100}
          />
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <>
                <EditOutlined
                  onClick={() => {
                    setVisible(true);
                    setId(record.id);
                  }}
                />
                <Divider type="vertical" />
                <DeleteOutlined onClick={() => deleteMovie(record.id)} />
              </>
            )}
            width={100}
          />
        </Table>
      </TableWrapper>

      <UpdateMovie
        data={id ? data.find((element) => element.id === id) : {}}
        visible={visible}
        onCancel={() => setVisible(false)}
      />
    </>
  );
};

export default MoviesTable;
