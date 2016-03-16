import { Component, PropTypes } from 'react';

class SimpleTabLabels extends Component {
  static propTypes = {
    tabs: PropTypes.array.isRequired,
    style: PropTypes.object
  }

  render() {
    const style = Object.assign({}, {
      listStyle: 'none'
    }, this.props.style)

    const labels = this.props.tabs.map(((tab, index) => {
      let style = Object.assign({}, {
        display: "inline-block"
      }, tab.style);

      if (this.props.currentTab == index)
        style = Object.assign({}, style, tab.activeStyle);

      return (
        <SimpleTabLabel
          title={tab.title}
          key={index}
          index={index}
          onTabChange={this.props.onTabChange}
          style={style} />
      );
    }).bind(this));

    return (
      <ul style={style}>
        {labels}
      </ul>
    );
  }
}

export default class SimpleTabLabel extends Component {
  static propTypes = {
    title: PropTypes.any.isRequired,
    index: PropTypes.number.isRequired
  }

  onClick(e) {
    this.props.onTabChange(this.props.index);
  }

  render() {
    return (
      <li
        style={this.props.style}
        onClick={this.onClick.bind(this)} >
        {this.props.title}
      </li>
    );
  }
}

module.exports = SimpleTabLabels;
