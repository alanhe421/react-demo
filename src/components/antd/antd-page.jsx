import React from 'react';
import { getBooks, getTreeData, getUserInfos } from '../../api';
import Table from 'antd/es/table';
import 'antd/es/button/style/css';
import 'antd/es/table/style/css';
import { Button, TreeSelect } from 'antd';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Icon from 'antd/es/icon';
import Search from 'antd/es/input/Search';

class AntdPage extends React.Component {

  columns = () => {
    return [
      {
        title: 'Name',
        dataIndex: 'name',
        width: 500
      },
      {
        title: 'Age',
        dataIndex: 'age',
        width: 500
      },
      {
        title: 'Address',
        dataIndex: 'address',
        align: 'center',
        width: 500
      },
      {
        title: 'action',
        render: () => <Button>delete</Button>
      }
    ].filter(item => this.state.pass ? item.title !== 'action' : true);
  };


  constructor(props, context) {
    super(props, context);
    this.state = {
      books: [],
      visible: false,
      num: 1,
      userinfos: [],
      pass: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const res = (await getBooks()).data;
    const res2 = (await getTreeData()).data;
    const res3 = (await getUserInfos()).data;
    this.setState({ treeData: res2, books: res, userinfos: res3 });
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
        <Search
          placeholder="input search text"
          allowClear
          onSearch={(value, e) => console.log(value, e)}
          style={{ width: 200 }}
          enterButton
        />
        number: <Input onBlur={this.handleBlur}/>
        <hr/>
        <div style={{ resize: 'both', border: '1px solid red', width: 200 }}>
          hello world
        </div>
        <Table dataSource={this.state.userinfos} columns={this.columns()} rowKey={'id'}
               rowSelection={{ type: 'radio' }} scroll={{ x: 2000 }}/>
        <Button onClick={() => this.setState((pre) => ({ pass: !pre.pass }))}>toggle columns</Button>
        <a href={'/static/mock-data/snapshot1.png'} download={'newname'}>
          click it
        </a>
      </React.Fragment>
    );
  }

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

  deleteColumn() {

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
