import {Component} from "react";
import React from "react";

class Child extends Component {
    render() {
        return (<div>hello {this.props.name}!!!</div>);
    }

    componentWillReceiveProps() {
        console.log('参数要变');
        console.log(this.props.name);
    }

    componentDidUpdate(prevProps) {
        console.log('参数变化后');
        console.log(prevProps);
        console.log(this.props.name);
    }
}

export default Child;
