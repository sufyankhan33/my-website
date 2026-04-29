import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, Building2, Palette, Globe, BellRing, User, Camera, Lock, CheckCircle } from 'lucide-react';
import { useUser } from '../context/UserContext';

export default function Settings() {
  const { user, setUser, schoolInfo, setSchoolInfo } = useUser();

  // Admin profile local state
  const [profileForm, setProfileForm] = useState({
    name: user.name,
    email: user.email,
    role: user.role,
  });
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [profileSuccess, setProfileSuccess] = useState(false);

  // School info local state
  const [schoolForm, setSchoolForm] = useState({ ...schoolInfo });
  const [isSavingSchool, setIsSavingSchool] = useState(false);
  const [schoolSuccess, setSchoolSuccess] = useState(false);

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser({ ...user, avatar: imageUrl });
    }
  };

  const handleUpdateProfile = () => {
    setIsSavingProfile(true);
    setTimeout(() => {
      setUser({ ...user, name: profileForm.name, email: profileForm.email, role: profileForm.role });
      setIsSavingProfile(false);
      setProfileSuccess(true);
      setTimeout(() => setProfileSuccess(false), 3000);
    }, 1000);
  };

  const handleSaveSchoolSettings = () => {
    setIsSavingSchool(true);
    setTimeout(() => {
      setSchoolInfo({ ...schoolForm });
      setIsSavingSchool(false);
      setSchoolSuccess(true);
      setTimeout(() => setSchoolSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">System Settings</h1>
          <p className="text-gray-500 text-sm mt-1">Manage school profile and system preferences.</p>
        </div>
        <button
          onClick={handleSaveSchoolSettings}
          disabled={isSavingSchool}
          className="btn-primary flex items-center gap-2 relative overflow-hidden transition-all min-w-[140px] justify-center"
        >
          {isSavingSchool ? (
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full" />
          ) : schoolSuccess ? (
            <><CheckCircle className="h-4 w-4" /> Saved!</>
          ) : (
            <><Save className="h-4 w-4" /> Save School Info</>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">

        {/* Admin Profile */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="card">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-4 mb-6">
            <User className="h-5 w-5 text-primary-500" /> Admin Profile
          </h3>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Avatar */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative group">
                <div className="h-28 w-28 rounded-full bg-gradient-to-tr from-primary-600 to-indigo-400 text-white flex justify-center items-center font-black text-4xl shadow-md overflow-hidden">
                  {user.avatar ? (
                    <img src={user.avatar} alt="Admin Avatar" className="h-full w-full object-cover" />
                  ) : (
                    user.name.substring(0, 2).toUpperCase()
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg border border-gray-100 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors group-hover:scale-110"
                >
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Profile Picture</p>
            </div>

            {/* Personal Details */}
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    value={profileForm.name}
                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                    className="input-field w-full"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    value={profileForm.email}
                    onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                    className="input-field w-full"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Role / Title</label>
                  <input
                    type="text"
                    value={profileForm.role}
                    onChange={(e) => setProfileForm({ ...profileForm, role: e.target.value })}
                    className="input-field w-full"
                  />
                </div>
              </div>

              {/* Security */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-4">
                  <Lock className="h-4 w-4 text-gray-400" /> Security
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Current Password</label>
                    <input type="password" placeholder="••••••••" className="input-field w-full" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">New Password</label>
                    <input type="password" placeholder="••••••••" className="input-field w-full" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Confirm Password</label>
                    <input type="password" placeholder="••••••••" className="input-field w-full" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={handleUpdateProfile}
                  disabled={isSavingProfile}
                  className="btn-secondary flex items-center justify-center gap-2 min-w-[150px]"
                >
                  {isSavingProfile ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="h-4 w-4 border-2 border-primary-500 border-t-transparent rounded-full" />
                  ) : profileSuccess ? (
                    <span className="text-green-600 flex items-center gap-1 font-bold"><CheckCircle className="h-4 w-4" /> Updated!</span>
                  ) : (
                    'Update Profile'
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* School Profile — wired to context */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="card">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-4 mb-4">
            <Building2 className="h-5 w-5 text-primary-500" /> School Profile
          </h3>

          {/* Live preview badge */}
          <div className="mb-4 flex items-center gap-2 text-xs text-primary-700 bg-primary-50 border border-primary-100 rounded-lg px-3 py-2 w-fit">
            <Building2 className="h-3.5 w-3.5" />
            Showing as: <span className="font-bold">{schoolInfo.name}</span> — changes appear everywhere after saving.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">School Name</label>
              <input
                type="text"
                value={schoolForm.name}
                onChange={(e) => setSchoolForm({ ...schoolForm, name: e.target.value })}
                className="input-field"
                placeholder="e.g. SmartSchool Academy"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Registration No</label>
              <input
                type="text"
                value={schoolForm.registrationNo}
                onChange={(e) => setSchoolForm({ ...schoolForm, registrationNo: e.target.value })}
                className="input-field"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">School Address</label>
              <input
                type="text"
                value={schoolForm.address}
                onChange={(e) => setSchoolForm({ ...schoolForm, address: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Contact Email</label>
              <input
                type="email"
                value={schoolForm.email}
                onChange={(e) => setSchoolForm({ ...schoolForm, email: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone Number</label>
              <input
                type="text"
                value={schoolForm.phone}
                onChange={(e) => setSchoolForm({ ...schoolForm, phone: e.target.value })}
                className="input-field"
              />
            </div>
          </div>
        </motion.div>

        {/* Theme & Appearance */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="card">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-4 mb-4">
            <Palette className="h-5 w-5 text-primary-500" /> Appearance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-3">Theme Preference</label>
              <div className="flex gap-4">
                <button className="flex-1 p-4 rounded-xl border-2 border-primary-500 bg-white text-center hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="absolute top-2 right-2 h-3 w-3 bg-primary-500 rounded-full"></div>
                  <div className="w-full h-12 bg-gray-50 rounded-lg border border-gray-200 mb-2"></div>
                  <span className="font-bold text-sm text-gray-900">Light</span>
                </button>
                <button className="flex-1 p-4 rounded-xl border-2 border-transparent bg-gray-900 text-center hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="w-full h-12 bg-gray-800 rounded-lg border border-gray-700 mb-2"></div>
                  <span className="font-bold text-sm text-white">Dark</span>
                </button>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-3 text-transparent selection:bg-transparent">_</label>
              <div className="p-4 bg-primary-50 rounded-xl text-primary-800 text-sm font-medium border border-primary-100">
                Dark mode integration can be activated via Tailwind's <code className="bg-primary-100 px-1 rounded">dark:</code> classes. You can toggle this state globally.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Localization */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="card">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-4 mb-4">
            <Globe className="h-5 w-5 text-primary-500" /> Localization
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">System Language</label>
              <select className="input-field">
                <option>English (US)</option>
                <option>Spanish (ES)</option>
                <option>French (FR)</option>
                <option>Arabic (AR)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Timezone</label>
              <select className="input-field">
                <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                <option>(GMT+00:00) Greenwich Mean Time</option>
                <option>(GMT+05:30) Indian Standard Time</option>
                <option>(GMT+05:00) Pakistan Standard Time</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="card">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-4 mb-4">
            <BellRing className="h-5 w-5 text-primary-500" /> Notifications
          </h3>
          <div className="space-y-3">
            {[
              { id: 'fee', label: 'Fee Reminders', desc: 'Send automated email/SMS reminders for pending dues.' },
              { id: 'att', label: 'Attendance Alerts', desc: 'Notify parents when a student is marked absent.' },
              { id: 'exam', label: 'Exam Results', desc: 'Publish results automatically when graded.' },
              { id: 'sys', label: 'System Updates', desc: 'Get updates regarding SmartSchool OS features.' },
            ].map((noti, i) => (
              <div key={noti.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                <div>
                  <p className="font-bold text-gray-900 text-sm">{noti.label}</p>
                  <p className="text-xs text-gray-500">{noti.desc}</p>
                </div>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" name="toggle" id={`toggle_${i}`} defaultChecked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-primary-500 right-0 shadow-sm" />
                  <label htmlFor={`toggle_${i}`} className="toggle-label block overflow-hidden h-5 rounded-full bg-primary-200 cursor-pointer"></label>
                </div>
              </div>
            ))}
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            .toggle-checkbox:checked { right: 0; border-color: #6366f1; }
            .toggle-checkbox:checked + .toggle-label { background-color: #e0e7ff; }
            .toggle-checkbox { right: 1.25rem; border-color: #d1d5db; transition: all 0.2s }
            .toggle-label { transition: all 0.2s; background-color: #e5e7eb; }
          `}} />
        </motion.div>

      </div>
    </div>
  );
}
