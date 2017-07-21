import React, { Component } from 'react';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import History from './components/history/History';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      historyOpen: false,
    }

    // this only needs to happen once. Percolates down into all sub-components
    injectTapEventPlugin();

    // TODO: get theme colours from SMF
    const SFPrimaryBlue = '#0087b1';
    const SFMutedBlue = '#556991';
    const SFGrey = '#9b8f8b';

    this.muiTheme = getMuiTheme({
      palette: {
        primary1Color: SFPrimaryBlue,
        primary2Color: SFMutedBlue,
        primary3Color: SFGrey,
        accent1Color: deepOrange500,

      },
    });
  }

  handleRecent() {
    this.setState({
      historyOpen: !this.state.historyOpen,
    });
  }

  componentDidMount() {

    // sample AJAX request to test local dev proxy
    // TODO: replace with Fetch polyfill
    // or should we drop in an upload plugin?
    $.ajax({
      url: 'service.php',
      success: (response) => {
        console.log(response);
      }
    });
  }


  render() {
    return (
    <MuiThemeProvider muiTheme={getMuiTheme(this.muiTheme)}>
      <div className="app">
        <Header/>
        <div className="container full-width pad-all-20">

        </div>
        <History
          open={this.state.historyOpen}
          handleRecent={this.handleRecent.bind(this)}
        />
        <Footer
          handleRecent={this.handleRecent.bind(this)}
        />
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
