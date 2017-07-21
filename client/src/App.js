import React, { Component } from 'react';
import $ from 'jquery';

class App extends Component {

  componentDidMount() {

    // sample AJAX request to test local dev proxy
    // TODO: replace with Fetch polyfill
    $.ajax({
      url: 'service.php',
      success: (response) => {
        console.log(response);
      }
    });
  }


  render() {
    return (
      <div className="app">
        Sample app.
      </div>
    );
  }
}

export default App;
