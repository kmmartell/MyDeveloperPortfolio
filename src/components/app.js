/*
*  Author: Kayla Martell
*  Initial launch - render layout of entire first view
*/

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopNavigation from './templates/TopNavigation';
import Portfolio from './Portfolio';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <TopNavigation title="K.M. Martell" />
          <Portfolio />
        </div>
      </MuiThemeProvider>
    );
  }
}
