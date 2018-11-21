// App.js
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

class App extends PureComponent {
    render() {
        return (
            <HelloDiv>
                Hello
                <HelloSpan>React</HelloSpan>
                World!
            </HelloDiv>
        );
    }
}

const HelloDiv = styled.div`
    background-color: #008080;
    color: white;
    font-family: Roboto;
    height: 50px;
    margin: 5rem;
    line-height: 50px;
    text-align: center;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1, 100ms);
    :hover {
        background-color: #00a0a0;
    }
`;

const HelloSpan = styled.span`
    font-size: 30px;
    font-style: italic;
    margin: 1rem;
`;

ReactDOM.render(<App />, document.getElementById('content'));
