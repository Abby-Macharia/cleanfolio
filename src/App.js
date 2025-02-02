import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skilled In from './components/Skilled In/Skilled In'
import Skilled In from './components/Blogs/Blogs'
import Skilled In from './components/Certifications/Certifications'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skilled In />
        <Contact />
		 <Blogs />
		  <Certifications />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
