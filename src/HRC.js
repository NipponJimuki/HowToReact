// HRC.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HRC extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <div>
                <div>{title}</div>
                <div>{children}</div>
            </div>
        );
    }
}
HRC.defaultProps = {
    title: '',
    children: null,
};
HRC.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default HRC;
