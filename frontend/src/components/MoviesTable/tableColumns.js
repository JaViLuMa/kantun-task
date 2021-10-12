import { Tag } from 'antd';

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
    filters: [
      {
        text: '1',
        value: 1,
      },
      {
        text: '2',
        value: 2,
      },
      {
        text: '3',
        value: 3,
      },
      {
        text: '4',
        value: 4,
      },
      {
        text: '5',
        value: 5,
      },
      {
        text: '6',
        value: 6,
      },
      {
        text: '7',
        value: 7,
      },
      {
        text: '8',
        value: 8,
      },
      {
        text: '9',
        value: 9,
      },
      {
        text: '10',
        value: 10,
      },
    ],
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
