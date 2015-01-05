/** @jsx React.DOM */

'use strict'

var React = require("react");

var SimpleTabLabel = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        index: React.PropTypes.number.isRequired
    },
    
    onClick: function (e) {
        this.props.onTabChange(this.props.index);
    },
    
    render: function () {
        return (
            <div onClick={this.onClick} style={this.props.style}>{this.props.title}</div>
        );
    }
});

module.exports = SimpleTabLabel;
