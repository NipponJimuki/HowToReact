// App.js
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import styles from './style.css';

class App extends PureComponent {
    render() {
        return (
            <div className={styles.helloDiv}>
                Hello
                <span className={styles.helloSpan}>React</span>
                World!
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('content'));
