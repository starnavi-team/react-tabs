import React from 'react';
import { shallow } from 'enzyme';
import { Tab, Tabs, TabList, TabPanels, TabPanel } from '../index';

describe('Tab Panels', () => {
  it('Allow to set custom classname', () => {
    const singleTab = shallow(
      <Tabs>
        <TabList>
          <Tab>One</Tab>
        </TabList>
        <TabPanels className="tab-panel wrapper">
          <TabPanel>
            <p>First tab</p>
          </TabPanel>
        </TabPanels>
      </Tabs>,
        );
    expect(singleTab.find('.tab-panel')).toExist();
  });

  it('Allow to set custom styles', () => {
    const singleTabPanel = shallow(
      <Tabs>
        <TabList>
          <Tab>One</Tab>
        </TabList>
        <TabPanels className="tab_panel_container" style={{ width: '100px' }}>
          <TabPanel>
            <p>First tab</p>
          </TabPanel>
        </TabPanels>
      </Tabs>,
    );
    expect(singleTabPanel.find('.tab_panel_container')).toHaveStyle('width', '100px');
  });
});
