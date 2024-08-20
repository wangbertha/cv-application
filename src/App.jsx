import Section from './components/Section';
import PrintPage from './components/PrintPage';
import  { v4 as uuidv4 } from 'uuid';
import { generalInfoEntryStructure, educationEntryStructure, workExperienceEntryStructure } from './assets/entryStructure';
import './App.css';
import { useState } from 'react';

function App() {
  const [generalInfo, setGeneralInfo] = useState(generalInfoEntryStructure);
  const [educationEntries, setEducationEntries] = useState([educationEntryStructure]);
  const [workExperienceEntries, setWorkExperienceEntries] = useState([workExperienceEntryStructure]);
  const [printMode, setPrintMode] = useState(false)

  function updateGeneralInfo(entry) {
    setGeneralInfo(entry)
  }

  function handleGeneralInfoDelete() {
    let tempEntry = JSON.parse(JSON.stringify(generalInfoEntryStructure));
    tempEntry.meta.id = uuidv4();
    setGeneralInfo(tempEntry)
  }

  function updateEducationEntries(updatedEntry) {
    const tempEntries = [...educationEntries];
    const index = tempEntries.findIndex((element) => element.meta.id===updatedEntry.meta.id);
    tempEntries[index] = JSON.parse(JSON.stringify(updatedEntry));
    setEducationEntries(tempEntries);
  }

  function handleEducationEntryDelete(id) {
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

  function handleAddEducationEntry() {
    const tempEntries = [...educationEntries];
    const newEntries = JSON.parse(JSON.stringify(educationEntryStructure));
    newEntries.meta.id = uuidv4();
    tempEntries.push(newEntries);
    setEducationEntries(tempEntries);
  }

  function updateWorkExperienceEntries(updatedEntry) {
    const tempEntries = [...workExperienceEntries];
    const index = tempEntries.findIndex((element) => element.meta.id===updatedEntry.meta.id);
    tempEntries[index] = JSON.parse(JSON.stringify(updatedEntry));
    setWorkExperienceEntries(tempEntries);
  }

  function handleWorkExperienceEntryDelete(id) {
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

  function handleAddWorkExperienceEntry() {
    const tempEntries = [...workExperienceEntries];
    const newEntries = JSON.parse(JSON.stringify(workExperienceEntryStructure));
    newEntries.meta.id = uuidv4();
    tempEntries.push(newEntries);
    setWorkExperienceEntries(tempEntries);
  }

  return (
    <>
      {!printMode
        ? <div className='input-mode'>
            <h1>CV Application</h1>
            <Section title='General Information' entries={[generalInfo]} updateEntries={updateGeneralInfo} handleEntryDelete={handleGeneralInfoDelete} handleAddEntry={false} />
            <Section title='Education' entries={educationEntries} updateEntries={updateEducationEntries} handleEntryDelete={handleEducationEntryDelete} handleAddEntry={handleAddEducationEntry} />
            <Section title='Work Experience' entries={workExperienceEntries} updateEntries={updateWorkExperienceEntries} handleEntryDelete={handleWorkExperienceEntryDelete} handleAddEntry={handleAddWorkExperienceEntry} />
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
