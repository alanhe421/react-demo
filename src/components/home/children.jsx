import React from 'react';

export class Children extends React.PureComponent {

  render() {
    console.log('renderChildren', this.props.name);
    return <div>
      i am children!
    </div>;
  }
}
