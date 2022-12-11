import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Blog from '../../pages/Blog'
import Support from '../../pages/Support'
import NotFound from '../../pages/NotFound'

const Navpage = () => {
  return (
    <React.Fragment>
        <Routes>
          {/* Load Pages when route path is this */}
          
          {/* root route */}
          <Route path="/" element={<Home />}/>
          {/* replace this line of code (↓) with this (↑) if deployed with own domain*/}
          {/* <Route path="/landing-page" element={<Home />}/> */}
          <Route path="/about" element={<About />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/support" element={<Support />}/>
          <Route path="/404" element={<NotFound />}/>
        </Routes>
    </React.Fragment>
  )
}

export default Navpage