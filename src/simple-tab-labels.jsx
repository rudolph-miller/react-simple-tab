/** @jsx React.DOM */

'use strict'

var React = require("react");
var Immutable = require("immutable");

var SimpleTabLabels = React.createClass({
    propTypes: {
        tabs: React.PropTypes.array.isRequired,
        style: React.PropTypes.object
    },
    
    render: function () {
        var style = Immutable.Map({
            listStyle: "none",
        }).merge(this.props.style).toJS();
        
        var labels = this.props.tabs.map(function (tab, index) {
            var style = Immutable.Map({
                display: "inline-block"
            }).merge(tab.style);
            if (this.props.currentTab == index)
                style = style.merge(tab.activeStyle);
            style = style.toJS();
            
            return (
                <SimpleTabLabel title={tab.title} key={index} index={index} onTabChange={this.props.onTabChange} style={style} />
            );
        }.bind(this));

        return (
            <ul style={style}>
                {labels}
            </ul>
        );
    }
});

var SimpleTabLabel = React.createClass({
    propTypes: {
        title: React.PropTypes.any.isRequired,
        index: React.PropTypes.number.isRequired
    },

    onClick: function (e) {
        this.props.onTabChange(this.props.index);
    },
    
    render: function () {
        return (
            <li style={this.props.style} onClick={this.onClick}>{this.props.title}</li>
        );
    }
});

module.exports = SimpleTabLabels;
