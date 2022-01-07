import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Homescreen from './screens/Homescreen'
import AboutUs from './screens/AboutUs.js'
import Blog from './screens/Blog'
import ContactUs from './screens/ContactUs'

const App = () => {
  return (
    <Router>
      <div className='flex flex-col h-screen'>
        <Header />
        <main className='flex-grow'>
          <Route path='/' component={Homescreen} exact />
          <Route path='/about_us' component={AboutUs} exact />
          <Route path='/blog' component={Blog} exact />
          <Route path='/contact_us' component={ContactUs} exact />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
