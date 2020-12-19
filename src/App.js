import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductOverview from './components/Product'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path='/' component={Navbar} exact/>
      <Route component={Hero} />
      <Route component={ProductOverview} exact/>
    </Router>
  );
}

export default App;
