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
          <p className="text-gray-500 text-sm mt-1">Class 10th A • {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
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
          {studentsList.map((student) => {
            const status = attendance[student.id];
            
            return (
              <div key={student.id} className="flex justify-between items-center px-6 py-4 hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-gray-100 text-gray-600 font-bold rounded-full flex items-center justify-center">
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{student.name}</p>
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
