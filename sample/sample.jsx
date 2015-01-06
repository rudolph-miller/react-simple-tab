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
        ];

        return (
            <SimpleTab tabs={tabs} style={style} labelListStyle={labelListStyle} />
        );
    }
});

React.render(<SimpleTabSample />, document.body);
