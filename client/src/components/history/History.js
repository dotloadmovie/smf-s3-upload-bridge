import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';

class History extends Component {

  handleCloseClick() {
    this.props.handleRecent();
  }

  render() {
    return (
      <Drawer
        docked={false}
        width={280}
        open={this.props.open}
        onRequestChange={this.handleCloseClick.bind(this)}
      />
    );
  }

}

export default History;
