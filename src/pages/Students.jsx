import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Filter, MoreVertical, Edit, Trash2, Eye, X, XCircle } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const initialStudents = [
  { id: 1, name: 'Alice Freeman', class: '10th A', rollNo: '101', status: 'Active', avatar: 'AF' },
  { id: 2, name: 'Bobby Singer', class: '10th B', rollNo: '102', status: 'Active', avatar: 'BS' },
  { id: 3, name: 'Charlie Dean', class: '9th A', rollNo: '901', status: 'Suspended', avatar: 'CD' },
  { id: 4, name: 'Diana Prince', class: '11th Science', rollNo: '1105', status: 'Active', avatar: 'DP' },
  { id: 5, name: 'Evan Wright', class: '10th A', rollNo: '103', status: 'Active', avatar: 'EW' },
];

export default function Students() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [newStudent, setNewStudent] = useState({ name: '', class: '', rollNo: '', status: 'Active' });

  const [searchParams, setSearchParams] = useSearchParams();
  const classFilter = searchParams.get('class');

  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchesClass = classFilter ? s.class === classFilter : true;
    return matchesSearch && matchesClass;
  });

  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  const handleSaveStudent = (e) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.class || !newStudent.rollNo) return;
    
    if (editingStudent) {
      setStudents(students.map(s => 
        s.id === editingStudent.id ? { ...s, ...newStudent } : s
      ));
    } else {
      const initials = newStudent.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
      const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
      
      setStudents([{ 
        id: newId, 
        ...newStudent,
        avatar: initials || 'ST'
      }, ...students]);
    }
    
    setIsAddModalOpen(false);
    setEditingStudent(null);
    setNewStudent({ name: '', class: '', rollNo: '', status: 'Active' });
  };

  const openAddModal = () => {
    setEditingStudent(null);
    setNewStudent({ name: '', class: classFilter || '', rollNo: '', status: 'Active' });
    setIsAddModalOpen(true);
  };

  const openEditModal = (student) => {
    setEditingStudent(student);
    setNewStudent(student);
    setIsAddModalOpen(true);
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Students Directory</h1>
          <p className="text-gray-500 text-sm mt-1">Manage all registered students in the system.</p>
        </div>
        <button onClick={openAddModal} className="btn-primary flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add New Student
        </button>
      </div>

      {classFilter && (
        <div className="bg-primary-50 border border-primary-100 text-primary-700 px-4 py-3 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <Filter className="h-4 w-4" />
            Showing students in Class: <span className="font-bold">{classFilter}</span>
          </div>
          <button 
            onClick={() => {
              searchParams.delete('class');
              setSearchParams(searchParams);
            }} 
            className="text-primary-600 hover:text-primary-800 flex items-center gap-1 text-sm font-bold"
          >
            <XCircle className="h-4 w-4" /> Clear Filter
          </button>
        </div>
      )}

      {/* Filters and Search */}
      <div className="cardflex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl shadow-soft">
        <div className="relative w-full sm:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search students by name..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field pl-10 h-10 w-full"
          />
        </div>
        <button className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 h-10">
          <Filter className="h-4 w-4" /> Filter / Sort
        </button>
      </div>

      {/* Students List - Row Cards instead of strict Table */}
      <div className="space-y-3">
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-sm font-semibold text-gray-500 uppercase tracking-wider">
          <div className="col-span-4">Student Info</div>
          <div className="col-span-2">Class</div>
          <div className="col-span-2">Roll No</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        <AnimatePresence>
          {filteredStudents.map((student, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: index * 0.05 }}
              key={student.id}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group"
            >
              {/* Info */}
              <div className="col-span-4 flex items-center gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {student.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{student.name}</h3>
                  <p className="text-sm text-gray-500 hidden md:block">ID: SCH-{2024000 + student.id}</p>
                </div>
              </div>

              {/* Class & Roll */}
              <div className="col-span-2 flex justify-between md:block">
                <span className="md:hidden text-gray-500 text-sm">Class:</span>
                <span className="font-medium text-gray-700">{student.class}</span>
              </div>
              <div className="col-span-2 flex justify-between md:block">
                <span className="md:hidden text-gray-500 text-sm">Roll No:</span>
                <span className="font-medium text-gray-700">{student.rollNo}</span>
              </div>

              {/* Status */}
              <div className="col-span-2 flex justify-between md:block">
                <span className="md:hidden text-gray-500 text-sm">Status:</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  student.status === 'Active' 
                  ? 'bg-success/10 text-success-dark' 
                  : 'bg-danger/10 text-danger-dark'
                }`}>
                  {student.status}
                </span>
              </div>

              {/* Actions */}
              <div className="col-span-2 flex items-center justify-end gap-2 md:opacity-0 group-hover:opacity-100 transition-opacity">
                <Link to={`/students/${student.id}`} state={{ student }} className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                  <Eye className="h-4 w-4" />
                </Link>
                <button onClick={() => openEditModal(student)} className="p-2 text-gray-400 hover:text-warning-dark hover:bg-warning/10 rounded-lg transition-colors">
                  <Edit className="h-4 w-4" />
                </button>
                <button onClick={() => deleteStudent(student.id)} className="p-2 text-gray-400 hover:text-danger-dark hover:bg-danger/10 rounded-lg transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No students found matching your search.</p>
          </div>
        )}
      </div>

      {/* Add Student Modal */}
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
                <h2 className="text-xl font-bold text-gray-900">{editingStudent ? 'Edit Student' : 'Add New Student'}</h2>
                <button onClick={() => setIsAddModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSaveStudent} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                    className="input-field w-full"
                    placeholder="e.g. John Doe"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
                    <input
                      type="text"
                      required
                      value={newStudent.class}
                      onChange={(e) => setNewStudent({...newStudent, class: e.target.value})}
                      className="input-field w-full"
                      placeholder="e.g. 10th A"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Roll No</label>
                    <input
                      type="text"
                      required
                      value={newStudent.rollNo}
                      onChange={(e) => setNewStudent({...newStudent, rollNo: e.target.value})}
                      className="input-field w-full"
                      placeholder="e.g. 101"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={newStudent.status}
                    onChange={(e) => setNewStudent({...newStudent, status: e.target.value})}
                    className="input-field w-full"
                  >
                    <option value="Active">Active</option>
                    <option value="Suspended">Suspended</option>
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
                    {editingStudent ? 'Save Changes' : 'Add Student'}
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
