import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, DollarSign, Activity, Plus, FileText, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import StatCard from '../components/StatCard';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, LineChart, Line
} from 'recharts';

const statData = [
  { title: 'Total Students', value: '1,245', icon: Users, trend: 'up', trendValue: '+12%', colorClass: 'bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white' },
  { title: 'Total Teachers', value: '84', icon: GraduationCap, trend: 'up', trendValue: '+2%', colorClass: 'bg-warning-light/20 text-warning-dark group-hover:bg-warning group-hover:text-white' },
  { title: 'Fees Collected', value: '$84,500', icon: DollarSign, trend: 'up', trendValue: '+15%', colorClass: 'bg-success/20 text-success-dark group-hover:bg-success group-hover:text-white' },
  { title: 'Attendance %', value: '94.2%', icon: Activity, trend: 'down', trendValue: '-1.2%', colorClass: 'bg-danger/20 text-danger-dark group-hover:bg-danger group-hover:text-white' },
];

const feeDataByYear = {
  'This Year': [
    { name: 'Jan', collected: 4000, pending: 2400 },
    { name: 'Feb', collected: 3000, pending: 1398 },
    { name: 'Mar', collected: 2000, pending: 9800 },
    { name: 'Apr', collected: 2780, pending: 3908 },
    { name: 'May', collected: 1890, pending: 4800 },
    { name: 'Jun', collected: 2390, pending: 3800 },
  ],
  'Last Year': [
    { name: 'Jan', collected: 3200, pending: 1800 },
    { name: 'Feb', collected: 2800, pending: 2100 },
    { name: 'Mar', collected: 3500, pending: 1200 },
    { name: 'Apr', collected: 2100, pending: 3200 },
    { name: 'May', collected: 2600, pending: 2900 },
    { name: 'Jun', collected: 3100, pending: 1500 },
  ],
};

const attendanceData = [
  { name: 'Mon', attendance: 95 },
  { name: 'Tue', attendance: 93 },
  { name: 'Wed', attendance: 96 },
  { name: 'Thu', attendance: 91 },
  { name: 'Fri', attendance: 94 },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState('This Year');
  const feeData = feeDataByYear[selectedYear];
  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-gray-500 text-sm mt-1">Welcome back! Here is a summary of the school's performance.</p>
        </div>
        <div className="flex gap-3">
          <Link to="/reports" className="btn-secondary flex items-center gap-2">
            <FileText className="h-4 w-4" /> Reports
          </Link>
          <Link to="/students" className="btn-primary flex items-center gap-2">
            <Plus className="h-4 w-4" /> Add Student
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statData.map((stat, i) => (
          <StatCard key={i} index={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Fees Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card col-span-1 lg:col-span-2"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-900">Monthly Fees Overview</h2>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-gray-50 border border-gray-200 text-sm rounded-lg px-3 py-1.5 focus:ring-primary-500 focus:border-primary-500"
            >
              <option>This Year</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={feeData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCollected" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPending" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                />
                <Area type="monotone" dataKey="collected" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorCollected)" />
                <Area type="monotone" dataKey="pending" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorPending)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Attendance Trend */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-900">Attendance Trend</h2>
          </div>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={attendanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
                <YAxis domain={['dataMin - 2', 'dataMax + 2']} axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                <Tooltip />
                <Line type="smooth" dataKey="attendance" stroke="#6366f1" strokeWidth={4} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-8 space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/attendance" className="flex flex-col items-center justify-center p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors text-primary-700 font-medium text-sm">
                <CheckCircle2 className="h-6 w-6 mb-2" />
                Mark Attd.
              </Link>
              <Link to="/reports" className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-gray-700 font-medium text-sm">
                <FileText className="h-6 w-6 mb-2 text-gray-500" />
                Gen. Report
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Floating Action Button (Mobile only) */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate('/students')}
        className="fixed bottom-6 right-6 md:hidden h-14 w-14 bg-primary-600 outline-none rounded-full shadow-xl flex items-center justify-center text-white z-50"
      >
        <Plus className="h-6 w-6" />
      </motion.button>

    </div>
  );
}
