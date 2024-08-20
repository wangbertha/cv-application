import Section from './components/Section';
import PrintPage from './components/PrintPage';
import  { v4 as uuidv4 } from 'uuid';
import { generalInfoEntryStructure, educationEntryStructure, workExperienceEntryStructure } from './assets/entryStructure';
import './App.css';
import { useState } from 'react';

function App() {
  const [generalInfo, setGeneralInfo] = useState([generalInfoEntryStructure]);
  const [educationEntries, setEducationEntries] = useState([educationEntryStructure]);
  const [workExperienceEntries, setWorkExperienceEntries] = useState([workExperienceEntryStructure]);
  const [printMode, setPrintMode] = useState(false)

  function updateEntries(type, updatedEntry) {
    let tempEntries;
    if (type==='generalInfo') {
      tempEntries = [...generalInfo];
    }
    else if (type==='education') {
      tempEntries = [...educationEntries];
    }
    else {
      tempEntries = [...workExperienceEntries]
    }
    const index = tempEntries.findIndex((element) => element.meta.id===updatedEntry.meta.id);
    tempEntries[index] = JSON.parse(JSON.stringify(updatedEntry));
    if (type==='generalInfo') {
      setGeneralInfo(tempEntries);
    }
    else if (type==='education') {
      setEducationEntries(tempEntries);
    }
    else {
      setWorkExperienceEntries(tempEntries);
    }
  }

  function handleEntryDelete(type, id) {
    if (type==='generalInfo') {
      let tempEntry = JSON.parse(JSON.stringify(generalInfoEntryStructure));
      tempEntry.meta.id = uuidv4();
      setGeneralInfo([tempEntry])
    }
    else if (type==='education') {
      if (educationEntries.length===1) {
        let tempEntry = JSON.parse(JSON.stringify(educationEntryStructure));
        tempEntry.meta.id = uuidv4();
        setEducationEntries([tempEntry])
      }
      else {
        const tempEntries = educationEntries.filter((element) => element.meta.id!==id);
        setEducationEntries(tempEntries);
      }
    }
    else {
      if (workExperienceEntries.length===1) {
        let tempEntry = JSON.parse(JSON.stringify(workExperienceEntryStructure));
        tempEntry.meta.id = uuidv4();
        setWorkExperienceEntries([tempEntry])
      }
      else {
        const tempEntries = workExperienceEntries.filter((element) => element.meta.id!==id);
        setWorkExperienceEntries(tempEntries);
      }
    }

  }

  function handleAddEntry(type) {
    if (type==='education') {
      const tempEntries = [...educationEntries];
      const newEntries = JSON.parse(JSON.stringify(educationEntryStructure));
      newEntries.meta.id = uuidv4();
      tempEntries.push(newEntries);
      setEducationEntries(tempEntries);
    }
    else {
      const tempEntries = [...workExperienceEntries];
      const newEntries = JSON.parse(JSON.stringify(workExperienceEntryStructure));
      newEntries.meta.id = uuidv4();
      tempEntries.push(newEntries);
      setWorkExperienceEntries(tempEntries);
    }
  }

  return (
    <>
      {!printMode
        ? <div className='input-mode'>
            <h1>CV Application</h1>
            <Section title='General Information' type='generalInfo' entries={generalInfo} updateEntries={updateEntries} handleEntryDelete={handleEntryDelete} handleAddEntry={false} />
            <Section title='Education' type='education' entries={educationEntries} updateEntries={updateEntries} handleEntryDelete={handleEntryDelete} handleAddEntry={handleAddEntry} />
            <Section title='Work Experience' type='workExperience' entries={workExperienceEntries} updateEntries={updateEntries} handleEntryDelete={handleEntryDelete} handleAddEntry={handleAddEntry} />
            <div className="action-btns">
              <button onClick={() => setPrintMode(true)}>View Print Mode</button>
              <button onClick={window.print}>Print</button>
            </div>
            <a className='favicon-credits' href="https://www.flaticon.com/free-icons/portfolio" title="portfolio icons">Portfolio icons (favicon) created by Freepik - Flaticon</a>
          </div>
        : <div className='print-mode'>
            <PrintPage generalInfo={generalInfo} education={educationEntries} workExperience={workExperienceEntries} />
            <div className="action-btns">
              <button onClick={() => setPrintMode(false)}>Exit Print Mode</button>
            </div>
          </div>
      }
    </>
  )
}

export default App
