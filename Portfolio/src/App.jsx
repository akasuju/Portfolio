import React from 'react'
import Nav from './Pages/Nav.jsx'
import HomePage from './Pages/HomePage.jsx'
import AboutMe from './Pages/AboutMe.jsx'
import ProjectPage from './Pages/ProjectPage.jsx'
import ContactPage from './Pages/ContactPage.jsx'
import Footer from './Pages/Footer.jsx'



const App = () => {
  return (
    <div>
 <Nav />
  <HomePage />
  <AboutMe />
  <ProjectPage/>
<ContactPage/>
<Footer/>
  
 </div>
  )
}

export default App