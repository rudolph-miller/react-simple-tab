/** @jsx React.DOM */

'use strict'

var React = require("react");
var Immutable = require("immutable");

var SimpleTabLabel = require("./simple-tab-label");

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
        var labels = this.props.tabs.map(function (tab, index) {
            var style = Immutable.Map({
                float: "left"
            }).merge(tab.style).toJS();
            
            return (
                <SimpleTabLabel title={tab.title} key={index} index={index} onTabChange={this.onTabChange} style={style} />
            );
        }.bind(this));
        return (
            <div style={this.props.style}>
                {labels}
                <div style={{clear: "both"}} />
                {this.props.tabs[this.state.currentTab].content}
            </div>
        );
    }
});

module.exports = SimpleTab;
