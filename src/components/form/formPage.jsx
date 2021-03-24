import React from 'react';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import CountrySelector from './country-selector';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const Demo = () => {
  const onValuesChange = (changedValues, allValues) => {
    console.log(changedValues, allValues);
  };
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true, country: [] }}
      onValuesChange={onValuesChange}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Country"
        name="country"
        rules={[{ required: true, message: 'Please select country!' }]}
      >
        <CountrySelector />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;
