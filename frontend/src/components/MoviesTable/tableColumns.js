import { Tag } from 'antd';

import ratings from './ratingFilters';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => text,
    sorter: (a, b) => a.name.length - b.name.length,
    width: 350,
  },
  {
    title: 'Genre',
    dataIndex: 'genre',
    key: 'genre',
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
    filters: [...ratings],
    onFilter: (value, record) => record.rating.toString().indexOf(value) === 0,
  },
  {
    title: 'Explicit',
    dataIndex: 'explicit',
    key: 'explicit',
    filters: [
      {
        text: 'False',
        value: 'false',
      },
      {
        text: 'True',
        value: 'true',
      },
    ],
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
