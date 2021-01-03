import React from 'react';
import { connect } from 'react-redux';
import { UserNote } from '../user-note';
import { fetchUserAction, updateUserAgeAction } from '../../actions';

class userPage extends React.Component {

  userNoteRef;

  constructor(props, context) {
    super(props, context);
    this.userNoteRef = React.createRef();
    this.state = {
      count: 0,
      numbers: [1, 2, 3, 4, 5]
    };
    this.sayHello = this.sayHello.bind(this);
  }

  sayHello() {
    console.log(this.state.numbers, 'sayHello');
  };

  render() {
    return <div>
      <h1>age: {this.props.userAge}</h1>{this.state.count}
      <button onClick={this.callUserNote}>
        callUserNote
      </button>
      <UserNote ref={this.userNoteRef} callback={this.sayHello} />
      <button onClick={this.testRerender}>add user age</button>
      <button onClick={this.addNumber}>addNumber</button>
    </div>;
  }

  callUserNote = () => {
    this.setState({ count: this.state.count + 1 });
  };

  testRerender = () => {
    this.props.updateUserAgeAction();
  };

  addNumber = () => {
    this.setState({
      numbers: [...this.state.numbers, Math.random()]
    });
  };
}

const mapStateToProps = function(state) {
  return {
    userAge: state.user.age
  };
};
const mapDispatchToProps = {
  fetchUserAction,
  updateUserAgeAction
};

export default connect(mapStateToProps, mapDispatchToProps)(userPage);
