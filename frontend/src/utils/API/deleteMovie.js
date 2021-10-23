import axios from 'axios';

const deleteMovie = (id) => {
  axios
    .delete(`/api/v1/movies/${id}`)
    .then(() => {
      console.log('Movie successfully deleted.');
      window.location.reload();
    })
    .catch((error) => console.log(error));
};

export default deleteMovie;
