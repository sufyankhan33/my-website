// Shared dummy data for the application

export const classesData = [
  { 
    id: 1, 
    name: '10th A', 
    teacher: 'Mr. John Keating', 
    type: 'Science',
    timetable: [
      { time: '08:00 AM', subject: 'Mathematics' },
      { time: '09:00 AM', subject: 'Physics' },
      { time: '10:15 AM', subject: 'Chemistry' },
    ]
  },
  { 
    id: 2, 
    name: '10th B', 
    teacher: 'Ms. Katherine Watson', 
    type: 'Arts',
    timetable: [
      { time: '08:00 AM', subject: 'Literature' },
      { time: '09:00 AM', subject: 'History' },
      { time: '10:15 AM', subject: 'Geography' },
    ]
  },
  { 
    id: 3, 
    name: '11th Sci', 
    teacher: 'Mr. Walter White', 
    type: 'Science',
    timetable: [
      { time: '08:00 AM', subject: 'Chemistry' },
      { time: '09:00 AM', subject: 'Biology' },
      { time: '10:15 AM', subject: 'Physics' },
    ]
  },
  { 
    id: 4, 
    name: '9th A', 
    teacher: 'Mrs. Valerie Frizzle', 
    type: 'General',
    timetable: [
      { time: '08:00 AM', subject: 'Science' },
      { time: '09:00 AM', subject: 'Mathematics' },
      { time: '10:15 AM', subject: 'English' },
    ]
  },
];

export const studentsData = [
  { id: 1, name: 'Alice Freeman', class: '10th A', rollNo: '101', status: 'Active', avatar: 'AF' },
  { id: 2, name: 'Evan Wright', class: '10th A', rollNo: '103', status: 'Active', avatar: 'EW' },
  { id: 3, name: 'George Smith', class: '10th A', rollNo: '104', status: 'Active', avatar: 'GS' },
  { id: 4, name: 'Bobby Singer', class: '10th B', rollNo: '102', status: 'Active', avatar: 'BS' },
  { id: 5, name: 'Fiona Gallagher', class: '10th B', rollNo: '105', status: 'Active', avatar: 'FG' },
  { id: 6, name: 'Charlie Dean', class: '9th A', rollNo: '901', status: 'Suspended', avatar: 'CD' },
  { id: 7, name: 'Diana Prince', class: '11th Sci', rollNo: '1105', status: 'Active', avatar: 'DP' },
  { id: 8, name: 'Bruce Wayne', class: '11th Sci', rollNo: '1106', status: 'Active', avatar: 'BW' },
  { id: 9, name: 'Clark Kent', class: '11th Sci', rollNo: '1107', status: 'Active', avatar: 'CK' },
  { id: 10, name: 'Barry Allen', class: '9th A', rollNo: '902', status: 'Active', avatar: 'BA' },
];
