// App.js
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import HRC from './HRC';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            text: 'off',
        };

        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(value) {
        this.setState({ text: value });
    }

    render() {
        return (
            <div>
                <HRC handleChange={this._handleChange} />
                <div>
                    App/
                    {this.state.text}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('content'));
