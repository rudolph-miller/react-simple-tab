/** @jsx React.DOM */

'use strict'
var React = require("react");

var SimpleTab = require("../src/simple-tab");

var SimpleTabSample = React.createClass({
    render: function () {
        var style = {
        };

        var tabs = [
            { title: "Tab 1", content: <div>Content 1</div>},
            { title: "Tab 2", content: <div>Content 2</div>},
            { title: "Tab 3", content: <div>Content 3</div>}
        ];

        return (
            <SimpleTab tabs={tabs} style={style} />
        );
    }
});


React.render(<SimpleTabSample />, document.body);
