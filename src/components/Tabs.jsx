// @flow

import React, { Component } from 'react';

import Siema from 'siema';

export default class Tabs extends Component {

  state: {
      selected: number;
      labelsClass: string;
      labelClass: string,
      activeClass: string,
  };

  onLabelClick: Function;
  labels: Function;
  changeStyle: Function;
  setupSlider: Function;

  constructor(props: any) {
    super(props);

    this.state = {
      selected: this.props.selected,
      labelsClass: '',
      labelClass: '',
      activeClass: '',
    };

    this.labels = this.labels.bind(this);
    this.onLabelClick = this.onLabelClick.bind(this);
  }

  componentDidMount() {
    this.setupSlider();
    this.changeStyle();
  }


  onLabelClick(index: number) {
    this.setState({
      selected: index,
    });
  }

  setupSlider() {
    const slideAfter = window.matchMedia(`(max-width: ${this.props.slideAfter}px)`).matches;

    if (this.props.children.length >= this.props.slideIf || slideAfter) {
      new Siema({
        selector: '.tabs__labels__slider',
        duration: 200,
        easing: 'ease-out',
        perPage: {
          [320]: 3,
          [460]: 4,
          [620]: 6,
          [800]: 8,
          [1240]: 11,
        },
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: false,
      });
    }
  }

  changeStyle() {
    switch (this.props.stylize) {
      case ('original'):
        this.setState({
          labelClass: 'original__tabs__labels-item',
          labelsClass: 'original__tabs__labels',
          activeClass: 'original__is-active',
        });
        break;
      case ('flat'):
        this.setState({
          labelClass: 'flat__tabs__labels-item',
          labelsClass: 'flat__tabs__labels',
          activeClass: 'flat__is-active',
        }); break;
      case ('material'):
        this.setState({
          labelClass: 'material__tabs__labels-item',
          labelsClass: 'material__tabs__labels',
          activeClass: 'material__is-active',
        }); break;

      default: this.setState({
        labelClass: '',
        labelsClass: '',
        activeClass: '',
      }); break;
    }
  }

  labels(child: Object, index: number) {
    const onClick = this.onLabelClick.bind(this, index);
    const activeClass = (this.state.selected === index ? this.state.activeClass : '');
    return (
      <li key={index} className={`${activeClass} ${this.state.labelClass}`}>
        <a onClick={onClick}>
          {child.props.label}
        </a>
      </li>
    );
  }

  render() {
    return (
      <div className="tabs">
        <ul className={`${this.state.labelsClass} tabs__labels__slider`}>
          {React.Children.map(this.props.children, this.labels)}
        </ul>
        <div className="tabs__content">
          {this.props.children[this.state.selected]}
        </div>
      </div>
    );
  }
}
