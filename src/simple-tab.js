import { Component, PropTypes } from 'react';
import SimpleTabLabels from './simple-tab-labels';

export default class SimpleTab extends Component {
  static propTypes = {
    tabs: PropTypes.array.isRequired,
    style: PropTypes.object,
    labelListStyle: PropTypes.object
  }

  constructor() {
    super()

    this.state = {
      currentTab: 0
    };
  }

  onTabChange(index) {
    this.setState({currentTab: index});
  }

  render() {
    const tabContent = this.props.tabs.length > 0 ? this.props.tabs[this.state.currentTab].content : null;

    return (
      <div style={this.props.style}>
        <SimpleTabLabels
          tabs={this.props.tabs}
          style={this.props.labelListStyle}
          onTabChange={this.onTabChange.bind(this)}
          currentTab={this.state.currentTab} />
        {tabContent}
      </div>
    );
  }
}

module.exports = SimpleTab;
