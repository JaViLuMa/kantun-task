import { notification } from 'antd';

const onFailure = () => {
  notification.open({
    message: <b>FAILURE</b>,
    description: <b>Failed to fetch movies.</b>,
    style: {
      border: '1px solid red',
      backgroundColor: 'hsl(0, 100%, 80%)',
    },
  });
};

export default onFailure;
