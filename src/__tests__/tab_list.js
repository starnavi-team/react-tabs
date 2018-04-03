import React from 'react';
import { shallow } from 'enzyme';
import { Tab, Tabs, TabList, TabPanels, TabPanel } from '../index';

describe('Tab List', () => {
  it('Allow to set custom classname', () => {
    const singleTabList = shallow(
      <Tabs>
        <TabList className="Tab-List Component">
          <Tab>One</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>First tab</p>
          </TabPanel>
        </TabPanels>
      </Tabs>,
    );
    expect(singleTabList.find('.Tab-List')).toHaveClassName('Component');
  });

  it('Allow to set custom styles', () => {
    const singleTabList = shallow(
      <Tabs>
        <TabList className="Tab-List" style={{ backgroundColor: '#bada55' }}>
          <Tab>One</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>First tab</p>
          </TabPanel>
        </TabPanels>
      </Tabs>,
    );
    expect(singleTabList.find('.Tab-List')).toHaveStyle('backgroundColor', '#bada55');
  });
});
