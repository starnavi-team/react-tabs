// @flow

import React from 'react';
import Tabs from './Tabs';
import Tab from './Tab';

const App = (props: Object) => (
  <Tabs selected={0}>
    <Tab label="React">React is really awesome</Tab>
    <Tab label="Ember">Ember is old</Tab>
    <Tab label="Angular">Angular is super powerfull</Tab>
  </Tabs>
    );

export default App;
