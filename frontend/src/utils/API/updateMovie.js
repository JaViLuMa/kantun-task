import axios from 'axios';

const updateMovie = async (data, values) => {
  await axios
    .put(`/api/v1/movies/${data.id}`, values, {
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

export default updateMovie;
