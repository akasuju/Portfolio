import React from 'react'
import Nav from './Pages/Nav.jsx'
import HomePage from './Pages/HomePage.jsx'
import AboutMe from './Pages/AboutMe.jsx'
import ProjectPage from './Pages/ProjectPage.jsx'
import Options from './Pages/Options.jsx'


const App = () => {
  return (
    <div>
 <Nav />
  <HomePage />
  <AboutMe />
  <ProjectPage/>
 </div>
  )
}

export default App