import { Tag } from 'antd';

import { ratings, explicit } from './filters';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => text,
    sorter: (a, b) => a.name.length - b.name.length,
    width: 350,
    filterMode: 'menu',
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
    width: 50,
    onFilter: (value, record) =>
      record.explicit.toString().indexOf(value) === 0,
    render: (bool) =>
      bool ? (
        <Tag color="red">{bool.toString()}</Tag>
      ) : (
        <Tag color="blue">{bool.toString()}</Tag>
      ),
  },
];

export default columns;
