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
    </>
  )
}

export default App
