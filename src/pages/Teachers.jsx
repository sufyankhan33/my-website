import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Filter, Mail, Phone, BookOpen, GraduationCap, DollarSign, X, ChevronDown } from 'lucide-react';

const teachers = [
  { id: 1, name: 'Mr. John Keating', subjects: ['English', 'Literature'], classes: ['10th A', '10th B', '11th Arts'], salary: '$4,200/mo', avatar: 'JK', role: 'Senior Teacher' },
  { id: 2, name: 'Mrs. Valerie Frizzle', subjects: ['Science', 'Biology'], classes: ['6th A', '7th B', '8th C'], salary: '$3,800/mo', avatar: 'VF', role: 'Science Head' },
  { id: 3, name: 'Mr. Walter White', subjects: ['Chemistry'], classes: ['11th Sci', '12th Sci'], salary: '$4,500/mo', avatar: 'WW', role: 'Lead Chemist' },
  { id: 4, name: 'Ms. Katherine Watson', subjects: ['Art History'], classes: ['9th A', '10th Arts'], salary: '$3,500/mo', avatar: 'KW', role: 'Art Department' },
];

export default function Teachers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [allTeachers, setAllTeachers] = useState(teachers);
  const [newTeacher, setNewTeacher] = useState({ name: '', role: '', subjects: '', classes: '', salary: '' });

  const filteredTeachers = allTeachers
    .filter(teacher => 
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      teacher.subjects.some(sub => sub.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'salary') return parseInt(b.salary) - parseInt(a.salary);
      return 0;
    });

  const handleAddTeacher = (e) => {
    e.preventDefault();
    const initials = newTeacher.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    const newId = allTeachers.length > 0 ? Math.max(...allTeachers.map(t => t.id)) + 1 : 1;
    setAllTeachers([{
      id: newId,
      name: newTeacher.name,
      role: newTeacher.role || 'Teacher',
      subjects: newTeacher.subjects.split(',').map(s => s.trim()).filter(Boolean),
      classes: newTeacher.classes.split(',').map(c => c.trim()).filter(Boolean),
      salary: newTeacher.salary ? `$${newTeacher.salary}/mo` : 'N/A',
      avatar: initials || 'TC',
    }, ...allTeachers]);
    setIsAddModalOpen(false);
    setNewTeacher({ name: '', role: '', subjects: '', classes: '', salary: '' });
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Teachers Directory</h1>
          <p className="text-gray-500 text-sm mt-1">Manage teaching staff, assignments, and payroll.</p>
        </div>
        <button onClick={() => setIsAddModalOpen(true)} className="btn-primary flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Teacher
        </button>
      </div>

      <div className="card flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl shadow-soft">
        <div className="relative w-full sm:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search teachers by name or subject..." 
            className="input-field pl-10 h-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          onClick={() => setSortBy(sortBy === 'name' ? 'salary' : 'name')}
          className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 h-10"
        >
          <Filter className="h-4 w-4" /> Sort: {sortBy === 'name' ? 'Name' : 'Salary'}
        </button>
      </div>

      {/* Teacher Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredTeachers.length > 0 ? filteredTeachers.map((teacher, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            key={teacher.id}
            className="card group hover:border-primary-500 transition-colors border border-transparent"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-indigo-500 to-primary-400 text-white flex justify-center items-center font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
                  {teacher.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-primary-600 transition-colors">{teacher.name}</h3>
                  <p className="text-xs font-semibold text-primary-500 bg-primary-50 px-2 py-0.5 rounded uppercase tracking-wider inline-block mt-1">
                    {teacher.role}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {/* Subjects */}
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <BookOpen className="h-4 w-4" /> Subjects
                </p>
                <div className="flex gap-2 flex-wrap">
                  {teacher.subjects.map(sub => (
                    <span key={sub} className="bg-gray-100 text-gray-700 text-sm px-2.5 py-1 rounded-lg font-medium">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Assigned Classes */}
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" /> Assigned Classes
                </p>
                <div className="flex gap-2 flex-wrap">
                  {teacher.classes.map(cls => (
                    <span key={cls} className="border border-gray-200 text-gray-600 text-sm px-2.5 py-1 rounded-lg font-medium bg-gray-50">
                      {cls}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <hr className="my-5 border-gray-100" />

            {/* Salary UI & Actions */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1">
                  <DollarSign className="h-3 w-3" /> Salary
                </p>
                <p className="font-bold text-gray-900">{teacher.salary}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => window.location.href = `mailto:${teacher.name.toLowerCase().replace(' ', '.')}@smartschool.edu`}
                  className="p-2 border border-gray-200 rounded-xl text-gray-500 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                  title={`Email ${teacher.name}`}
                >
                  <Mail className="h-4 w-4" />
                </button>
                <button
                  onClick={() => alert(`Calling ${teacher.name}...\n(Phone integration not yet connected)`)}
                  className="p-2 border border-gray-200 rounded-xl text-gray-500 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                  title={`Call ${teacher.name}`}
                >
                  <Phone className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )) : (
          <p className="text-gray-500 col-span-full text-center py-10">No teachers found matching your search.</p>
        )}
      </div>

      {/* Add Teacher Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Add New Teacher</h2>
                <button onClick={() => setIsAddModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <form onSubmit={handleAddTeacher} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Full Name</label>
                    <input required type="text" value={newTeacher.name} onChange={e => setNewTeacher({...newTeacher, name: e.target.value})} className="input-field w-full" placeholder="e.g. Mr. John Smith" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Role / Title</label>
                    <input type="text" value={newTeacher.role} onChange={e => setNewTeacher({...newTeacher, role: e.target.value})} className="input-field w-full" placeholder="e.g. Senior Teacher" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Salary /mo ($)</label>
                    <input type="number" value={newTeacher.salary} onChange={e => setNewTeacher({...newTeacher, salary: e.target.value})} className="input-field w-full" placeholder="e.g. 4000" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Subjects (comma-separated)</label>
                    <input type="text" value={newTeacher.subjects} onChange={e => setNewTeacher({...newTeacher, subjects: e.target.value})} className="input-field w-full" placeholder="e.g. Math, Physics" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Classes (comma-separated)</label>
                    <input type="text" value={newTeacher.classes} onChange={e => setNewTeacher({...newTeacher, classes: e.target.value})} className="input-field w-full" placeholder="e.g. 10th A, 11th B" />
                  </div>
                </div>
                <div className="pt-4 flex justify-end gap-3">
                  <button type="button" onClick={() => setIsAddModalOpen(false)} className="btn-secondary">Cancel</button>
                  <button type="submit" className="btn-primary">Add Teacher</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
