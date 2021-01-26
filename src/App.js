import { createBrowserHistory } from 'history'
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Layout from './container/Layout'
import { GlobalStyles } from './GlobalStyles/GlobalStyles'
import Home from './pages/Home'
import ScrollTop from './components/ScrollTop'
import './App.css'

const App = () => {
  const history = createBrowserHistory()
  return (
 <>
<Router history={history}>

  <Layout>
  <ScrollTop/>
  <GlobalStyles/>

    <Switch>
      <Route component={Home} path='/' exact/>
    </Switch>
  </Layout>
</Router>
 </>
  )
}

export default App
