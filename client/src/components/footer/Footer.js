import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import History from 'material-ui/svg-icons/action/history';


class Footer extends Component {

  handleRecentTap() {
    if (this.props.handleRecent) {
      this.props.handleRecent();
    }
  }

  render() {
    return (
      <Paper style={{position: 'fixed', bottom: '0', width: '100%'}}>
        <BottomNavigation>
          <BottomNavigationItem
            label="Recent"
            icon={<History />}
            onTouchTap={
              this.handleRecentTap.bind(this)
            }
          />
        </BottomNavigation>
      </Paper>
    );
  }

}

export default Footer;
