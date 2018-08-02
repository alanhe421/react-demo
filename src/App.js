import React, {Component} from 'react';
import logo from './logo.svg';
import HelloWorld from './helloworld';
import './App.css';
import Video from "./video";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-intro">
                    <HelloWorld name="alan"/>
                    <HelloWorld name="dave"/>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </div>
                <Video/>
            </div>
        );
    }
}

export default App;
