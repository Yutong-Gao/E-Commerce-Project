import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import {Home,SingleProduct,Cart,Checkout,Error,About,Products,PrivateRoute} from './pages'


function App() {
  return (
   <Router>
    <Navbar />
    <Sidebar />
    <Switch>
      <Route exact path='/'> 
        <Home />
      </Route>
      <Route exact path='/about'> 
        <About />
      </Route>
      <Route exact path='/Cart'> 
        <Cart />
      </Route>
      <Route exact path='/Products'> 
        <Products />
      </Route>
      <Route exact path="/Products/:id" children={<SingleProduct />} /> 
      <Route exact path='/Checkout'> 
        <Checkout />
      </Route>
      <Route exact path='*'> 
        <Error />
      </Route>
    </Switch>
    <Footer />
   </Router>
  )

}

export default App