import React, { useState } from 'react'
import  { v4 as uuidv4 } from 'uuid';
import Entry from './Entry';

const Section = ({ infoStructure, title }) => {
    const initialInfo = {...infoStructure};
    const [info, setInfo] = useState([initialInfo]);

    function handleSectionSave(submittedInfo) {
      const tempInfo = [...info];
      const index = tempInfo.findIndex((element) => element.meta.id===submittedInfo.meta.id);
      tempInfo[index] = JSON.parse(JSON.stringify(submittedInfo));
      setInfo(tempInfo);
    }

    function addEntry() {
      const tempInfo = [...info];
      const newInfo = JSON.parse(JSON.stringify(initialInfo));
      newInfo.meta.id = uuidv4();
      tempInfo.push(newInfo);
      setInfo(tempInfo);
    }

    function handleSectionDelete(id) {
      if (info.length===1) {
        setInfo([initialInfo]);
      }
      else {
        const tempInfo = info.filter((element) => element.meta.id!==id);
        setInfo(tempInfo);
      }
    }

  return (
    <div className='section'>
        <h2>{title}</h2>
        {info.map((entry) => 
          <div key={entry.meta.id}>
            <Entry entry={entry} handleSectionSave={handleSectionSave} handleSectionDelete={handleSectionDelete} />
          </div>
        )}
        <button onClick={addEntry}>+ {title}</button>
    </div>
  )
}

export default Section