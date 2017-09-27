// @flow

import React from 'react';
import Tabs from './Tabs';
import Tab from './Tab';

const App = (props: Object) => (
  <Tabs stylize="original" selected={0}>
    <Tab label="React">React is really awesome</Tab>
    <Tab label="Ember">Ember is old</Tab>
    <Tab label="Angular">Angular is super powerfull</Tab>
    <Tab label="Jquery">Jquery is not needed</Tab>
    <Tab label="Polymer">Polymer is a cool thing. Maybe</Tab>
    <Tab label="RxJS">RxJS is about reactive programming</Tab>
    <Tab label="Elm">Elm is a part of functional programming</Tab>
    <Tab label="Flow">Flow is for static types</Tab>
    <Tab label="Webpack">Webpack makes our life simple</Tab>
    <Tab label="Jest">Jest is for testing React</Tab>
    <Tab label="Redux">Redux for managing all state</Tab>
  </Tabs>
);

export default App;
