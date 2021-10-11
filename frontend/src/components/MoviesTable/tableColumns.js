import { Tag } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => text,
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
  },
  {
    title: 'Explicit',
    dataIndex: 'explicit',
    key: 'explicit',
    render: (text) =>
      text === true ? (
        <Tag color="red">{String(text)}</Tag>
      ) : (
        <Tag color="blue">{String(text)}</Tag>
      ),
  },
];

export default columns;
