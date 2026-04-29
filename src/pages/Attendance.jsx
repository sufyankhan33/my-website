<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, CheckCircle, XCircle, ChevronDown } from 'lucide-react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { studentsData, classesData } from '../data/dummyData';

export default function Attendance() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const classFilter = searchParams.get('class') || classesData[0].name;

  const currentStudents = studentsData.filter(s => s.class === classFilter);

  const [attendance, setAttendance] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  // Initialize attendance when class changes
  useEffect(() => {
    const initialAttendance = currentStudents.reduce((acc, student) => ({ ...acc, [student.id]: 'Present' }), {});
    setAttendance(initialAttendance);
  }, [classFilter, currentStudents.length]);

=======
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, CheckCircle, XCircle } from 'lucide-react';

const studentsList = [
  { id: 1, name: 'Alice Freeman', rollNo: '101' },
  { id: 2, name: 'Bobby Singer', rollNo: '102' },
  { id: 3, name: 'Charlie Dean', rollNo: '103' },
  { id: 4, name: 'Diana Prince', rollNo: '104' },
  { id: 5, name: 'Evan Wright', rollNo: '105' },
];

export default function Attendance() {
  const [attendance, setAttendance] = useState(
    studentsList.reduce((acc, student) => ({ ...acc, [student.id]: 'Present' }), {})
  );
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
  const toggleStatus = (id, status) => {
    setAttendance(prev => ({ ...prev, [id]: status }));
    setSaved(false);
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 1000);
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Mark Attendance</h1>
<<<<<<< HEAD
          <div className="flex items-center gap-2 mt-2">
            <div className="relative">
              <select 
                value={classFilter}
                onChange={(e) => {
                  searchParams.set('class', e.target.value);
                  setSearchParams(searchParams);
                }}
                className="appearance-none bg-primary-50 text-primary-700 font-bold px-4 py-1.5 pr-8 rounded-lg outline-none cursor-pointer border border-primary-100"
              >
                {classesData.map(c => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
              <ChevronDown className="h-4 w-4 text-primary-600 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <span className="text-gray-400">•</span>
            <p className="text-gray-500 text-sm">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
=======
          <p className="text-gray-500 text-sm mt-1">Class 10th A • {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
        </div>
        
        <div className="flex gap-4 items-center">
          <input type="date" className="input-field rounded-lg h-10 w-40" defaultValue={new Date().toISOString().split('T')[0]} />
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSave}
            disabled={isSaving}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl font-bold text-white transition-all duration-300 ${
              saved ? 'bg-success hover:bg-success-dark' : 'bg-primary-600 hover:bg-primary-700'
            }`}
          >
            {isSaving ? (
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full" />
            ) : saved ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <Save className="h-5 w-5" />
            )}
            {isSaving ? 'Saving...' : saved ? 'Saved!' : 'Save Data'}
          </motion.button>
        </div>
      </div>

      <div className="card p-0 overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center text-sm font-bold text-gray-500 uppercase tracking-wider">
          <div className="w-1/2">Student</div>
          <div className="w-1/2 text-right">Status</div>
        </div>
        
        <div className="divide-y divide-gray-100">
<<<<<<< HEAD
          {currentStudents.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No students found in this class.</div>
          ) : currentStudents.map((student) => {
=======
          {studentsList.map((student) => {
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
            const status = attendance[student.id];
            
            return (
              <div key={student.id} className="flex justify-between items-center px-6 py-4 hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-gray-100 text-gray-600 font-bold rounded-full flex items-center justify-center">
<<<<<<< HEAD
                    {student.avatar || student.name.charAt(0)}
                  </div>
                  <div>
                    <Link to={`/students/${student.id}`} state={{ student }} className="font-bold text-gray-900 hover:text-primary-600 transition-colors">
                      {student.name}
                    </Link>
=======
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{student.name}</p>
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
                    <p className="text-xs text-gray-500 font-medium tracking-wide">Roll: {student.rollNo}</p>
                  </div>
                </div>

                <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
                  <button 
                    onClick={() => toggleStatus(student.id, 'Present')}
                    className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
                      status === 'Present' 
                        ? 'bg-white text-success-dark shadow-sm' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <CheckCircle className={`h-4 w-4 ${status === 'Present' ? 'text-success' : 'opacity-50'}`} /> Present
                  </button>
                  <button 
                    onClick={() => toggleStatus(student.id, 'Absent')}
                    className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
                      status === 'Absent' 
                        ? 'bg-white text-danger-dark shadow-sm' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <XCircle className={`h-4 w-4 ${status === 'Absent' ? 'text-danger' : 'opacity-50'}`} /> Absent
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
