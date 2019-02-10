import React from 'react';
import {connect} from 'react-redux';

class user extends React.Component {

    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        return <h1>{this.props.user.name}: {this.props.user.age}</h1>;
    }
}

const mapStateToProps = function (state) {
    return {
        user: state.user
    };
};
const mapDispatchToProps = function (dispatch) {
    return {
        getUserInfo: () => dispatch({type: 'USER_FETCH'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(user);
