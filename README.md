# React Simple Tab

[![npm version](https://badge.fury.io/js/react-simple-tab.svg)](http://badge.fury.io/js/react-simple-tab)

# Example

https://rudolph-miller.github.io/react-simple-tab

# Feature

- customizable style

# Install

```sh
npm install react-simple-tab
```

# Usage

```es6
window.React = require('react');
import { render } from 'react-dom';
import React, { Component, PropTypes } from 'react';
import SimpleTab from 'react-simple-tab';

const Styles = {
  tabContent: {
    border: 'solid 2px #ebeced',
    padding: '15px'
  },
  app: {
    tabStyle: {
      fontSize: '20px'
    },
    labelListStyle: {
      margin: 0,
      padding: 0,
      bottom: '-2px',
      position: 'relative'
    },
    tabContentStyle: {
      padding: '10px'
    },
    activeTabContentStyle: {
      borderWidth: '4px 2px 0px 2px',
      borderColor: '#ff6c60 #ebeced transparent #ebeced',
      borderStyle: 'solid',
      zIndex: 1,
      background: 'white',
      fontWeight: 'bold'
    }
  }
};

class TabContent extends Component {
  render() {
    return (
      <div style={Styles.tabContent}>
        {this.props.children}
      </div>
    );
  }
}

class App extends Component {
  render() {
    const tabs = [
      { title: 'Tab 1', content: (<TabContent>Content 1</TabContent>) },
      { title: 'Tab 2', content: (<TabContent>Content 2</TabContent>) },
      { title: 'Tab 3', content: (<TabContent>Content 3</TabContent>) }
    ].map(tab => {
      return Object.assign({}, tab, {
        style: Styles.app.tabContentStyle,
        activeStyle: Styles.app.activeTabContentStyle
      });
    });

    return (
      <SimpleTab
        tabs={tabs}
        style={Styles.app.tabStyle}
        labelListStyle={Styles.app.labelListStyle} />
    );
  }
}

render(<App />, document.getElementById('app'));
```

# PropTypes

- tabs: React.PropTypes.array.isRequired
- style: React.PropTypes.object
- labelListStyle: React.PropTypes.object

# Properties

- tabs: Object
  - title: String
    - tab label title
  - content: React Element
    - tab content
  - style: Object
    - the default style applied to tab label
  - activeStyle: Object
    - the style applied to tab label when the tab is active
- style: Object
  - the style applied to `<div />` wrapping tabs
- listLabelStyle: Object
  - the style applied to `<ul />` wrapping tab labels

# Copyright

Copyright (c) 2015 Rudolph-Miller (chopsticks.tk.ppfm@gmail.com)

# License

Licensed under the MIT License.
