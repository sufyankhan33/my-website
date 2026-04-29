import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileEdit, CheckCircle, Search } from 'lucide-react';

const subjects = [
  { id: 1, name: 'Mathematics', class: '10th A', pending: 34, avg: 'N/A' },
  { id: 2, name: 'Physics', class: '10th A', pending: 0, avg: '78%' },
  { id: 3, name: 'English', class: '9th B', pending: 12, avg: '82%' },
];

const studentsList = [
  { id: 1, name: 'Alice Freeman', rollNo: '101' },
  { id: 2, name: 'Bobby Singer', rollNo: '102' },
  { id: 3, name: 'Charlie Dean', rollNo: '103' },
];

export default function Exams() {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [marks, setMarks] = useState({});
  const [saved, setSaved] = useState(false);
  const [studentSearch, setStudentSearch] = useState('');  

  const filteredStudents = studentsList.filter(s =>
    s.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
    s.rollNo.includes(studentSearch)
  );

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Exams & Grading</h1>
          <p className="text-gray-500 text-sm mt-1">Select a subject to enter marks.</p>
        </div>
      </div>

      {/* Subject Cards */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {subjects.map(sub => (
          <motion.div
            key={sub.id}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedSubject(sub)}
            className={`min-w-[240px] card p-4 cursor-pointer border-2 transition-all shrink-0 ${selectedSubject.id === sub.id ? 'border-primary-500 shadow-md' : 'border-transparent hover:border-gray-200'}`}
          >
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold text-lg text-gray-900">{sub.name}</span>
              <FileEdit className={`h-5 w-5 ${selectedSubject.id === sub.id ? 'text-primary-500' : 'text-gray-400'}`} />
            </div>
            <p className="text-sm font-semibold text-gray-500">{sub.class}</p>
            
            <div className="mt-4 flex items-center justify-between">
              {sub.pending > 0 ? (
                <span className="text-xs font-bold bg-warning/20 text-warning-dark px-2 py-1 rounded-full">{sub.pending} Pending</span>
              ) : (
                <span className="text-xs font-bold bg-success/20 text-success-dark px-2 py-1 rounded-full">Graded</span>
              )}
              <span className="text-sm font-bold text-gray-900">Avg: {sub.avg}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Marks Entry UI */}
      <div className="card p-0 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h2 className="font-bold text-gray-900">Marks Entry: {selectedSubject.name} ({selectedSubject.class})</h2>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input type="text" placeholder="Search student..." value={studentSearch} onChange={(e) => setStudentSearch(e.target.value)} className="input-field pl-8 h-9 text-sm w-48" />
            </div>
            <button onClick={handleSave} className={`btn-primary h-9 flex items-center gap-2 text-sm ${saved ? 'bg-success hover:bg-success text-white' : ''}`}>
              {saved ? <CheckCircle className="h-4 w-4" /> : <FileEdit className="h-4 w-4" />}
              {saved ? 'Saved' : 'Save Marks'}
            </button>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          <div className="flex p-4 bg-gray-50 text-xs font-bold text-gray-500 uppercase">
            <div className="w-1/2">Student</div>
            <div className="w-1/4 text-center">Marks (out of 100)</div>
            <div className="w-1/4 text-right">Preview Grade</div>
          </div>
          {filteredStudents.map(student => {
            const currentMark = marks[student.id] || '';
            const numMark = parseInt(currentMark);
            let grade = '-';
            if (currentMark !== '') {
              if (numMark >= 90) grade = 'A+';
              else if (numMark >= 80) grade = 'A';
              else if (numMark >= 70) grade = 'B';
              else if (numMark >= 60) grade = 'C';
              else grade = 'F';
            }

            return (
              <div key={student.id} className="flex p-4 items-center hover:bg-gray-50/50 transition-colors">
                <div className="w-1/2 flex items-center gap-3">
                  <div className="h-8 w-8 bg-primary-100 text-primary-700 font-bold rounded-full flex justify-center items-center text-sm">
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-900">{student.name}</p>
                    <p className="text-xs text-gray-500">{student.rollNo}</p>
                  </div>
                </div>
                <div className="w-1/4 flex justify-center">
                  <input 
                    type="number" 
                    max="100" 
                    min="0"
                    placeholder="--"
                    value={currentMark}
                    onChange={(e) => setMarks({...marks, [student.id]: e.target.value})}
                    className="w-16 h-10 border border-gray-200 rounded-lg text-center font-bold text-gray-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  />
                </div>
                <div className="w-1/4 text-right">
                  <span className={`font-black text-lg ${
                    grade === 'A+' || grade === 'A' ? 'text-success-dark' : 
                    grade === 'F' ? 'text-danger-dark' : 
                    grade === '-' ? 'text-gray-300' : 'text-warning-dark'
                  }`}>
                    {grade}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
