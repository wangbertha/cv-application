import GeneralInfo from './components/GeneralInfo';
import Section from './components/Section';
import { educationInfoStructure, workExperienceInfoStructure } from './assets/infoStructure';
import './App.css';

function App() {

  return (
    <>
      <h1>CV Application</h1>
      <GeneralInfo />
      <Section infoStructure={educationInfoStructure} title='Education' />
      <Section infoStructure={workExperienceInfoStructure} title='Work Experience' />
      <button onClick={window.print}>Print</button>
      <a className='favicon-credits' href="https://www.flaticon.com/free-icons/portfolio" title="portfolio icons">Portfolio icons created by Freepik - Flaticon</a>
    </>
  )
}

export default App
