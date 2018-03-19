import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store, history } from './redux/store';

import PublicRoutes from './router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	      <Provider store={store}>
	        <PublicRoutes history={history} />
	      </Provider>
      </div>
    );
  }
}

export default App;
