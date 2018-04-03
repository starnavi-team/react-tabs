import React from 'react';
import { shallow } from 'enzyme';
import { Tab, Tabs, TabList, TabPanels, TabPanel } from '../index';

describe('Tabs', () => {
  it('Has a default classname', () => {
    const singleTab = shallow(
      <Tabs>
        <TabList>
          <Tab>One</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>First tab</p>
          </TabPanel>
        </TabPanels>
      </Tabs>,
        );
    expect(singleTab.hasClass('Tabs')).toBe(true);
  });

  it('Allow to set custom classname', () => {
    const singleTab = shallow(
      <Tabs className="my_tabs">
        <TabList>
          <Tab>One</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>First tab</p>
          </TabPanel>
        </TabPanels>
      </Tabs>,
      );
    expect(singleTab.hasClass('my_tabs')).toBe(true);
  });

  it('Allow to set custom styles', () => {
    const singleTab = shallow(
      <Tabs className="my_tabs" style={{ height: '300px' }}>
        <TabList>
          <Tab>One</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>First tab</p>
          </TabPanel>
        </TabPanels>
      </Tabs>,
    );
    expect(singleTab.find('.my_tabs')).toHaveStyle('height', '300px');
  });
});
