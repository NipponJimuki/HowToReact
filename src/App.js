// App.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HRC from './HRC';

class App extends Component {
    render() {
        return (
            <div>
                <HRC title="React Title">this is this.props.children</HRC>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('content'));
