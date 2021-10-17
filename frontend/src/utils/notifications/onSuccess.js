import { notification } from 'antd';

const onSuccess = () => {
  notification.open({
    message: <b>SUCCESS</b>,
    description: <b>Movies have been fetched successfully.</b>,
    style: {
      border: '1px solid green',
      backgroundColor: 'hsl(115, 100%, 80%)',
      marginTop: '50px',
    },
  });
};

export default onSuccess;
