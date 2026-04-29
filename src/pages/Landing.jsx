<<<<<<< HEAD
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  GraduationCap, Play, CheckCircle2, Users, BookOpen, CreditCard, 
  CalendarCheck, FileEdit, PieChart, ArrowRight, Star, Quote,
  Phone, Mail, MapPin, Check, Menu, X
} from 'lucide-react';
import dashboardPreview from '../assets/dashboard_ui_hero.png';
import featureAttendance from '../assets/feature_attendance.png';
import featureFees from '../assets/feature_fees.png';

export default function Landing() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isYearly, setIsYearly] = useState(false);

  const handleDemoLogin = () => {
    navigate('/login', { state: { isDemo: true } });
  };

=======
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, Play, CheckCircle2, Users, BookOpen, CreditCard, 
  CalendarCheck, FileEdit, PieChart, ArrowRight, Star
} from 'lucide-react';
import dashboardPreview from '../assets/dashboard_preview.png';

export default function Landing() {
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-primary-500 selection:text-white">
      {/* Navigation */}
<<<<<<< HEAD
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="bg-primary-600 rounded-lg p-2 shadow-sm">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-gray-900">SmartSchooler</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#features" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Reviews</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Contact</a>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <button onClick={handleDemoLogin} className="text-primary-600 hover:text-primary-700 font-semibold transition-colors">
                Live Demo
              </button>
              <Link to="/login" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Login
              </Link>
              <Link to="/signup" className="btn-primary shadow-lg shadow-primary-500/30 hover:-translate-y-0.5 transition-transform duration-300">
                Start Free Trial
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4 shadow-lg absolute w-full">
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 font-medium">Features</a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 font-medium">Reviews</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 font-medium">Pricing</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 font-medium">Contact</a>
            <hr className="border-gray-100" />
            <button onClick={() => { setIsMenuOpen(false); handleDemoLogin(); }} className="block w-full text-left text-primary-600 font-semibold">Live Demo</button>
            <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 font-medium">Login</Link>
            <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="block w-full text-center btn-primary">Start Free Trial</Link>
          </div>
        )}
=======
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="bg-primary-600 rounded-lg p-2 shadow-sm">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-gray-900">SmartSchool</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">How it works</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Pricing</a>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/login" className="hidden sm:block text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Login
              </Link>
              <Link to="/signup" className="btn-primary shadow-lg shadow-primary-500/30 hover:-translate-y-0.5 transition-transform duration-300">
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden relative">
<<<<<<< HEAD
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none bg-gray-50">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <motion.div 
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-primary-400/20 blur-[120px]" 
          />
          <motion.div 
            animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] rounded-full bg-green-400/20 blur-[120px]" 
          />
=======
        {/* Premium Animated Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none bg-gray-50">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <motion.div 
            animate={{ 
              x: [0, 100, 0], 
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear" 
            }}
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary-400/20 blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              x: [0, -100, 0], 
              y: [0, -50, 0],
              scale: [1, 1.5, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[40%] left-[20%] w-[30%] h-[30%] rounded-full bg-purple-400/20 blur-[100px]" 
          />

          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-500/30 rounded-full"
              initial={{
                x: Math.random() * 100 + "vw",
                y: Math.random() * 100 + "vh",
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [null, Math.random() * -200 - 100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
<<<<<<< HEAD
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 font-semibold text-sm mb-8 border border-green-200 shadow-sm"
          >
            <span className="text-lg">🇵🇰</span>
            Trusted by 200+ Schools across Pakistan
          </motion.div>
          
=======
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 font-semibold text-sm mb-8 border border-primary-100"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary-600 animate-pulse"></span>
            SmartSchool OS is now live!
          </motion.div>
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
<<<<<<< HEAD
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto font-['Outfit']"
          >
            Pakistan's #1 School Management System <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">— Setup in 5 Minutes</span>
          </motion.h1>
          
=======
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-8 max-w-4xl mx-auto"
          >
            Intelligence for Every <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">Classroom</span>
          </motion.h1>
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
<<<<<<< HEAD
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Manage fees, attendance, exams, and reports in one simple dashboard — no technical skills required. Perfectly designed for local schools and academies.
          </motion.p>
          
=======
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Empower your institution with a unified OS that simplifies administrative tasks, automates workflows, and provides actionable insights for educators.
          </motion.p>
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/signup" className="btn-primary text-lg px-8 py-4 shadow-xl shadow-primary-500/20 hover:-translate-y-1 transition-all duration-300">
              Start Free Trial
            </Link>
<<<<<<< HEAD
            <button onClick={handleDemoLogin} className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2 hover:-translate-y-1 transition-all duration-300 bg-white">
              <Play className="h-5 w-5 fill-gray-700" /> Book Live Demo
            </button>
          </motion.div>

=======
            <Link to="/login" className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2 hover:-translate-y-1 transition-all duration-300 bg-white">
              <Play className="h-5 w-5" /> Watch Demo
            </Link>
          </motion.div>

          {/* High Quality Dashboard Mockup */}
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
<<<<<<< HEAD
            className="mt-16 relative max-w-5xl mx-auto group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent z-10 bottom-0 h-32" />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
