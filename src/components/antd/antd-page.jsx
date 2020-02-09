import React from 'react';
import { map } from 'lodash-es';
import { getBooks, getTreeData } from '../../api';
import { appendPrefix } from '../../utils';
import Button from 'antd/es/button';
import Table from 'antd/es/table';
import 'antd/es/button/style/css';
import 'antd/es/table/style/css';
import { Checkbox, Modal, Spin, TreeSelect } from 'antd';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Icon from 'antd/es/icon';

class AntdPage extends React.Component {

  columns = [
    {
      title: 'title',
      dataIndex: 'title',
      width: 50
    },
    {
      title: 'price',
      dataIndex: 'price'
    },
    {
      title: 'description',
      dataIndex: 'description'
    }
  ];

  constructor(props, context) {
    super(props, context);
    this.state = {
      books: [],
      visible: false
    };
  }

  async componentDidMount() {
    const res = (await getBooks()).data;
    const res2 = (await getTreeData()).data;
    this.setState({ treeData: res2, books: res });
  }

  toggleModal = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  handleCancel = () => {
    console.log('Class: AntdPage, Function: handleCancel, Line 43 (): ');
    this.toggleModal();
  };

  handleOk = () => {
    console.log('Class: AntdPage, Function: handleOk, Line 48 (): ');
    this.toggleModal();
  };

  render() {
    const columns = map(this.columns);
    return (
      <React.Fragment>
        <Spin/>
        <Modal visible={false}
               title="Basic Modal">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <div>
          {
            appendPrefix('bob')
          }
        </div>
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
        </div>

        {
          this.renderFooter()
        }
        {
          this.renderTreeData()
        }
        {this.renderForm()}
      </React.Fragment>
    );
  }

  renderFooter = () => {
    return <React.Fragment>
      <Table dataSource={[]} columns={this.columns}/>
    </React.Fragment>;
  };


  renderTreeData() {
    const tProps = {
      treeData: this.state.treeData,
      treeCheckable: false,
      showCheckedStrategy: TreeSelect.SHOW_CHILD,
      searchPlaceholder: 'Please select',
      style: {
        width: '200px'
      }
    };
    return <TreeSelect {...tProps} />;
  }

  handleSubmit() {

  }

  onValuesChange(props, changedValues, allValues) {
    console.log(changedValues);
    console.log(allValues);
  }

  renderForm() {
    const { getFieldDecorator } = this.props.form;
    return <Form className="login-form">
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [
            {
              transform: value => value.trim()
            }
          ]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
            placeholder="Username"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password')(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true
        })(<Checkbox>Remember me</Checkbox>)}
        <a className="login-form-forgot" href="">
          Forgot password
        </a>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>;
  }
}

export default Form.create(
  {
    onValuesChange: (props, changedValues, allValues) => {
      console.log(changedValues);
    }
  }
)(AntdPage);
