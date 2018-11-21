// HRC.js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class HRC extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            bool: false,
        };
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
        const { bool } = this.state;
        const { handleChange } = this.props;
        this.setState({ bool: !bool });
        handleChange(!bool ? 'on' : 'off');
    }

    render() {
        const { bool } = this.state;
        const subText = bool ? 'on' : 'off';
        return (
            <div>
                <button onClick={this._handleClick}>Hello</button>
                <div>{subText}</div>
            </div>
        );
    }
}
HRC.defaultProps = {
    handleChange() {},
};
HRC.propTypes = {
    handleChange: PropTypes.func,
};

export default HRC;
