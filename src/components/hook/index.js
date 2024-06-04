/**
 * hook测试
 */
import React, { useEffect, useState } from 'react';
import { useRequest } from 'ahooks';
import { getUserInfos } from '../../api';
import { Button } from 'antd';

const HookTest = () => {
  const [num1, setNum1] = useState(100);
  const [num2, setNum2] = useState(200);

  useEffect(() => {
    console.log('num1', num1, 'num2', num2);
  }, [num1]);
  return <>
    <Button onClick={() => {
      setNum1(n => n + 1);
    }}>
      Num1+1
    </Button>
    <Button onClick={() => {
      setNum2(n => n + 1);
    }}>
      Num2+1
    </Button>
  </>;
};

export default HookTest;
