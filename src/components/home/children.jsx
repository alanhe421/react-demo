import React from 'react';
import { connect } from 'react-redux';

class Children extends React.Component {

  render() {
    console.log('renderChildren', this.props.name);
    return <div>
      i am children!
    </div>;
  }
}

export default connect()(Children);
// export default (Children);
