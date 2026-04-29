import { useState, useRef, useEffect } from 'react';
import { Bell, Search, Menu, Settings, LogOut, User, CheckCircle2, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function Navbar({ toggleSidebar }) {
  const { user, schoolInfo } = useUser();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
<<<<<<< HEAD
  
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Alice Freeman', message: 'sent a new message.', time: '2 minutes ago', type: 'message', read: false },
    { id: 2, title: 'System', message: 'System backup completed successfully.', time: '1 hour ago', type: 'system', read: false }
  ]);

=======
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
  const profileRef = useRef(null);
  const notifRef = useRef(null);
  const navigate = useNavigate();

<<<<<<< HEAD
  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

=======
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) setIsProfileOpen(false);
      if (notifRef.current && !notifRef.current.contains(event.target)) setIsNotificationsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Basic logout simulation redirecting to /login
    navigate('/login');
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 shadow-sm flex items-center justify-between px-4 sm:px-6 z-10 sticky top-0">
      
      {/* Mobile Menu Toggle & Global Search */}
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="relative max-w-md w-full hidden sm:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search students, teachers, classes... (Ctrl+K)" 
            className="input-field pl-10 h-10 bg-gray-50/50 border-transparent hover:bg-gray-100 hover:border-gray-200 focus:bg-white"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-xs text-gray-400 font-semibold border border-gray-200 rounded px-1.5 py-0.5">⌘K</span>
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <motion.button 
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors focus:outline-none"
          >
            <Bell className="h-5 w-5" />
<<<<<<< HEAD
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1.5 h-2 w-2 rounded-full bg-danger ring-2 ring-white"></span>
            )}
=======
            <span className="absolute top-1 right-1.5 h-2 w-2 rounded-full bg-danger ring-2 ring-white"></span>
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
          </motion.button>

          <AnimatePresence>
            {isNotificationsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 origin-top-right"
              >
                <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                  <h3 className="font-bold text-gray-900">Notifications</h3>
<<<<<<< HEAD
                  {unreadCount > 0 && (
                    <span onClick={markAllRead} className="text-xs text-primary-600 font-semibold cursor-pointer hover:text-primary-700">Mark all read</span>
                  )}
                </div>
                <div className="max-h-[300px] overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-4 text-center text-sm text-gray-500">No notifications</div>
                  ) : notifications.map(notif => (
                    <div 
                      key={notif.id}
                      onClick={() => markAsRead(notif.id)}
                      className={`p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer flex gap-3 ${!notif.read ? 'bg-primary-50/30' : ''}`}
                    >
                      <div className={`h-8 w-8 rounded-full shrink-0 flex items-center justify-center ${notif.type === 'message' ? 'bg-primary-100 text-primary-600' : 'bg-success/10 text-success'}`}>
                        {notif.type === 'message' ? <MessageSquare className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm ${!notif.read ? 'text-gray-900 font-medium' : 'text-gray-800'}`}>
                          <span className="font-semibold">{notif.title}</span> {notif.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">{notif.time}</p>
                      </div>
                      {!notif.read && <div className="h-2 w-2 bg-primary-500 rounded-full mt-1.5"></div>}
                    </div>
                  ))}
                </div>
                <div 
                  onClick={() => { setIsNotificationsOpen(false); navigate('/messages'); }}
                  className="p-3 border-t border-gray-100 text-center bg-gray-50/50 cursor-pointer hover:bg-gray-100 transition-colors"
                >
=======
                  <span className="text-xs text-primary-600 font-semibold cursor-pointer hover:text-primary-700">Mark all read</span>
                </div>
                <div className="max-h-[300px] overflow-y-auto">
                  <div className="p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary-100 shrink-0 flex items-center justify-center text-primary-600">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-800"><span className="font-semibold">Alice Freeman</span> sent a new message.</p>
                      <p className="text-xs text-gray-500 mt-0.5">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-success/10 shrink-0 flex items-center justify-center text-success">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-800">System backup completed successfully.</p>
                      <p className="text-xs text-gray-500 mt-0.5">1 hour ago</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-t border-gray-100 text-center bg-gray-50/50 cursor-pointer hover:bg-gray-100 transition-colors">
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
                  <span className="text-sm text-primary-600 font-medium">View all notifications</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <div 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 border-l border-gray-200 pl-4 cursor-pointer group"
          >
            <div className="hidden md:flex flex-col items-end">
              <span className="text-sm font-semibold text-gray-900 leading-none group-hover:text-primary-600 transition-colors">{user.name}</span>
              <span className="text-xs text-gray-500 mt-1.5">{schoolInfo.name}</span>
            </div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary-600 to-primary-400 flex items-center justify-center text-white font-bold text-xs shadow-soft overflow-hidden"
            >
              {user.avatar ? (
                <img src={user.avatar} alt="Avatar" className="h-full w-full object-cover" />
              ) : (
                user.name.substring(0, 2).toUpperCase()
              )}
            </motion.div>
          </div>

          <AnimatePresence>
            {isProfileOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 origin-top-right"
              >
                <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                  <p className="font-bold text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{user.email}</p>
                </div>
                <div className="p-2 space-y-1">
                  <Link 
                    to="/dashboard" 
                    onClick={() => setIsProfileOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-colors"
                  >
                    <User className="h-4 w-4" /> My Profile
                  </Link>
                  <Link 
                    to="/settings" 
                    onClick={() => setIsProfileOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-colors"
                  >
                    <Settings className="h-4 w-4" /> Account Settings
                  </Link>
                </div>
                <div className="p-2 border-t border-gray-100 bg-gray-50/50">
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-danger hover:bg-danger/10 hover:text-danger-dark rounded-xl transition-colors"
                  >
                    <LogOut className="h-4 w-4" /> Sign out
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
