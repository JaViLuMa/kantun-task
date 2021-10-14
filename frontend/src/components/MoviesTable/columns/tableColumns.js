import { Tag } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { ratings, explicit } from './filters';

import deleteMovie from '../../../utils/deleteMovie';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => text,
    sorter: (a, b) => a.name.localeCompare(b.name),
    filterMode: 'menu',
    width: 350,
    onFilter: (value, record) => record.name.includes(value),
  },
  {
    title: 'Genre',
    dataIndex: 'genre',
    key: 'genre',
    width: 250,
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
    filters: [...ratings],
    onFilter: (value, record) => record.rating.toString().indexOf(value) === 0,
    sorter: (a, b) => a.rating - b.rating,
    width: 150,
  },
  {
    title: 'Explicit',
    dataIndex: 'explicit',
    key: 'explicit',
    filters: [...explicit],
    width: 100,
    onFilter: (value, record) =>
      record.explicit.toString().indexOf(value) === 0,
    render: (bool) =>
      bool ? (
        <Tag color="red">{bool.toString()}</Tag>
      ) : (
        <Tag color="blue">{bool.toString()}</Tag>
      ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <DeleteOutlined onClick={() => deleteMovie(record.id)} />
    ),
    width: 100,
  },
];

export default columns;
