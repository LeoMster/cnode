import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'
import { HashRouter as Router } from 'react-router-dom'
import '../css/App.css'

const App = () => {
  return (
    <Router basename='/'>
      <div>
        {/* 导航条 */}
        <Navbar />

        {/* 内容 */}
        <Content />

        {/* 尾部 */}
        <Footer />
      </div>
    </Router>
  );
}

export default App
