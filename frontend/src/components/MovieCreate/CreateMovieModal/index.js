import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Form } from 'antd';

import CreateMovieForm from '../CreateMovieForm';

const CreateMovieModal = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      title="Add new movie"
      visible={visible}
      okText="Add movie"
      cancelText="Cancel"
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
      <CreateMovieForm form={form} />
    </Modal>
  );
};

CreateMovieModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default CreateMovieModal;
