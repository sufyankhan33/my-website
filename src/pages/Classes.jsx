import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, GraduationCap, Calendar, Clock, ChevronDown, Plus, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const initialClassesData = [
  { 
    id: 1, 
    name: '10th A', 
    teacher: 'Mr. John Keating', 
    studentsCount: 34, 
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
    studentsCount: 32, 
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
    studentsCount: 28, 
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
    studentsCount: 35, 
    type: 'General',
    timetable: [
      { time: '08:00 AM', subject: 'Science' },
      { time: '09:00 AM', subject: 'Mathematics' },
      { time: '10:15 AM', subject: 'English' },
    ]
  },
];

export default function Classes() {
  const navigate = useNavigate();
  const [classes, setClasses] = useState(initialClassesData);
  const [expandedId, setExpandedId] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newClass, setNewClass] = useState({ name: '', teacher: '', type: 'General' });

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleAddClass = (e) => {
    e.preventDefault();
    if (!newClass.name || !newClass.teacher) return;
    
    const newId = classes.length > 0 ? Math.max(...classes.map(c => c.id)) + 1 : 1;
    
    setClasses([{ 
      id: newId, 
      ...newClass,
      studentsCount: 0,
      timetable: [
        { time: '08:00 AM', subject: 'Subject 1' },
        { time: '09:00 AM', subject: 'Subject 2' },
      ]
    }, ...classes]);
    
    setIsAddModalOpen(false);
    setNewClass({ name: '', teacher: '', type: 'General' });
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Classes Overview</h1>
          <p className="text-gray-500 text-sm mt-1">Manage classrooms, schedules, and class teachers.</p>
        </div>
        <button onClick={() => setIsAddModalOpen(true)} className="btn-primary flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add New Class
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {classes.map((cls, index) => {
          const isExpanded = expandedId === cls.id;
          
          return (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={cls.id}
              className={`card overflow-hidden transition-all duration-300 border-2 ${
                isExpanded ? 'border-primary-500 shadow-lg' : 'border-transparent cursor-pointer hover:border-gray-200'
              }`}
              onClick={() => !isExpanded && toggleExpand(cls.id)}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-primary-600 to-indigo-400 text-white flex justify-center items-center font-black text-2xl shadow-md">
                    {cls.name.split(' ')[0]}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 leading-tight">{cls.name}</h2>
                    <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 flex items-center justify-center py-0.5 mt-1 rounded uppercase tracking-wider">
                      {cls.type}
                    </span>
                  </div>
                </div>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); toggleExpand(cls.id); }}
                  className={`p-2 rounded-xl transition-colors ${
                    isExpanded ? 'bg-primary-50 text-primary-600' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <GraduationCap className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Class Teacher</p>
                    <p className="font-medium text-gray-900 text-sm whitespace-nowrap">{cls.teacher}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <Users className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Students</p>
                    <p className="font-medium text-gray-900 text-sm">{cls.studentsCount} Total</p>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <hr className="my-6 border-gray-100" />
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary-500" /> Today's Timetable
                      </h3>
                      <button className="text-sm font-semibold text-primary-600 hover:text-primary-700">View Full</button>
                    </div>
                    
                    <div className="space-y-3">
                      {cls.timetable.map((slot, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50 transition-colors group">
                          <div className="flex items-center gap-4">
                            <div className="bg-white p-2 rounded-lg shadow-sm text-primary-600 border border-gray-100 group-hover:border-primary-200">
                              <Clock className="h-4 w-4" />
                            </div>
                            <span className="font-bold text-gray-900">{slot.subject}</span>
                          </div>
                          <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-lg border border-gray-100">{slot.time}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 flex gap-3">
                      <button onClick={() => navigate(`/students?class=${encodeURIComponent(cls.name)}`)} className="btn-primary w-full justify-center">View Student List</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Add Class Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Add New Class</h2>
                <button onClick={() => setIsAddModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleAddClass} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Class Name</label>
                  <input
                    type="text"
                    required
                    value={newClass.name}
                    onChange={(e) => setNewClass({...newClass, name: e.target.value})}
                    className="input-field w-full"
                    placeholder="e.g. 10th A"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Class Teacher</label>
                  <input
                    type="text"
                    required
                    value={newClass.teacher}
                    onChange={(e) => setNewClass({...newClass, teacher: e.target.value})}
                    className="input-field w-full"
                    placeholder="e.g. Mr. Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stream / Type</label>
                  <select
                    value={newClass.type}
                    onChange={(e) => setNewClass({...newClass, type: e.target.value})}
                    className="input-field w-full"
                  >
                    <option value="General">General</option>
                    <option value="Science">Science</option>
                    <option value="Arts">Arts</option>
                    <option value="Commerce">Commerce</option>
                  </select>
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Create Class
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
