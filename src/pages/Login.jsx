import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { GraduationCap, LogIn, CheckCircle, Eye, EyeOff, Info } from 'lucide-react';
import SchoolBackgroundAnimation from '../components/SchoolBackgroundAnimation';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const isDemo = location.state?.isDemo || false;
  
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(isDemo ? 'demo@smartschooler.dev' : 'admin@smartschool.edu');
  const [password, setPassword] = useState(isDemo ? '123456' : 'password');

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-200/50 blur-[100px]" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-blue-200/50 blur-[120px]" />
      </div>

      <SchoolBackgroundAnimation />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <Link to="/" className="bg-primary-600 rounded-2xl p-3 shadow-lg hover:bg-primary-700 transition-colors">
            <GraduationCap className="h-10 w-10 text-white" />
          </Link>
        </motion.div>
        
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 tracking-tight">
                Welcome Back
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Sign in to access your dashboard
              </p>

              {isDemo && (
                <div className="mt-4 bg-blue-50 text-blue-700 p-3 rounded-lg text-sm flex items-start gap-2 border border-blue-100 mx-4 sm:mx-10">
                  <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p><strong>Demo Mode Active.</strong> Credentials have been pre-filled. Just click Sign In to continue.</p>
                </div>
              )}

              <div className="mt-6 bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-gray-100">
                <form className="space-y-6" onSubmit={handleLogin}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1 relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-field w-full pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <Eye className="h-5 w-5" aria-hidden="true" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className="font-medium text-primary-600 hover:text-primary-500 transition-colors">
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full btn-primary flex justify-center py-2.5 items-center gap-2 transition-all hover:shadow-lg hover:shadow-primary-600/30 font-semibold"
                    >
                      <LogIn className="h-4 w-4" /> Sign in
                    </button>
                  </div>
                  
                  <div className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/signup" className="font-bold text-primary-600 hover:text-primary-500 transition-colors">
                      Sign up for free
                    </Link>
                  </div>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="mt-12 bg-white py-12 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-gray-100 text-center"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2, stiffness: 200 }}
                className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="h-10 w-10 text-success" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Login Successful!</h3>
              <p className="text-gray-500 animate-pulse">Redirecting you to dashboard...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
