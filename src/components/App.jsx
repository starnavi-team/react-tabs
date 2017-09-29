// @flow

import React from 'react';
import Tabs from './Tabs';
import Tab from './Tab';

// stylize: can be 'original', 'material' or 'flat'. It`s just a style
// slideAfter: at a value less than the specified, tabs become a slider
// slideIf: if the number of tabs is greater than or equal to the specified, tabs become a slider
const App = (props: Object) => (
  <Tabs stylize="material" slideIf="15" slideAfter="861" selected={0}>
    <Tab label="React">React is really awesome</Tab>
    <Tab label="Ember">Ember is old</Tab>
    <Tab label="Angular">Angular is super powerfull</Tab>
    <Tab label="Jquery">Jquery is soooo boring</Tab>
    <Tab label="Polymer">Polymer is a cool thing. Maybe</Tab>
    <Tab label="RxJS">RxJS is about reactive programming</Tab>
    <Tab label="Elm">Elm is a part of functional programming</Tab>
    <Tab label="Flow">Flow is for static types</Tab>
    <Tab label="Webpack">Webpack makes our life simple</Tab>
  </Tabs>
);

export default App;
