import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { NoMatch } from './components/NoMatch/NoMatch'
import { App } from './App'
import AppState from './context/AppState'
import './resources/index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const app = (
  <React.StrictMode>
    <AppState>
      <Router>
        <Switch>
          <Route exact path='/'>
            <App />
          </Route>
          <Route path=''>
            <Redirect to='/' />
          </Route>
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </AppState>
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root'))
