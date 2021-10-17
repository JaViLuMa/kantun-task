import React from 'react';
import PropTypes from 'prop-types';

import { Form, Input, Select } from 'antd';

const { Option } = Select;

const UpdateMovieForm = ({ data, form }) => {
  return (
    <Form
      name="update-movie-form"
      form={form}
      initialValues={{
        name: data.name,
        genre: data.genre,
        rating: data.rating,
        explicit: data.explicit.toString(),
      }}
    >
      <Form.Item label="Movie name" name="name">
        <Input placeholder="Enter movie name" />
      </Form.Item>

      <Form.Item label="Movie genre" name="genre">
        <Input placeholder="Enter movie genre" />
      </Form.Item>

      <Form.Item label="Movie rating" name="rating">
        <Select placeholder="Select movie rating">
          {[...Array(10)].map((element, index) => (
            <Option value={`${index + 1}`} key={index}>
              {index + 1}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="Movie explicity" name="explicit">
        <Select placeholder="Select movie explicity">
          <Option value="true">True</Option>
          <Option value="false">False</Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

UpdateMovieForm.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.number,
    explicit: PropTypes.bool,
  }).isRequired,
};

export default UpdateMovieForm;
