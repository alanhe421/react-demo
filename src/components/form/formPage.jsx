import React from 'react';
import { Form } from 'antd/es';
import Icon from 'antd/es/icon';
import Input from 'antd/es/input';
import Button from 'antd/es/button';
import OperationDisabled from '../operation-disabled';
import { setUserInfo } from '../../actions';
import { connect } from 'react-redux';
import { InputNumber } from 'antd';

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      username: 'hhhhh'
    };
    this.doSomething = this.doSomething.bind(this);
  }

  listener = function(e) {
    console.log('will unmount');
    e.returnValue = '';
  };

  render() {
    const [form] = Form.useForm();
    const { getFieldDecorator } = form;
    return (
      <div>
        <OperationDisabled disabled={false}>
          <div>
            test OperationDisabled
          </div>
          <Form className="login-form" onValuesChange={(props, changedValues, allValues) => {
            console.log(allValues);
            props.setUserInfo(allValues);
          }}>
            <Form.Item>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your username!' }],
                initialValue: this.state.username
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('age', {
                rules: [{ required: true, message: 'Please input your age!' }]
              })(
                <InputNumber
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="age"
                />
              )}
            </Form.Item>
          </Form></OperationDisabled>
        <Button onClick={this.updateCheckboxDisabled}>update checkbox disabled status</Button>
        <Button onClick={this.updateUsername}>update username</Button>
        <Button onClick={this.onSubmit}>submit</Button>
        <Button onClick={this.doSomething}>do something</Button>
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


  doSomething() {
    console.log(this.props.user);
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  setUserInfo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(FormPage);
