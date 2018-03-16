import React, { Component } from 'react';

import history from './utils/history';
import PublicRoutes from './router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PublicRoutes history={history} />
      </div>
    );
  }
}

export default App;
