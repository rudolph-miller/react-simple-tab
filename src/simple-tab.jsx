/** @jsx React.DOM */

'use strict'

var React = require("react");
var Immutable = require("immutable");

var SimpleTabLabels = require("./simple-tab-labels");

var SimpleTab = React.createClass({
    propTypes: {
        tabs: React.PropTypes.array.isRequired,
        style: React.PropTypes.object
    },

    getInitialState: function () {
        return {
            currentTab: 0
        };
    },

    onTabChange: function (index) {
        this.setState({currentTab: index});
    },
    
    render: function () {
        return (
            <div style={this.props.style}>
                <SimpleTabLabels tabs={this.props.tabs} style={this.props.labelListStyle} onTabChange={this.onTabChange} currentTab={this.state.currentTab} />
                {this.props.tabs[this.state.currentTab].content}
            </div>
        );
    }
});

module.exports = SimpleTab;
