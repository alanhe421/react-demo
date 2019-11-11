import React from 'react';
import {Form} from 'antd/es';
import Icon from 'antd/es/icon';
import {Checkbox} from 'antd';
import Input from 'antd/es/input';
import Button from 'antd/es/button';

class FormPage extends React.Component {
    formRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            disabled: true
        };
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <div>
                <Form className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: 'Please input your username!'}]
                        })(
                            <Input
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="Username"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}]
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="Password"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true
                        })(<Checkbox disabled={this.state.disabled}>Remember me</Checkbox>)}
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>

                <Button onClick={this.updateCheckboxDisabled}>update checkbox disabled status</Button>
            </div>
        );
    }

    onSubmit = () => {
        this.formRef.current.submit();
    };


    updateCheckboxDisabled = () => {
        this.setState({
            disabled: !this.state.disabled
        });
    };
}

export default Form.create()(FormPage);
