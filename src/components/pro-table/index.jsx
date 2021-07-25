import React from 'react';
import { ConfigProvider, Spin } from 'antd';
import ProTable from '@ant-design/pro-table';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error'
};

const tableListDataSource = [];
for (let i = 0; i < 2; i += 1) {
  tableListDataSource.push({
    key: i,
    name: `TradeCode ${i}`,
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    updatedAt: Date.now() - Math.floor(Math.random() * 1000),
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    money: Math.floor(Math.random() * 2000) * i
  });
}

function renderOption() {
  return <button onClick={() => this.setState({ spin: true })}>
    open loading
  </button>;
}

const columns = [
  {
    title: '标题',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '状态',
    dataIndex: 'status',
    initialValue: 'all',
    filters: true,
    onFilter: true,
    valueType: 'select',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' }
    }
  },
  {
    title: '创建时间',
    key: 'since',
    dataIndex: 'createdAt',
    valueType: 'dateTime'
  },
  {
    title: '更新时间',
    key: 'since2',
    dataIndex: 'createdAt',
    valueType: 'date'
  },
  {
    title: '操作',
    key: 'option',
    width: 120,
    valueType: 'option',
    render: renderOption.bind(this)
  }
];

class Table extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      spin: true
    };
  }

  render() {
    return <ConfigProvider direction='rtl'>
      <ProTable
        columns={columns}
        rowKey='key'
        search={false}
        options={{
          fullScreen: true,
          reload: false,
          setting: false,
          density: false
        }
        }
      />
      <Spin spinning={this.state.spin} />
    </ConfigProvider>;
  }
}

export default Table;
