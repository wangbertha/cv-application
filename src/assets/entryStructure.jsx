import  { v4 as uuidv4 } from 'uuid';

let generalInfoEntryStructure = {
    meta: {
    id: uuidv4(),
    },
    firstName: {
    label: 'First Name',
    type: 'text',
    value: ''
    },
    lastName: {
    label: 'Last Name',
    type: 'text',
    value: ''
    },
    email: {
    label: 'Email',
    type: 'email',
    value: ''
    },
    phoneNumber: {
    label: 'Phone Number',
    type: 'tel',
    value: ''
    }
}

let educationEntryStructure = {
    meta: {
    id: uuidv4(),
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

let workExperienceEntryStructure = {
    meta: {
    id: uuidv4(),
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

export { generalInfoEntryStructure, educationEntryStructure, workExperienceEntryStructure };