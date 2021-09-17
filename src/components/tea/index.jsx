import React from 'react';
import { Table } from 'tea-component';

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`
  });
}

function TeaTableTest() {

  const columns = [
    {
      header: '名字',
      key: 'name'
    },
    {
      header: '年龄',
      key: 'age'
    }
  ];
  return <Table columns={columns} records={data} />;
}


export default TeaTableTest;
