import React from 'react';
import { mount, shallow } from 'enzyme';
import { Tab, Tabs, TabList, TabPanels, TabPanel } from '../index';


describe('Tab', () => {
  it('Has a default classname', () => {
    const singleTab = mount(
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
    expect(singleTab.find('.Tab')).toExist();
  });

  it('Allow to set custom classname', () => {
    const singleTab = shallow(
      <Tabs>
        <TabList>
          <Tab className="my_single_tab">One</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>First tab</p>
          </TabPanel>
        </TabPanels>
      </Tabs>,
        );
    expect(singleTab.find('.my_single_tab')).toExist();
  });

  it('Allow to set custom styles', () => {
    const singleTab = shallow(
      <Tabs>
        <TabList>
          <Tab className="my_single_tab" style={{ color: '#bada55' }}>One</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>First tab</p>
          </TabPanel>
        </TabPanels>
      </Tabs>,
        );
    expect(singleTab.find('.my_single_tab')).toHaveStyle('color', '#bada55');
  });

  it('Allow to set disabled Tab', () => {
    const myTab = mount(
      <Tab isDisabled>Two</Tab>,
    );
    expect(myTab).toHaveProp({ isDisabled: true });
  });

  it('Allow to set disabled styles for disabled Tab', () => {
    const myTab = shallow(
      <Tab
        isDisabled
        disabledStyle={{ backgroundColor: 'red' }}
      >
          Two
      </Tab>,
        );
    expect(myTab).toHaveStyle('backgroundColor', 'red');
  });

    it('Allow to set disabled className for disabled Tab', () => {
        const myTab = shallow(
            <Tab
                isDisabled
                disabledClassName="my-tab-disabled"
            >
                Two
            </Tab>,
        );
        expect(myTab).toHaveClassName('my-tab-disabled');
    });
});
