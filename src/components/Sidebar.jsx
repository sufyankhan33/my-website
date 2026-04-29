import { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BookOpen, 
  CalendarCheck, 
  CreditCard, 
  FileEdit, 
  PieChart, 
  MessageSquare, 
  Settings,
  ChevronLeft,
  LogOut,
  UserCircle,
  Shield,
  ChevronUp,
} from 'lucide-react';
import clsx from 'clsx';
import { useUser } from '../context/UserContext';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Students', icon: Users, path: '/students' },
  { name: 'Teachers', icon: GraduationCap, path: '/teachers' },
  { name: 'Classes', icon: BookOpen, path: '/classes' },
  { name: 'Attendance', icon: CalendarCheck, path: '/attendance' },
  { name: 'Fees', icon: CreditCard, path: '/fees' },
  { name: 'Exams', icon: FileEdit, path: '/exams' },
  { name: 'Reports', icon: PieChart, path: '/reports' },
  { name: 'Messages', icon: MessageSquare, path: '/messages' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  const { user, schoolInfo } = useUser();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  // Close profile popup when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleLogout = () => {
    setIsProfileOpen(false);
    navigate('/login');
  };

  return (
    <motion.aside
      animate={{ width: isOpen ? '16rem' : '5rem' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="bg-sidebar text-gray-300 flex flex-col h-full border-r border-gray-800 relative z-20 flex-shrink-0"
    >
      {/* Logo */}
      <div className="p-4 flex items-center justify-between h-16 shadow-sm border-b border-gray-800">
        <motion.div 
          initial={false}
          animate={{ opacity: isOpen ? 1 : 0, width: isOpen ? 'auto' : 0 }}
          className="overflow-hidden flex items-center gap-2 whitespace-nowrap"
        >
          <div className="bg-primary-600 rounded-lg p-1.5 shadow-float">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <div className="overflow-hidden">
            <span className="font-bold text-lg tracking-tight text-white block leading-tight">
              {schoolInfo.name}
            </span>
          </div>
        </motion.div>

        {/* Collapsed logo icon */}
        {!isOpen && (
          <div className="mx-auto bg-primary-600 rounded-lg p-1.5 shadow-float">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-6 space-y-1 scrollbar-hide">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => clsx(
              'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative',
              isActive 
                ? 'bg-primary-600/10 text-primary-400' 
                : 'hover:bg-gray-800/50 hover:text-white'
            )}
          >
            {({ isActive }) => (
              <>
                <item.icon className={clsx(
                  "h-5 w-5 flex-shrink-0 transition-colors",
                  isActive ? "text-primary-500" : "text-gray-400 group-hover:text-gray-200"
                )} />
                <motion.span 
                  animate={{ opacity: isOpen ? 1 : 0, display: isOpen ? 'block' : 'none' }}
                  className={clsx(
                    "font-medium whitespace-nowrap truncate",
                    isActive ? "font-semibold" : ""
                  )}
                >
                  {item.name}
                </motion.span>
                {isActive && (
                  <motion.div 
                    layoutId="sidebar-active"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-500 rounded-r-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Collapse Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-20 bg-gray-800 border border-gray-700 text-gray-400 hover:text-white p-1 rounded-full shadow-md z-30 transition-transform hover:scale-110"
      >
        <motion.div animate={{ rotate: isOpen ? 0 : 180 }}>
          <ChevronLeft className="h-4 w-4" />
        </motion.div>
      </button>

      {/* Profile snippet at bottom */}
      <div className="border-t border-gray-800 p-3 relative" ref={profileRef}>
        <AnimatePresence>
          {isProfileOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.18 }}
              className="absolute bottom-full left-3 right-3 mb-2 bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden z-50"
            >
              {/* Profile header in popup */}
              <div className="p-4 bg-gray-800/60 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary-600 to-primary-400 flex items-center justify-center text-white font-bold text-sm shadow-inner flex-shrink-0 overflow-hidden">
                    {user.avatar ? (
                      <img src={user.avatar} alt="Avatar" className="h-full w-full object-cover" />
                    ) : (
                      user.name.substring(0, 2).toUpperCase()
                    )}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-semibold text-white truncate">{user.name}</p>
                    <p className="text-xs text-gray-400 truncate">{user.email}</p>
                    <span className="inline-flex items-center gap-1 mt-0.5 text-[10px] font-bold text-primary-400 bg-primary-900/40 px-1.5 py-0.5 rounded-full">
                      <Shield className="h-2.5 w-2.5" />
                      {user.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Menu items */}
              <div className="p-2 space-y-0.5">
                <Link
                  to="/settings"
                  onClick={() => setIsProfileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-gray-700/60 hover:text-white rounded-xl transition-colors"
                >
                  <UserCircle className="h-4 w-4 text-gray-400" />
                  Edit Profile
                </Link>
                <Link
                  to="/settings"
                  onClick={() => setIsProfileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-gray-700/60 hover:text-white rounded-xl transition-colors"
                >
                  <Settings className="h-4 w-4 text-gray-400" />
                  System Settings
                </Link>
              </div>

              <div className="p-2 border-t border-gray-700">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-red-400 hover:bg-red-900/20 hover:text-red-300 rounded-xl transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trigger button */}
        <button
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-gray-800 transition-colors group"
        >
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-primary-600 to-primary-400 flex items-center justify-center text-white font-bold text-sm shadow-inner flex-shrink-0 overflow-hidden">
            {user.avatar ? (
              <img src={user.avatar} alt="Avatar" className="h-full w-full object-cover" />
            ) : (
              user.name.substring(0, 2).toUpperCase()
            )}
          </div>
          <motion.div 
            animate={{ opacity: isOpen ? 1 : 0, display: isOpen ? 'flex' : 'none' }}
            className="flex-1 flex items-center justify-between overflow-hidden"
          >
            <div className="overflow-hidden text-left">
              <p className="text-sm font-medium text-white truncate">{user.name}</p>
              <p className="text-xs text-gray-400 truncate">{user.role}</p>
            </div>
            <motion.div animate={{ rotate: isProfileOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronUp className="h-4 w-4 text-gray-500 group-hover:text-gray-300 flex-shrink-0" />
            </motion.div>
          </motion.div>
        </button>
      </div>
    </motion.aside>
  );
}
