
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  render() {
    const {
        isActive,
        isDisabled,
        style,
        onSelect,
        disabledStyle,
        activeStyle,
        disabledClassName,
        activeClassName,
        className,
    } = this.props;

    return (
      <div
        style={isDisabled ? disabledStyle : isActive ? activeStyle : style}
        className={isDisabled ? disabledClassName : isActive ? activeClassName || className || 'Tab' : className || 'Tab'}
        onClick={isDisabled ? null : onSelect}
      >
        {this.props.children}
      </div>
    );
  }
}

Tab.propTypes = {
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onSelect: PropTypes.func,
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
  disabledStyle: PropTypes.object,
  disabledClassName: PropTypes.string,
  activeClassName: PropTypes.string,
  activeStyle: PropTypes.object,
};


export default Tab;
