import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

class TabList extends Component {
  static contextTypes = {
    activeIndex: PropTypes.number.isRequired,
    onSelectTab: PropTypes.func.isRequired,
  };

  render() {
    const { activeIndex } = this.context;
    const children = React.Children.map(this.props.children, (child, index) => React.cloneElement(child, {
      isActive: index === activeIndex,
      onSelect: () => this.context.onSelectTab(index),
    }));
    return (
      <div style={this.props.style} className={this.props.className || "Tabs-List"}>
        {children}
      </div>
    );
  }
}

export default TabList;
