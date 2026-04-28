import { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Edit, Mail, Phone, MapPin, Calendar, Award, CheckCircle, AlertCircle, DollarSign, X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const attendanceData = [
  { month: 'Jan', perc: 95 },
  { month: 'Feb', perc: 92 },
  { month: 'Mar', perc: 96 },
  { month: 'Apr', perc: 88 },
  { month: 'May', perc: 95 },
];

export default function StudentProfile() {
  const { id } = useParams();
  const location = useLocation();
  const initialStudent = location.state?.student || { name: 'Alice Freeman', class: '10th A', rollNo: '101', status: 'Active', avatar: 'AF' };
  const [student, setStudent] = useState(initialStudent);
  const [isPaying, setIsPaying] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState(student);

  const initiatePayment = () => {
    setShowConfirmModal(true);
  };

  const confirmPayment = () => {
    setShowConfirmModal(false);
    setIsPaying(true);
    setTimeout(() => {
      setIsPaying(false);
      setShowSuccessModal(true);
      setTimeout(() => setShowSuccessModal(false), 3000);
    }, 1500);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setStudent({
      ...student,
      ...editFormData,
      avatar: editFormData.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'ST'
    });
    setIsEditModalOpen(false);
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/students" className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
            <ArrowLeft className="h-5 w-5 text-gray-500" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Student Profile</h1>
        </div>
        <button onClick={() => { setEditFormData(student); setIsEditModalOpen(true); }} className="btn-secondary flex items-center gap-2">
          <Edit className="h-4 w-4" /> Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Personal Info Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card col-span-1 border-t-4 border-t-primary-500 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-success/10 text-success-dark font-bold px-3 py-1 rounded-bl-xl text-xs">
            Active
          </div>
          <div className="flex flex-col items-center mt-4">
            <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-primary-600 to-indigo-400 flex items-center justify-center text-white text-3xl font-bold shadow-lg ring-4 ring-primary-50">
              {student.avatar}
            </div>
            <h2 className="text-xl font-bold text-gray-900 mt-4">{student.name}</h2>
            <p className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mt-1">Class {student.class} | Roll: {student.rollNo}</p>
          </div>
          
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Mail className="h-5 w-5 text-gray-400" /> alice.f@school.edu
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Phone className="h-5 w-5 text-gray-400" /> +1 234 567 890
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Calendar className="h-5 w-5 text-gray-400" /> DOB: 14 May 2008
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <MapPin className="h-5 w-5 text-gray-400" /> 123 Education St, NY
            </div>
          </div>
        </motion.div>

        {/* Dynamic Details Column */}
        <div className="col-span-1 lg:col-span-2 space-y-6">
          
          {/* Attendance Graph */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-6">Attendance Record</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
                  <YAxis domain={[80, 100]} axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                  <Tooltip cursor={{stroke: '#e0e7ff', strokeWidth: 2}} />
                  <Line type="monotone" dataKey="perc" stroke="#6366f1" strokeWidth={4} dot={{r: 5, fill: '#fff', strokeWidth: 2}} activeDot={{r: 8}} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fee History UI */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Fee History</h3>
              <div className="space-y-3">
                {['Term 1', 'Term 2'].map((term, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-success/10 text-success flex justify-center items-center font-bold">
                        $
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">{term} Fee</p>
                        <p className="text-xs text-gray-500">Paid on 12th Aug</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-gray-900">$1,200</span>
                  </div>
                ))}
                <div className="flex justify-between items-center p-3 rounded-xl border border-warning/30 bg-warning/5">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-warning/20 text-warning-dark flex justify-center items-center font-bold">
                      !
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Term 3 Fee</p>
                      <p className="text-xs text-warning-dark">Due in 5 days</p>
                    </div>
                  </div>
                  <button 
                    onClick={initiatePayment} 
                    disabled={isPaying || showSuccessModal}
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1 transition-all ${
                      showSuccessModal ? 'bg-success text-white' : 'bg-warning-dark text-white hover:opacity-90'
                    }`}
                  >
                    {isPaying ? (
                       <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="h-3 w-3 border-2 border-white/30 border-t-white rounded-full" />
                    ) : showSuccessModal ? (
                      <><CheckCircle className="h-3 w-3" /> Paid</>
                    ) : 'Pay Now'}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Result Section UI */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="card bg-gradient-to-br from-indigo-900 to-primary-800 text-white border-0 shadow-lg"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center justify-between">
                Academic Results <Award className="h-5 w-5 text-yellow-400" />
              </h3>
              <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <p className="text-sm text-indigo-200">Latest Term: Mid-Terms (Fall)</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-black">89.4%</span>
                  <span className="text-sm font-bold text-success-light bg-success-dark/20 px-2 py-0.5 rounded-full">+2.4%</span>
                </div>
                
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Mathematics</span>
                    <span className="font-bold">92/100</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-1.5">
                    <div className="bg-success-light h-1.5 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                  
                  <div className="flex justify-between text-sm mt-3">
                    <span>Science</span>
                    <span className="font-bold">85/100</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-1.5">
                    <div className="bg-warning-light h-1.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <Link to="/reports" state={{ student }} className="w-full mt-6 py-2 bg-white text-center text-indigo-900 font-bold rounded-xl text-sm hover:bg-gray-100 transition-colors shadow-soft block">
                  Download Full Report Card
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Payment Confirmation Modal */}
      <AnimatePresence>
        {showConfirmModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full border border-gray-100"
            >
              <div className="h-12 w-12 rounded-full bg-warning/20 text-warning-dark flex items-center justify-center mb-4 mx-auto">
                <AlertCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-2">Confirm Payment</h3>
              <p className="text-center text-gray-600 text-sm mb-6">
                You are about to process a payment of <strong className="text-gray-900">$1,200</strong> for Term 3. This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button onClick={() => setShowConfirmModal(false)} className="flex-1 py-2.5 rounded-xl font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors">Cancel</button>
                <button onClick={confirmPayment} className="flex-1 py-2.5 rounded-xl font-bold text-white bg-warning-dark hover:bg-warning-700 transition-colors shadow-lg shadow-warning/30">Confirm</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Payment Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full border border-gray-100 flex flex-col items-center text-center"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="h-16 w-16 rounded-full bg-success/20 text-success-dark flex items-center justify-center mb-4"
              >
                <CheckCircle className="h-8 w-8" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
              <p className="text-gray-600 text-sm mb-6">
                The fee payment has been securely processed and recorded.
              </p>
              <button onClick={() => setShowSuccessModal(false)} className="w-full py-3 rounded-xl font-bold text-white bg-success-dark hover:bg-success-800 transition-colors shadow-lg shadow-success/30">
                Done
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Edit Profile Modal */}
      <AnimatePresence>
        {isEditModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Edit Profile</h2>
                <button onClick={() => setIsEditModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSaveProfile} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={editFormData.name}
                    onChange={(e) => setEditFormData({...editFormData, name: e.target.value})}
                    className="input-field w-full"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
                    <input
                      type="text"
                      required
                      value={editFormData.class}
                      onChange={(e) => setEditFormData({...editFormData, class: e.target.value})}
                      className="input-field w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Roll No</label>
                    <input
                      type="text"
                      required
                      value={editFormData.rollNo}
                      onChange={(e) => setEditFormData({...editFormData, rollNo: e.target.value})}
                      className="input-field w-full"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
