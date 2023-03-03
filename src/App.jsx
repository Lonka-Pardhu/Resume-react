import Head from './components/Header'
import Edu from '../src/components/Education'
import Skill from './components/Skills'
import Project from '../src/components/Projects'
import Footer from './components/Footer'
import Data from './components/Data'
export default function App() {

  return (
    <div className='main-container'>
      <Head data={Data} />
      <Edu data={Data} />
      <Skill data={Data} />
      <Project data={Data} />
      <Footer data={Data} />
    </div>
  )
}


