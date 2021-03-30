import React from 'react';
import { connect } from 'react-redux';

class Children extends React.PureComponent {

  render() {
    this.props.callback && this.props.callback();
    console.log('renderChildren', this.props.name);
    return <div>
      i am children!
    </div>;
  }
}

export default connect()(Children);