=======
            className="mt-20 relative max-w-5xl mx-auto group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent z-10 bottom-0 h-32" />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
            <div className="relative rounded-2xl border border-gray-200/60 bg-white shadow-2xl shadow-gray-200/50 overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
              <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
<<<<<<< HEAD
                <div className="ml-4 text-xs text-gray-400 font-medium">SmartSchooler OS</div>
              </div>
              <img src={dashboardPreview} alt="SmartSchooler Dashboard" className="w-full h-auto object-cover" />
=======
              </div>
              <img src={dashboardPreview} alt="SmartSchool OS Dashboard Preview" className="w-full h-auto object-cover" />
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
            </div>
          </motion.div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Trust Section */}
      <div className="bg-white border-y border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            <div>
              <div className="text-4xl font-black text-gray-900 font-['Outfit']">200+</div>
              <div className="text-gray-500 mt-1 font-medium">Active Schools</div>
            </div>
            <div>
              <div className="text-4xl font-black text-gray-900 font-['Outfit']">50k+</div>
              <div className="text-gray-500 mt-1 font-medium">Students Managed</div>
            </div>
            <div>
              <div className="text-4xl font-black text-gray-900 font-['Outfit']">99.9%</div>
              <div className="text-gray-500 mt-1 font-medium">System Uptime</div>
            </div>
            <div>
              <div className="flex justify-center items-center gap-1 text-yellow-400 mb-1">
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div className="text-gray-500 font-medium">4.9/5 Average Rating</div>
            </div>
=======
      {/* Trusted By / Logos */}
      <div className="border-y border-gray-200 bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Trusted by leading institutions worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Dummy Logos */}
            <div className="text-xl font-black italic">EduNova</div>
            <div className="text-xl font-bold font-serif">PinnacleAcademy</div>
            <div className="text-xl font-black tracking-tighter">VANGUARD</div>
            <div className="text-xl font-bold">Horizon High</div>
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
<<<<<<< HEAD
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Everything You Need</h2>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 font-['Outfit']">Powerful Features, Simple Interface</h2>
            <p className="text-lg text-gray-600">Built specifically to solve the daily challenges of Pakistani educational institutes.</p>
