import React, {Component} from 'react';
import logo from './logo.svg';
import HelloWorld from './helloworld';
import './App.css';

class App extends Component {
    a = 1;

    btnClicked() {
        alert(this.a);
    }

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
                {/*<Router>*/}
                {/*<a href="/todo">todo</a>*/}
                {/*<Route path='/todo' component={TodoComponent}/>*/}
                {/*<Route path='/hello' component={TodoComponent}/>*/}
                {/*</Router>*/}

                <button onClick={this.btnClicked.bind(this)}>点击我</button>

            </div>
        );
    }
}

export default App;
