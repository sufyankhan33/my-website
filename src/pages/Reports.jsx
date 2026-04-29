import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, Printer, User, Award, CheckCircle } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const marksData = [
  { subject: 'Math', score: 92, avg: 78 },
  { subject: 'Science', score: 85, avg: 72 },
  { subject: 'English', score: 88, avg: 75 },
  { subject: 'History', score: 76, avg: 70 },
  { subject: 'Art', score: 95, avg: 85 },
];

const attendanceData = [
  { month: 'Jan', perc: 95 },
  { month: 'Feb', perc: 92 },
  { month: 'Mar', perc: 96 },
  { month: 'Apr', perc: 88 },
  { month: 'May', perc: 95 },
];

export default function Reports() {
  const location = useLocation();
  const student = location.state?.student || { name: 'Alice Freeman', class: '10th A', rollNo: '101', avatar: 'AF' };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Performance Reports</h1>
          <p className="text-gray-500 text-sm mt-1">Detailed analysis and report cards.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => window.print()} className="btn-secondary text-sm flex items-center gap-2"><Printer className="h-4 w-4" /> Print</button>
          <button onClick={() => window.print()} className="btn-primary text-sm flex items-center gap-2"><Download className="h-4 w-4" /> Download PDF</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Report Card Profile Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card col-span-1 border-t-8 border-t-primary-600 flex flex-col items-center text-center relative"
        >
          <div className="h-24 w-24 bg-primary-100 text-primary-700 font-bold text-3xl rounded-full flex justify-center items-center mb-4 mt-6">
            {student.avatar}
          </div>
          <h2 className="text-xl font-bold text-gray-900">{student.name}</h2>
          <p className="text-sm font-semibold text-gray-500 mb-6">Class: {student.class} | Roll No: {student.rollNo}</p>
          
          <div className="w-full bg-gray-50 rounded-2xl p-4 flex justify-around mb-6">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold mb-1">Rank</p>
              <p className="text-xl font-black text-primary-600">3rd</p>
            </div>
            <div className="w-px bg-gray-200"></div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold mb-1">Grade</p>
              <p className="text-xl font-black text-success-dark">A+</p>
            </div>
          </div>
          
          <div className="w-full text-left space-y-3">
            <h3 className="font-bold text-gray-900 flex items-center gap-2"><Award className="h-5 w-5 text-yellow-500" /> Remarks</h3>
            <p className="text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg border border-yellow-100">
              {student.name.split(' ')[0]} is an outstanding student with a strong aptitude for Mathematics and Science. {student.name.split(' ')[0]} actively participates in class and shows great leadership skills.
            </p>
          </div>
        </motion.div>

        {/* Charts & Breakdown */}
        <div className="col-span-1 lg:col-span-2 space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Subject Wise Performance</h3>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marksData} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="subject" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} dy={10} />
                  <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <Tooltip cursor={{ fill: '#f3f4f6' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} />
                  <Bar dataKey="score" fill="#6366f1" radius={[6, 6, 0, 0]} name="Score" barSize={30} />
                  <Bar dataKey="avg" fill="#cbd5e1" radius={[6, 6, 0, 0]} name="Class Average" barSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="card">
              <h3 className="text-md font-bold text-gray-900 mb-4">Attendance Trend</h3>
              <div className="h-[150px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={attendanceData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} dy={5} />
                    <YAxis domain={[80, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Line type="smooth" dataKey="perc" stroke="#10b981" strokeWidth={3} dot={{ strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="card bg-gray-50 flex flex-col justify-center">
              <h3 className="text-md font-bold text-gray-900 mb-2">Total Passed</h3>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-black text-gray-900">100%</span>
                <span className="text-sm font-bold text-success-dark flex items-center gap-1 mb-1"><CheckCircle className="h-4 w-4" /> All Clear</span>
              </div>
              <p className="text-xs text-gray-500">Student has cleared all subjects for this academic year without any backlogs.</p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
