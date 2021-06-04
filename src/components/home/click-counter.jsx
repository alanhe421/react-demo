import { useEffect, useState } from 'react';
import React from 'react';

export default function ClickCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  const { user, callUser } = useCallUserApi(count);
  useEffect(() => {
    document.title = `click ${count} times`;
  }, [count]);

  return <div onClick={handleClick}>
    you click {count} times;
    ////
    userInfo:{JSON.stringify(user)}
    <button onClick={() => callUser()}>
      call user
    </button>
  </div>;
}


function useCallUserApi(userId) {
  const [user, setUser] = useState();
  console.log(userId);


  useEffect(() => {
    console.log('init useCallUserApi');
  }, []);

  function callUser() {
    new Promise((resolve) => {
      window.setTimeout(() => {
      }, 1000);
      resolve({
        userId: userId,
        userName: 'alan he'
      });
    }).then((user) => {
      setUser(user);
    });
  }

  useEffect(() => {
      callUser();
    }
    , []);
  return {
    user,
    callUser
  };
}
