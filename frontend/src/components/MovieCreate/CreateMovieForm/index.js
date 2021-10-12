import React from 'react';
import PropTypes from 'prop-types';

import { Form, Input, Select } from 'antd';

const { Option } = Select;

const CreateMovieForm = ({ form }) => {
  return (
    <Form name="create-movie-form" form={form}>
      <Form.Item
        label="Movie name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input movie name!',
          },
        ]}
      >
        <Input placeholder="Enter movie name" />
      </Form.Item>

      <Form.Item
        label="Movie genre"
        name="genre"
        rules={[
          {
            required: true,
            message: 'Please input genre of the movie!',
          },
        ]}
      >
        <Input placeholder="Enter movie genre" />
      </Form.Item>

      <Form.Item
        label="Movie rating"
        name="rating"
        rules={[
          {
            required: true,
            message: 'Please select the movie rating!',
          },
        ]}
      >
        <Select placeholder="Select movie rating">
          {[...Array(10)].map((element, index) => (
            <Option value={`${index + 1}`} key={index}>
              {index + 1}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Movie explicity"
        name="explicit"
        rules={[
          {
            required: true,
            message: 'Please select the movie explicity!',
          },
        ]}
      >
        <Select placeholder="Select movie explicity">
          <Option value="true">True</Option>
          <Option value="false">False</Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

CreateMovieForm.propTypes = {
  form: PropTypes.shape({}).isRequired,
};

export default CreateMovieForm;
