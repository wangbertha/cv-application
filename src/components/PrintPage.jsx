import React from 'react'

const PrintPage = ({ generalInfo, education, workExperience }) => {
  return (
    <div>
        {generalInfo.toString()}
        {education.toString()}
        {workExperience.toString()}
    </div>
  )
}

export default PrintPage