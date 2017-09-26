// @flow


import React, { Component } from 'react';

export default class Tabs extends Component {

  state: {
      selected: number;
  };

  onLabelClick: Function;
  labels: Function;


  constructor(props: any) {
    super(props);

    this.state = { selected: this.props.selected };

    this.labels = this.labels.bind(this);
    this.onLabelClick = this.onLabelClick.bind(this);
  }

  onLabelClick(index: number) {
    this.setState({
      selected: index,
    });
  }

  labels(child: any, index: number) {
    const onClick = this.onLabelClick.bind(this, index);
    const activeClass = (this.state.selected === index ? 'is-active' : '');
    return (
      <li key={index} className={`${activeClass} tabs__labels-item`}>
        <a onClick={onClick}>
          {child.props.label}
        </a>
      </li>
    );
  }

  render() {
    return (
      <div className="tabs">
        <ul className="tabs__labels">
          {this.props.children.map(this.labels)}
        </ul>
        <div className="tabs__content">
          {this.props.children[this.state.selected]}
        </div>
      </div>
    );
  }
}
