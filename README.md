# sn-react-tabs
Extremely simple and flexible tabs

## Installing

```bash
npm i @starnavi/sn-react-tabs
```
or

```bash
yarn add @starnavi/sn-react-tabs
```

## Basic Example

```js
import { Tab, Tabs, TabList, TabPanels, TabPanel } from '@starnavi/sn-react-tabs';

export default () => (
  <Tabs>
    <TabList>
      <Tab>First Tab</Tab>
      <Tab>Second Tab</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <h2>First Tab Content</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content or components are allowed</h2>
      </TabPanel>
    </TabPanels>
  </Tabs>
);
```

## API

## Components

### &lt;Tabs /&gt;

If you specify additional props on the `<Tabs />` component they will be forwarded to the rendered `<div />`.

#### className: `string`

> default: `"Tabs"`

Provide a custom class name for the outer `<div />` of the tabs.

#### style

Provide a custom inline styles.

#### onSelect: `(index: number) => {  }`

This event handler is called every time a tab is about to change. It will be called with the `index` that it will be changed to.

#### defaultIndex: `number`

Set the currently selected tab.

### &lt;TabList /&gt;

If you specify additional props on the `<TabList />` component they will be forwarded to the rendered `<div />`.

#### className: `string`

> default: `"Tabs-List"`

Provide a custom class name.

#### style

Provide a custom inline styles.

### &lt;Tab /&gt;

If you specify additional props on the `<Tab />` component they will be forwarded to the rendered `<div />`.

#### className: `string`

> default: `"Tab"`

Provide a custom class name.

#### style

Provide a custom inline styles.

#### isDisabled: `boolean`

> default: `false`

Disable this tab which will make it not do anything when clicked.

#### disabledClassName: `string`

> default: `none`

Provide a custom class name for disabled tabs.

#### disabledStyle

> default: `none`

Provide a custom styles for disabled tabs.

#### activeClassName: `string`

> default: `none`

Provide a custom class name for active tabs.

#### activeStyle

> default: `none`

Provide a custom styles for active tabs.

### &lt;TabPanels /&gt;

If you specify additional props on the `<TabPanels />` component they will be forwarded to the rendered `<div />`.

#### className: `string`

> default: `"Tab-Panels"`

Provide a custom class name.

#### style

Provide a custom inline styles.

### &lt;TabPanel /&gt;

You can use any React components or html markup inside `<TabPanel />`

## Styling

sn-react-tabs does not include any style loading by default. Default stylesheets are provided and can be included in your application if desired.
