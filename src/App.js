import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store, history } from './redux/store'

import PublicRoutes from './router'
import './App.css'

window.addEventListener(
  'message',
  e => {
    if (e.isTrusted === true) {
      const { email, token } = JSON.parse(e.data)

      if (localStorage.getItem('id_token') === null || localStorage.getItem('user_email') === null) {
        localStorage.setItem('id_token', token)
        localStorage.setItem('user_email', email)

        window.location.href = window.location.href
      }
    }
  },
  false
)

if (localStorage.getItem('id_token') !== null && localStorage.getItem('user_email') !== null) {
  window.parent.postMessage(
    JSON.stringify({
      loaded: true
    }),
    'https://staging.esteemthrive.com'
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <PublicRoutes history={history} />
        </Provider>
      </div>
    )
  }
}

export default App
