import React from 'react';

export class UserNote extends React.PureComponent {

  render() {
    console.log('UserNote rendered', this.props.callback());
    return <textarea placeholder={'write something'} value={'111'} readOnly>}
        </textarea>;
  }
}
