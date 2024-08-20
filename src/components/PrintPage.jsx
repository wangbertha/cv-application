import React from 'react'
import '../styles/PrintPage.css'

const PrintPage = ({ profileContents }) => {
    const { generalInfo, education, workExperience } = profileContents;
    const { firstName, lastName, email, phoneNumber, website } = generalInfo[0];

  return (
    <div className='print-mode'>
        <div className="general-info">
            <h1>{firstName.value} {lastName.value}</h1>
            <div className='contact'>
                <p>{phoneNumber.value} | {email.value} | <a href={website.value}>{website.value}</a></p>
            </div>
        </div>
        <hr />
        <h2>Education</h2>
        <div className='education'>
            {education.map((educationEntry) =>
                (<div key={educationEntry.meta.id}>
                    <div className="education-heading">
                        <h3>{educationEntry.schoolName.value}</h3>
                        <p className='graduation-year'>Graduation Year: {educationEntry.graduationYear.value}</p>
                    </div>
                    <p>{educationEntry.degree.value}, {educationEntry.major.value}</p>
                </div>)
            )}
        </div>
        <hr />
        <h2>Work Experience</h2>
        <div className="work-experience">
            {workExperience.map((workExperienceEntry) =>
                (<div key={workExperienceEntry.meta.id}>
                    <div className="work-experience-heading">
                        <div className='work-experience-heading-left'>
                            <h3>{workExperienceEntry.positionTitle.value}</h3>
                            <p>{workExperienceEntry.companyName.value}</p>
                        </div>
                        <div className="work-experience-dates">
                            <p>{workExperienceEntry.dateFrom.value} to {workExperienceEntry.dateTo.value}</p>
                        </div>
                    </div>
                    <p className='work-experience-responsibilities'>{workExperienceEntry.responsibilities.value}</p>
                </div>)
            )}
        </div>
        
    </div>
  )
}

export default PrintPage