import Section from './components/Section';
import PrintPage from './components/PrintPage';
import  { v4 as uuidv4 } from 'uuid';
import { entryStructures } from './assets/entryStructure';
import './App.css';
import { useState } from 'react';

function App() {
  const [profileContents, setProfileContents] = useState({
    generalInfo: [entryStructures.generalInfo],
    education: [entryStructures.education],
    workExperience: [entryStructures.workExperience]
  })
  const [printMode, setPrintMode] = useState(false)

  function updateEntries(type, updatedEntry) {
    let tempEntries = [...profileContents[type]];
    const index = tempEntries.findIndex((element) => element.meta.id===updatedEntry.meta.id);
    tempEntries[index] = JSON.parse(JSON.stringify(updatedEntry));
    const newProfileContents = JSON.parse(JSON.stringify(profileContents));
    newProfileContents[type] = tempEntries;
    setProfileContents(newProfileContents);
  }

  function handleEntryDelete(type, id) {
    let tempEntries = [...profileContents[type]];
    const newProfileContents = JSON.parse(JSON.stringify(profileContents));
    if (tempEntries.length===1) {
      let newEntry = JSON.parse(JSON.stringify(entryStructures[type]));
      newEntry.meta.id = uuidv4();
      newProfileContents[type] = [newEntry];
    }
    else {
      const newEntries = tempEntries.filter((element) => element.meta.id!==id);
      newProfileContents[type] = newEntries;
    }
    setProfileContents(newProfileContents);
  }

  function handleAddEntry(type) {
    const tempEntries = [...profileContents[type]];
    let newEntry = JSON.parse(JSON.stringify(entryStructures[type]));
    newEntry.meta.id = uuidv4();
    tempEntries.push(newEntry);
    const newProfileContents = JSON.parse(JSON.stringify(profileContents));
    newProfileContents[type] = tempEntries;
    setProfileContents(newProfileContents);
  }

  return (
    <>
      {!printMode
        ? <div className='input-mode'>
            <h1>CV Application</h1>
            <Section title='General Information' type='generalInfo' entries={profileContents.generalInfo} updateEntries={updateEntries} handleEntryDelete={handleEntryDelete} handleAddEntry={false} />
            <Section title='Education' type='education' entries={profileContents.education} updateEntries={updateEntries} handleEntryDelete={handleEntryDelete} handleAddEntry={handleAddEntry} />
            <Section title='Work Experience' type='workExperience' entries={profileContents.workExperience} updateEntries={updateEntries} handleEntryDelete={handleEntryDelete} handleAddEntry={handleAddEntry} />
            <div className="action-btns">
              <button onClick={() => setPrintMode(true)}>View Print Mode</button>
              <button onClick={window.print}>Print</button>
            </div>
            <a className='favicon-credits' href="https://www.flaticon.com/free-icons/portfolio" title="portfolio icons">Portfolio icons (favicon) created by Freepik - Flaticon</a>
          </div>
        : <div className='print-mode'>
            <PrintPage profileContents={profileContents} />
            <div className="action-btns">
              <button onClick={() => setPrintMode(false)}>Exit Print Mode</button>
            </div>
          </div>
      }
    </>
  )
}

export default App
