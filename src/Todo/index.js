import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

export default class TodoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {back: false};
    }

    backHome() {
        this.setState({back: true});
    }

    render() {
        if (this.state.back) {
            return <Redirect to="/"/>
        }
        return (
            <div>

                <ul>
                    <li>
                        1111
                    </li>
                    <li>
                        2222
                    </li>
                </ul>
                <button onClick={this.backHome.bind(this)}>返回首页</button>
            </div>
        )
    }

}
