import React from 'react';
import { Form } from 'antd/es';
import Icon from 'antd/es/icon';
import { Checkbox, InputNumber } from 'antd';
import Input from 'antd/es/input';
import Button from 'antd/es/button';
import OperationDisabled from '../operation-disabled';
import Select from 'antd/es/select';

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      username: 'hhhhh'
    };
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <OperationDisabled disabled={false}>
          <div>
            test OperationDisabled
          </div>
          <Form className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
                initialValue: this.state.username
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('progress', {
                rules: [],
                defaultValue: null
              })(
                <InputNumber min={0.5} max={10}
                             formatter={value => value + '%'} precision={2}
                             parser={value => {
                               if (value === null) {
                                 return value;
                               }
                               return Number(value.slice(0, -1));
                             }}
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: false
              })(<Checkbox onChange={this.handleRememberChange}>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('location', {
                rules: [{ required: true, message: 'Please input your location' }],
                initialValue: null
              })(
                <Select style={{ width: 120 }}>
                  <Select.Option value={null}>null</Select.Option>
                  <Select.Option value="jack">Jack</Select.Option>
                  <Select.Option value="lucy">Lucy</Select.Option>
                  <Select.Option value="disabled">
                    Disabled
                  </Select.Option>
                  <Select.Option value="Yiminghe">yiminghe</Select.Option>
                </Select>
              )}
            </Form.Item>

          </Form></OperationDisabled>

        <Button onClick={this.updateCheckboxDisabled}>update checkbox disabled status</Button>
        <Button onClick={this.updateUsername}>update username</Button>
        <Button onClick={this.onSubmit}>submit</Button>
      </div>
    );
  }

  onSubmit = () => {
    this.props.form.validateFields();
  };


  updateCheckboxDisabled = () => {
    this.setState({
      disabled: !this.state.disabled
    });
  };

  updateUsername = () => {
    this.setState({
      username: Math.random()
    });
  };

  handleRememberChange = (e) => {
    // e.target.checked = false;
  };
}

export default Form.create({
  onValuesChange: (props, changedValues, allValues) => {
    console.log(changedValues);
    console.dir(props);
    // props.form.setFieldsValue({ remember: false });
  }
})(FormPage);
