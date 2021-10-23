import axios from 'axios';

const createMovie = async (values) => {
  await axios
    .post(`/api/v1/movies`, values, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log('Successful');

      window.location.reload();
    })
    .catch((error) => console.log(error));
};

export default createMovie;
