import React from 'react';
import { shallow } from 'enzyme';
import { TabPanel } from '../index';

describe('Tab Panel', () => {
  it('Must contain a text', () => {
    const multiTab = shallow(
      <TabPanel>
        <p>Lana Del Rey</p>
      </TabPanel>,
        );
    expect(multiTab).toIncludeText('Del Rey');
  });
});

