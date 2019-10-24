import React from 'react';
import {connect} from 'react-redux';
import {UserNote} from './user-note';
import {NumberList} from './number-list/number-list';
import {fetchUserAction, updateUserAgeAction} from '../actions';
import Link from '../containers/FilterLink';

class userPage extends React.Component {

    userNoteRef;

    constructor(props, context) {
        super(props, context);
        this.userNoteRef = React.createRef();
        this.state = {
            count: 0,
            numbers: [1, 2, 3, 4, 5]
        };
    }

    componentDidMount() {
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        console.log('Class: userPage, Function: render, Line 28 111(): ', 111);
        return <div>
            <h1>age: {this.props.userAge}</h1>
            <button onClick={this.callUserNote}>
                callUserNote
            </button>
            <UserNote ref={this.userNoteRef}/>
            <NumberList numbers={this.state.numbers}/>
            <Link to={'/saga'}>saga</Link>
            <button onClick={this.testRerender}>add user age</button>
            <button onClick={this.addNumber}>addNumber</button>
        </div>;
    }

    callUserNote = () => {
        console.log(this.userNoteRef.current);
        console.log(this.userNoteRef.current.sayHello);
        this.setState({count: this.state.count + 1});
        this.userNoteRef.current.sayHello();
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

const mapStateToProps = function (state) {
    return {
        userAge: state.user.age
    };
};
const mapDispatchToProps = {
    fetchUserAction,
    updateUserAgeAction
};

export default connect(mapStateToProps, mapDispatchToProps)(userPage);
