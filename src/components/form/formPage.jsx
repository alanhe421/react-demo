import React from 'react';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import { Option } from 'antd/es/mentions';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const Demo = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true, country: [] }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
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
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="select one country"
          optionLabelProp="label"
        >
          <Option value="china" label="China">
            <div className="demo-option-label-item">
        <span role="img" aria-label="China">
          🇨🇳
        </span>
              China (中国)
            </div>
          </Option>
          <Option value="usa" label="USA">
            <div className="demo-option-label-item">
        <span role="img" aria-label="USA">
          🇺🇸
        </span>
              USA (美国)
            </div>
          </Option>
          <Option value="japan" label="Japan">
            <div className="demo-option-label-item">
        <span role="img" aria-label="Japan">
          🇯🇵
        </span>
              Japan (日本)
            </div>
          </Option>
          <Option value="korea" label="Korea">
            <div className="demo-option-label-item">
        <span role="img" aria-label="Korea">
          🇰🇷
        </span>
              Korea (韩国)
            </div>
          </Option>
        </Select>
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
