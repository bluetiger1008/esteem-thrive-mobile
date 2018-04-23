import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store, history } from './redux/store'

import PublicRoutes from './router'
import './App.css'

if (localStorage.getItem('last_visit') !== null) {
  if (Date.now() - localStorage.getItem('last_visit') > 1800000) {
    localStorage.removeItem('id_token')
    localStorage.removeItem('user_email')
  }
}
localStorage.setItem('last_visit', Date.now())

window.addEventListener(
  'message',
  e => {
    if (e.isTrusted === true && e.origin === 'https://esteemthrive.com') {
      const { email, token } = JSON.parse(e.data)

      if (email !== localStorage.getItem('user_email') || token !== localStorage.getItem('id_token')) {
        localStorage.setItem('user_email', email)
        localStorage.setItem('id_token', token)

        window.location.href = window.location.href
      }
    }
  },
  false
)

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
