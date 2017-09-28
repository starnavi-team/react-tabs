import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Tab from '../components/Tab';
import Tabs from '../components/Tabs';

test('Tab has a correct text', () => {
  const singleTab = shallow(
    <Tabs>
      <Tab label="Jest">Testing!</Tab>
    </Tabs>,
    );
  expect(singleTab.find('a').text()).toEqual('Jest');
});