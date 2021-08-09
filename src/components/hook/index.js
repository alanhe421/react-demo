import React from 'react';

/**
 * hook测试
 */
import { useCallback, useEffect, useState } from 'react';

const HookTest = () => {
  const [type, setType] = useState('boy');
  const { userList, run } = useFetchUserList(type);


  useEffect(() => {
    run();
  }, [type]);

  return <>
    'hello world'

    <button onClick={() => setType('girl')}>
      click
    </button>
  </>;
};

// 对于type，无论是基本数据类型还是对象类型，都会是最新值
function useFetchUserList(type) {
  const [userList, setUserList] = useState([]);
  const run = useCallback(() => {
    console.log(type);
    return new Promise(resolve => {
      window.setTimeout(() => {
        resolve((new Array(100).fill().map(() => Math.random())));
      }, 3000);
    }).then(res => setUserList(res));
  }, [type]);

  return {
    run,
    userList
  };
}

export default HookTest;
