import React from 'react';
import {connect} from 'react-redux';
import {UserNote} from './user-note';
import {NumberList} from './number-list/number-list';
import {fetchUserAction} from '../actions';
import Link from '../containers/FilterLink';

class userPage extends React.Component {

    userNoteRef;

    constructor(props, context) {
        super(props, context);
        this.userNoteRef = React.createRef();
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        this.props.fetchUserAction();
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state);
    }

    render() {
        return <div>
            <h1>{this.props.user.name}: {this.props.user.age}</h1>
            <h1>{this.props.userHistory}: {JSON.stringify(this.props.userHistory)}</h1>
            <h3>
                描述:
                {this.props.description}
            </h3>
            <button onClick={this.callUserNote}>
                callUserNote
            </button>
            <UserNote ref={this.userNoteRef}/>
            <NumberList numbers={[1, 2, 3, 4, 5]}/>
            <Link to={'/saga'}>saga</Link>
        </div>;
    }

    callUserNote = () => {
        console.log(this.userNoteRef.current);
        console.log(this.userNoteRef.current.sayHello);
        this.setState({count: this.state.count + 1});
        this.userNoteRef.current.sayHello();
    };
}

const mapStateToProps = function (state) {
    return {
        user: state.user,
        userHistory: state.userHistory
    };
};
const mapDispatchToProps = {
    fetchUserAction
};

export default connect(mapStateToProps, mapDispatchToProps)(userPage);