=======
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Centralized Command Center</h2>
            <p className="text-lg text-gray-600">One platform to manage everything from student enrollment to institutional financial health.</p>
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
<<<<<<< HEAD
            <motion.div variants={staggerItem} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gray-100 overflow-hidden relative">
                <img src={featureFees} alt="Fee Management" className="w-full h-full object-cover object-top opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
              </div>
              <div className="p-8 pt-2 flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-100 rounded-lg text-green-600"><CreditCard className="w-5 h-5" /></div>
                  <h3 className="text-xl font-bold text-gray-900">💰 Fee Management</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">Track payments, manage dues, and generate professional receipts instantly. Send automated WhatsApp/SMS reminders for pending fees.</p>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gray-100 overflow-hidden relative">
                <img src={featureAttendance} alt="Attendance Tracking" className="w-full h-full object-cover object-top opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
              </div>
              <div className="p-8 pt-2 flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><CalendarCheck className="w-5 h-5" /></div>
                  <h3 className="text-xl font-bold text-gray-900">📊 Attendance</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">Mark student and staff attendance in seconds. Instantly notify parents via SMS if a student is absent.</p>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-48 bg-primary-50 overflow-hidden relative flex items-center justify-center">
                <FileEdit className="w-20 h-20 text-primary-200" />
              </div>
              <div className="p-8 pt-6 flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600"><FileEdit className="w-5 h-5" /></div>
                  <h3 className="text-xl font-bold text-gray-900">📝 Exams & Results</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">Create exams, enter marks easily, and automatically generate beautiful printable report cards with grading.</p>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><Users className="w-5 h-5" /></div>
                <h3 className="text-xl font-bold text-gray-900">👨‍🎓 Student Profiles</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Maintain complete digital records. Add family details, contact numbers, academic history, and uploaded documents in one place.</p>
            </motion.div>

            <motion.div variants={staggerItem} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><BookOpen className="w-5 h-5" /></div>
                <h3 className="text-xl font-bold text-gray-900">🏫 Class Management</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Organize classes, sections, and subjects. Assign teachers to specific classes and manage timetables efficiently.</p>
            </motion.div>

            <motion.div variants={staggerItem} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-teal-100 rounded-lg text-teal-600"><PieChart className="w-5 h-5" /></div>
                <h3 className="text-xl font-bold text-gray-900">📈 Reports & Analytics</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Get a bird's-eye view of your school's health. Financial reports, defaulter lists, and attendance summaries available with one click.</p>
            </motion.div>
=======
            {[
              { icon: Users, title: 'Students', desc: 'Maintain 360-degree student profiles. Track academic progress, behavioral insights, and extracurriculars.' },
              { icon: CreditCard, title: 'Fees', desc: 'Automate invoicing, track payments, and send reminders effortlessly. Secure multi-channel processing.' },
              { icon: CalendarCheck, title: 'Attendance', desc: 'Zero-log attendance daily for teachers. Automated SMS/Email alerts for guardians and monthly reports.' },
              { icon: BookOpen, title: 'Classes', desc: 'Manage curriculums, organize classrooms, and delegate subjects to teachers systematically.' },
              { icon: FileEdit, title: 'Exams', desc: 'Generate report cards instantly with auto-calculated grades and rankings based on exam results.' },
              { icon: PieChart, title: 'Reports', desc: 'Data-driven decisions start here. Generate institutional analytics, performance heatmaps, and ROI.' }
            ].map((feature, i) => (
              <motion.div key={i} variants={staggerItem} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
          </motion.div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Testimonials */}
      <div id="testimonials" className="py-24 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 font-['Outfit']">Loved by Schools Across Pakistan</h2>
            <p className="text-lg text-gray-600">See what administrators are saying about SmartSchooler.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "SmartSchooler ne hamare school ka kaam 10x fast kar diya! Pehle fees register pe likhte thay, ab sab digital hai. Very easy to use.",
                name: "Principal Ahmed",
                school: "DPS Lahore"
              },
              {
                quote: "The best feature is the fee management. Automatic dues calculation aur receipt printing ne hamara bohut time save kiya hai.",
                name: "Admin Officer",
                school: "The City School Campus"
              },
              {
                quote: "Best investment for any school in Pakistan. Mobile par bhi perfect chalta hai, I can monitor everything from home.",
                name: "Mr. Farhan",
                school: "Beaconhouse Partner"
              }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 relative"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-200" />
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-700 italic mb-6 relative z-10">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.school}</div>
                  </div>
                </div>
              </motion.div>
            ))}
