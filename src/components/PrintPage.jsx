import React from 'react'
import '../styles/PrintPage.css'

const PrintPage = ({ profileContents }) => {
    const { generalInfo, education, workExperience } = profileContents;
    const { firstName, lastName, email, phoneNumber } = generalInfo[0];

  return (
    <div className='print-mode'>
        <h1>{firstName.value} {lastName.value}</h1>
        <div className='contact'>
            <p>{phoneNumber.value} | {email.value}</p>
        </div>
        <hr />
        <div className='education'>
            <h2>Education</h2>
            {education.map((educationEntry) =>
                (<div key={educationEntry.meta.id}>
                    <h3>{educationEntry.schoolName.value}</h3>
                    <p>{educationEntry.graduationYear.value}</p>
                    <p>{educationEntry.degree.value}</p>
                    <p>{educationEntry.major.value}</p>
                </div>)
            )}
        </div>
        <hr />
        <div className="work-experience">
            <h2>Work Experience</h2>
            {workExperience.map((workExperienceEntry) =>
                (<div key={workExperienceEntry.meta.id}>
                    <h3>{workExperienceEntry.positionTitle.value}</h3>
                    <p>{workExperienceEntry.companyName.value}</p>
                    <p>{workExperienceEntry.dateFrom.value}</p>
                    <p>{workExperienceEntry.dateTo.value}</p>
                    <p>{workExperienceEntry.responsibilities.value}</p>
                </div>)
            )}
        </div>
        {console.log(profileContents)}
    </div>
  )
}

export default PrintPage