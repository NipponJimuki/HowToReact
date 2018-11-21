// App.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
        };

        this._handleChange = this._handleChange.bind(this);
        this._handleSend = this._handleSend.bind(this);
    }

    _handleChange(e) {
        this.setState({ text: e.target.value });
    }

    _handleSend() {
        this.setState({ result: this.state.text });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this._handleChange} />
                <button onClick={this._handleSend}>送信</button>
                <div>
                    <div>送信値</div>
                    <div>{this.state.result}</div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('content'));
