import  { v4 as uuidv4 } from 'uuid';

const educationInfoStructure = {
    meta: {
    id: uuidv4(),
    isEditing: true,
    },
    schoolName: {
    label: 'School',
    type: 'text',
    value: ''
    },
    degree: {
    label: 'Degree',
    type: 'text',
    value: ''
    },
    major: {
    label: 'Major',
    type: 'text',
    value: ''
    },
    graduationYear: {
    label: 'Graduation Year',
    type: 'number',
    value: ''
    }
}

const workExperienceInfoStructure = {
    meta: {
    id: uuidv4(),
    isEditing: true,
    },
    companyName: {
    label: 'Company Name',
    type: 'text',
    value: ''
    },
    positionTitle: {
    label: 'Position Title',
    type: 'text',
    value: ''
    },
    responsibilities: {
    label: 'Responsibilities',
    type: 'text',
    value: ''
    },
    dateFrom: {
    label: 'Date From',
    type: 'date',
    value: ''
    },
    dateTo: {
    label: 'Date To',
    type: 'date',
    value: ''
    }
}

export { educationInfoStructure, workExperienceInfoStructure };