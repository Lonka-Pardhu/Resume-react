import Head from './components/Header'
import Socials from './components/Socials'
import Summary from './components/Summary'
import Skills from './components/Skills'
import Projects from '../src/components/Projects'
import Education from '../src/components/Education'

export default function App() {

  return (
    <div className='container'>
      <div className="main">
        <Head />
        <Socials />
        <Summary />
        <Skills />
        <Projects />
        <Education />
      </div>
    </div>
  )
}


