import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import Siema from 'siema';

import Tabs from '../components/Tabs';
import Tab from '../components/Tab';

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener() {},
    removeListener() {},
  };
};

test('Tabs correctly understand stylize', () => {
  const tabs = mount(
    <Tabs stylize="material">
      <Tab label="Material Design">Material design is so awesome!</Tab>
    </Tabs>,
    );
  expect(tabs.find('ul').hasClass('material__tabs__labels')).toEqual(true);
  expect(tabs.find('ul').hasClass('flat__tabs__labels')).toEqual(false);
  expect(tabs.find('ul').hasClass('original__tabs__labels')).toEqual(false);
});


test('Tabs drop all styles if "stylize" is not specified', () => {
  const tabs = mount(
    <Tabs>
      <Tab label="Material Design">Material design is so awesome!</Tab>
    </Tabs>,
    );
  expect(tabs.find('ul').hasClass('material__tabs__labels')).toEqual(false);
  expect(tabs.find('ul').hasClass('flat__tabs__labels')).toEqual(false);
  expect(tabs.find('ul').hasClass('original__tabs__labels')).toEqual(false);
});


test('Tabs doesn`t switch to slider if count of tabs less than specified', () => {
  const tabs = mount(
    <Tabs slideIf="5" stylize="material">
      <Tab label="text1">in this test</Tab>
      <Tab label="text2">slider</Tab>
      <Tab label="text3">is not</Tab>
      <Tab label="text4">enabled</Tab>
    </Tabs>,
    );
  expect(tabs.find('ul > div').exists()).toBe(false);
});