import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Modal, Form } from 'antd';

import UpdateMovieForm from '../UpdateMovieForm';

const UpdateMovie = ({ data, visible, onCancel, onCreate }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [form, data]);

  return (
    <Modal
      title={`Update movie with ID: ${data.id}`}
      visible={visible}
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <UpdateMovieForm data={data} form={form} />
    </Modal>
  );
};

UpdateMovie.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.number,
    explicit: PropTypes.bool,
  }).isRequired,
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
};

export default UpdateMovie;
