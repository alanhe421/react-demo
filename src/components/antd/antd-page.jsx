import React from 'react';
import { getBooks, getTreeData } from '../../api';
import Table from 'antd/es/table';
import 'antd/es/button/style/css';
import 'antd/es/table/style/css';
import { TreeSelect } from 'antd';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Icon from 'antd/es/icon';
import UserForm from './user-form';

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
      visible: false,
      num: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleBlur = (e) => {
    this.setState({
      num: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        number: <Input onBlur={this.handleBlur}/>
        <hr/>
        <UserForm num={this.state.num}/>
      </React.Fragment>
    );
  }

  renderFooter = () => {
    return <React.Fragment>
      <Table dataSource={[]} columns={this.columns}/>
    </React.Fragment>;
  };


  renderTreeData() {
    const props = {
      treeData: this.state.treeData,
      treeCheckable: true,
      showCheckedStrategy: TreeSelect.SHOW_PARENT,
      searchPlaceholder: 'Please select',
      style: {
        width: '200px'
      }
    };
    return <TreeSelect {...props} />;
  }

  handleSubmit() {
    let fieldsValue = this.props.form.getFieldsValue();
    console.dir(fieldsValue);
  }

  onValuesChange(props, changedValues, allValues) {
    console.log(changedValues);
    console.log(allValues);
  }


  componentWillReceiveProps(nextProps) {
    console.dir(nextProps);
  }

  renderForm() {
    const tProps = {
      treeData: this.state.treeData,
      treeCheckable: true,
      showCheckedStrategy: TreeSelect.SHOW_PARENT,
      searchPlaceholder: 'Please select',
      style: {
        width: '200px'
      }
    };

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
        {getFieldDecorator('country', {
          initialValue: []
        })(
          <TreeSelect {...tProps} />
        )}
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
