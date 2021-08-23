/**
 * hook测试
 */
import React, { useEffect, useState } from 'react';
import { useRequest } from 'ahooks';
import { getUserInfos } from '../../api';

const HookTest = () => {
  const [type, setType] = useState('boy');
  const { userList } = useFetchUserList(type);
  return <>
    'hello world'
    <button onClick={() => setType('girl')}>
      click
    </button>

    {
      JSON.stringify(userList)
    }
  </>;
};

// 对于type，无论是基本数据类型还是对象类型，都会是最新值
function useFetchUserList() {
  const { loading, run, data } = useRequest(getUserInfos, {
    manual: false
  });

  return {
    run,
    userList: data,
    loading
  };
}

export default HookTest;