=======
      {/* How It Works */}
      <div id="how-it-works" className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                Seamless Adoption.<br />
                <span className="text-primary-600">Exponential Growth.</span>
              </h2>
              <div className="space-y-8 mt-12">
                {[
                  { step: '01', title: 'Onboard', desc: 'Migrate your existing data to us securely. Our customer success team guides you.' },
                  { step: '02', title: 'Manage', desc: 'Assign roles to staff, set up fee structures, and begin daily operations via intuitive interfaces.' },
                  { step: '03', title: 'Scale', desc: 'Analyze performance dashboards and scale your institution with AI-driven forecasting.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-4xl font-black text-gray-200">{item.step}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-600 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl shadow-primary-600/30"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-500 rounded-full blur-3xl opacity-50" />
              <Star className="h-10 w-10 text-yellow-400 fill-yellow-400 mb-8" />
              <blockquote className="text-2xl font-medium leading-relaxed mb-8 relative z-10">
                "SmartSchool transformed our administrative chaos into a streamlined symphony. We've reduced overhead by 40% in just one academic year."
              </blockquote>
              <div className="flex items-center gap-4 relative z-10">
                <div className="h-12 w-12 rounded-full border-2 border-primary-400 bg-primary-700 flex items-center justify-center font-bold">
                  JS
                </div>
                <div>
                  <div className="font-bold">Jonathan Smith</div>
                  <div className="text-primary-200 text-sm">Principal, Horizon High</div>
                </div>
              </div>
            </motion.div>
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<<<<<<< HEAD
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 font-['Outfit']">Simple & Affordable Pricing</h2>
          <p className="text-lg text-gray-600 mb-10">No hidden fees, no installation charges. Pay only for what you use.</p>

          {/* Billing Toggle */}
          <div className="flex justify-center items-center gap-4 mb-16">
            <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>Monthly Billing</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-primary-600 transition-colors focus:outline-none"
            >
              <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${isYearly ? 'translate-x-8' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly Billing <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-bold">Save 20%</span>
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
            {/* Basic Plan */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
              <p className="text-gray-500 text-sm mb-6">Perfect for small academies</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-gray-900">Rs. {isYearly ? '1,599' : '1,999'}</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Up to 200 Students', 'Fee & Attendance Management', 'Basic Reports', 'Email Support'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <Link to="/signup" className="block w-full py-3 text-center rounded-xl font-semibold bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200 transition-colors">
                Start Free Trial
              </Link>
            </div>

            {/* Standard Plan */}
            <div className="bg-white rounded-3xl p-8 border-2 border-primary-500 shadow-xl shadow-primary-500/10 relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">
                Most Popular ⭐
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Standard</h3>
              <p className="text-gray-500 text-sm mb-6">For growing mid-sized schools</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-gray-900">Rs. {isYearly ? '2,399' : '2,999'}</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Up to 500 Students', 'Exam & Result Generation', 'Staff Management', 'WhatsApp Support'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <Check className="h-5 w-5 text-primary-500 flex-shrink-0" /> {feature}
=======
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Simple, Scalable Pricing</h2>
          <p className="text-lg text-gray-600 mb-16">Choose the plan that fits your institution's size.</p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
            {/* Starter */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-gray-900">$199</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Up to 500 Students', 'Basic Fee Management', 'Attendance Tracking', 'Email Support'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-primary-500 flex-shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <Link to="/login" className="block w-full py-3 text-center rounded-xl font-semibold bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors border border-primary-100">
                Get Started
              </Link>
            </div>

            {/* Professional */}
            <div className="bg-white rounded-3xl p-8 border-2 border-primary-500 shadow-xl shadow-primary-500/10 relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-gray-900">$499</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Up to 2,000 Students', 'Advanced Analytics', 'Automated SMS Alerts', 'Inventory Management', 'Priority Support'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-primary-500 flex-shrink-0" /> {feature}
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
                  </li>
                ))}
              </ul>
              <Link to="/signup" className="block w-full py-3 text-center rounded-xl font-semibold bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg transition-all">
<<<<<<< HEAD
                Get Standard
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium</h3>
              <p className="text-gray-500 text-sm mb-6">Full features for large campuses</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-gray-900">Rs. {isYearly ? '6,399' : '7,999'}</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Unlimited Students', 'Advanced Financial Reports', 'Multi-user Roles & Permissions', 'Dedicated Account Manager'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <Check className="h-5 w-5 text-gray-700 flex-shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/923160947615" target="_blank" rel="noreferrer" className="block w-full py-3 text-center rounded-xl font-semibold bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200 transition-colors">
                Contact via WhatsApp
              </a>
=======
                Start Free Trial
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-gray-900">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Unlimited Students', 'White-label Mobile App', 'Multi-campus Centralized', 'Dedicated Success Manager'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-gray-400 flex-shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <Link to="/login" className="block w-full py-3 text-center rounded-xl font-semibold bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 transition-colors">
                Contact Sales
              </Link>
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Demo Section & About */}
      <div className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Demo CTA */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-3xl opacity-20" />
              <h2 className="text-3xl font-bold mb-4">Experience SmartSchooler Live</h2>
              <p className="text-gray-300 mb-8">Don't just take our word for it. Try our fully functional demo system right now. No credit card required.</p>
              
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10 mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-400">Demo Email</span>
                  <span className="font-mono text-primary-300 select-all">demo@smartschooler.dev</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Demo Password</span>
                  <span className="font-mono text-primary-300 select-all">123456</span>
                </div>
              </div>
              
              <button onClick={handleDemoLogin} className="w-full btn-primary text-lg py-4 flex justify-center items-center gap-2">
                Access Live Demo Now <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* About Us */}
            <div>
              <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">About Us</h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-['Outfit']">Built for Pakistan's Education Sector</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We observed that most school management systems are either too expensive, too complicated, or not tailored for the local market. SmartSchooler was built to bridge this gap.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our mission is to empower every school, academy, and coaching center in Pakistan to digitize their operations without needing a dedicated IT team.
              </p>
              
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center overflow-hidden">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">SmartSchooler Team</div>
                  <div className="text-primary-600 text-sm font-medium">Founders & Developers</div>
                </div>
              </div>
            </div>

=======
      {/* CTA Bottom */}
      <div className="bg-gray-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-extrabold text-white mb-6">Ready to modernize your institution?</h2>
          <p className="text-xl text-gray-400 mb-10">Join 3,500+ schools worldwide leveraging the power of SmartSchool OS.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup" className="btn-primary text-lg px-8 py-4 shadow-xl hover:-translate-y-1 transition-all">
              Start Your Free Trial
            </Link>
            <Link to="/signup" className="bg-gray-800 text-white font-semibold flex items-center justify-center rounded-xl text-lg px-8 py-4 hover:bg-gray-700 transition-all border border-gray-700 hover:-translate-y-1 shadow-xl">
              Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Contact Section */}
      <div id="contact" className="bg-gray-50 py-24 border-t border-gray-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4 font-['Outfit']">Get in Touch</h2>
              <p className="text-lg text-gray-600">Have questions? Our team is here to help you get started.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <a href="https://wa.me/923160947615" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">WhatsApp / Call</div>
                    <div className="text-xl font-bold text-gray-900">0316 0947615</div>
                  </div>
                </a>
                
                <a href="mailto:info@smartschooler.dev" className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Email Us</div>
                    <div className="text-xl font-bold text-gray-900">info@smartschooler.dev</div>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Office</div>
                    <div className="text-lg font-bold text-gray-900">Lahore, Pakistan</div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We will contact you soon."); }}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input type="text" required className="input-field w-full" placeholder="Ali Khan" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
                    <input type="text" required className="input-field w-full" placeholder="e.g. Unique High School" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" required className="input-field w-full" placeholder="03xx xxxxxxx" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea rows="3" className="input-field w-full resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="w-full btn-primary py-3 font-semibold text-lg">Send Message</button>
                </form>
              </div>
            </div>
         </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary-500 rounded-lg p-2">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span className="font-extrabold text-2xl text-white tracking-tight">SmartSchooler</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">
                Pakistan's most reliable and easy-to-use school management system. Simplifying education administration for everyone.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-colors">FB</a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-colors">IG</a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-colors">IN</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Product</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><button onClick={handleDemoLogin} className="text-gray-400 hover:text-white transition-colors">Live Demo</button></li>
                <li><Link to="/login" className="text-gray-400 hover:text-white transition-colors">Admin Login</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Company</h4>
              <ul className="space-y-3">
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} SmartSchooler. All rights reserved.</p>
            <p>Made with ❤️ in Pakistan</p>
=======
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-gray-900 rounded-lg p-1.5">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="font-extrabold text-xl text-gray-900">SmartSchool</span>
          </div>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} SmartSchool OS. All rights reserved.</p>
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
>>>>>>> 8c21f9c51436510471076b06366ab8a177b4483e
          </div>
        </div>
      </footer>
    </div>
  );
}
