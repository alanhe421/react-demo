import React, {Component} from 'react';
import logo from './logo.svg';
import HelloWorld from './helloworld';
import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import TodoComponent from "./Todo";

class App extends Component {
    a = 1;

    btnClicked() {
        localStorage.setItem('a', this.a);
        alert(this.a);
    }

    render() {
        return (
            <BrowserRouter>
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
                    {/*<Router>*/}
                    {/*<a href="/todo">todo</a>*/}
                    <Route path='/todo' component={TodoComponent}/>
                    {/*<Route path='/hello' component={TodoComponent}/>*/}
                    {/*</Router>*/}
                    <Link to="/todo">Zillow Group</Link>
                    <button onClick={this.btnClicked.bind(this)}>点击我</button>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
