## React Simple Tab

### INSTALL

npm install react-simple-tab

### USING
```
/** @jsx React.DOM */

'use strict'
var React = require("react");

var SimpleTab = require("../src/simple-tab");

var TabContent = React.createClass({
    render: function () {
        var style = {
            border: "solid 2px #ebeced"
        };
        
        return (
            <div style={style}>{this.props.children}</div>
        );
    }
});

var SimpleTabSample = React.createClass({
    render: function () {
        var style = {
            fontSize: "20px"
        };

        var labelListStyle = {
            margin: 0,
            padding: 0,
            bottom: "-2px",
            position: "relative"
        };
        
        var tabStyle = {
            padding: "5px"
        };
        
        var activeTabStyle = {
            borderWidth: "4px 2px 0px 2px",
            borderColor: "#ff6c60 #ebeced transparent #ebeced",
            borderStyle: "solid",
            zIndex: 1,
            background: "white",
            fontWeight: "bold"
        };
        
        var tabs = [
            { title: "Tab 1", content: <TabContent>Content 1</TabContent>, style: tabStyle, activeStyle: activeTabStyle },
            { title: "Tab 2", content: <TabContent>Content 2</TabContent>, style: tabStyle, activeStyle: activeTabStyle },
            { title: "Tab 3", content: <TabContent>Content 3</TabContent>, style: tabStyle, activeStyle: activeTabStyle }
        ];

        return (
            <SimpleTab tabs={tabs} style={style} labelListStyle={labelListStyle} />
        );
    }
});

React.render(<SimpleTabSample />, document.body);
```

### PropTypes
- tabs: React.PropTypes.array.isRequired
- style: React.PropTypes.object
- labelListStyle: React.PropTypes.object

### Properties
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
