import React from 'react';
import {connect} from 'react-redux';
import {fetchUserHistory} from '../effects/thunk';
import {UserNote} from './user-note';

class user extends React.Component {

    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
    }

    focusTextInput = () => {
        this.textInput.current.sayHello();
    };

    render() {
        // tell React that we want to associate the <input> ref
        // with the `textInput` that we created in the constructor
        return (
            <div>
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
                <UserNote ref={this.textInput}/>
                <button onClick={this.focusTextInput}>call child event</button>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        user: state.user,
        userHistory: state.userHistory
    };
};
const mapDispatchToProps = function (dispatch) {
    return {
        getUserInfo: () => dispatch({type: 'USER_FETCH'}),
        getUserHistory: () => dispatch(fetchUserHistory())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(user);
