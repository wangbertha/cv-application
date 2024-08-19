import GeneralInfo from './components/GeneralInfo';
import Section from './components/Section';
import PrintPage from './components/PrintPage';
import { educationInfoStructure, workExperienceInfoStructure } from './assets/infoStructure';
import './App.css';
import { useState } from 'react';

function App() {
  const [printMode, setPrintMode] = useState(false)

  return (
    <>
      {!printMode
        ? <div className='input-mode'>
            <h1>CV Application</h1>
            <GeneralInfo />
            <Section infoStructure={educationInfoStructure} title='Education' />
            <Section infoStructure={workExperienceInfoStructure} title='Work Experience' />
            <div className="action-btns">
              <button onClick={() => setPrintMode(true)}>View Print Mode</button>
              <button onClick={window.print}>Print</button>
            </div>
            <a className='favicon-credits' href="https://www.flaticon.com/free-icons/portfolio" title="portfolio icons">Portfolio icons (favicon) created by Freepik - Flaticon</a>
          </div>
        : <div className='print-mode'>
            <PrintPage />
            <div className="action-btns">
              <button onClick={() => setPrintMode(false)}>Exit Print Mode</button>
            </div>
          </div>
      }
    </>
  )
}

export default App
