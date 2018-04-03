import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

class TabPanels extends Component {
  static contextTypes = {
    activeIndex: PropTypes.number.isRequired,
  };

  render() {
    const { children, style, className } = this.props;
    const { activeIndex } = this.context;
    return (
      <div style={style} className={className || "Tab-Panels"}>
        {children[activeIndex]}
      </div>
    );
  }
}

export default TabPanels;