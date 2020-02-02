import React from 'react';
import { map } from 'lodash-es';
import { getBooks, getTreeData } from '../../api';
import { appendPrefix } from '../../utils';
import Button from 'antd/es/button';
import Table from 'antd/es/table';
import 'antd/es/button/style/css';
import 'antd/es/table/style/css';
import { Modal, Spin, TreeSelect } from 'antd';
import moment from 'moment';

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
        <Modal visible={true}
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
}

export default AntdPage;
