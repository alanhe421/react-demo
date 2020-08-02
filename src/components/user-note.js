import React from 'react';

export class UserNote extends React.PureComponent {


  constructor(props, context) {
    super(props, context);
  }

  sayHello() {
    alert('I am note!');
  }

  render() {
    console.log('UserNote');
    return (
      <textarea placeholder={'write something'}>
        </textarea>);
  }
}
