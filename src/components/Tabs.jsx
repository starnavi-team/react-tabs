import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

class Tabs extends Component {
  static childContextTypes = {
    activeIndex: PropTypes.number.isRequired,
    onSelectTab: PropTypes.func.isRequired,
  }

  state = {
    activeIndex: this.props.defaultIndex || 0 ,
  };

  getChildContext() {
    return {
      activeIndex: this.state.activeIndex,
      onSelectTab: this.selectTabIndex,
    };
  }

  selectTabIndex = (activeIndex) => {
      this.setState({ activeIndex });
      this.props.onChangeIndex && this.props.onChangeIndex(activeIndex);
  }

  render() {
    return (
      <div style={this.props.style} className={this.props.className || "Tabs"}>
        {this.props.children}
      </div>
    );
  }
}

export default Tabs;