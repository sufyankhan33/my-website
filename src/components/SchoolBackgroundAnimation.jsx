import { motion } from 'framer-motion';

export default function SchoolBackgroundAnimation() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-40 overflow-hidden pointer-events-none z-0">
      {/* Scenery - Trees & Bushes */}
      <div className="absolute bottom-4 left-[10%] opacity-50">
        <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="#86efac"/>
          <rect x="16" y="30" width="8" height="30" fill="#78350f"/>
        </svg>
      </div>
      <div className="absolute bottom-4 left-[40%] opacity-50">
        <svg width="50" height="70" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="15" r="15" fill="#4ade80"/>
          <circle cx="10" cy="25" r="10" fill="#4ade80"/>
          <circle cx="30" cy="25" r="10" fill="#4ade80"/>
          <rect x="16" y="30" width="8" height="30" fill="#78350f"/>
        </svg>
      </div>
      <div className="absolute bottom-4 left-[75%] opacity-50">
        <svg width="35" height="50" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="#bbf7d0"/>
          <rect x="16" y="30" width="8" height="30" fill="#78350f"/>
        </svg>
      </div>

      {/* Street Line */}
      <div className="absolute bottom-4 left-0 w-full h-1.5 bg-gray-300 rounded-full"></div>
      
      {/* The Bus */}
      <motion.div 
        className="absolute bottom-5"
        initial={{ x: "-30vw" }}
        animate={{ x: "120vw" }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      >
        <svg width="180" height="90" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bus Shadow */}
          <ellipse cx="60" cy="55" rx="55" ry="5" fill="rgba(0,0,0,0.1)"/>
          {/* Body */}
          <path d="M15 10H100C108.284 10 115 16.7157 115 25V45C115 47.7614 112.761 50 110 50H10C7.23858 50 5 47.7614 5 45V20C5 14.4772 9.47715 10 15 10Z" fill="#FBBF24"/>
          {/* Stripe */}
          <rect x="5" y="33" width="110" height="3" fill="#1F2937"/>
          {/* Windows */}
          <rect x="20" y="15" width="20" height="15" rx="2" fill="#93C5FD"/>
          <rect x="50" y="15" width="20" height="15" rx="2" fill="#93C5FD"/>
          <rect x="80" y="15" width="20" height="15" rx="2" fill="#93C5FD"/>
          {/* Driver details */}
          <circle cx="95" cy="22" r="5" fill="#374151"/>
          <path d="M92 27H98V30H92V27Z" fill="#3B82F6"/>
          {/* Lights */}
          <rect x="113" y="40" width="4" height="6" rx="1" fill="#FCD34D"/>
          <rect x="3" y="40" width="4" height="6" rx="1" fill="#EF4444"/>
          {/* Wheels */}
          <motion.g animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} style={{ transformOrigin: '25px 50px' }}>
            <circle cx="25" cy="50" r="8" fill="#1F2937"/>
            <circle cx="25" cy="50" r="3" fill="#D1D5DB"/>
            <line x1="25" y1="42" x2="25" y2="58" stroke="#9CA3AF" strokeWidth="1" />
            <line x1="17" y1="50" x2="33" y2="50" stroke="#9CA3AF" strokeWidth="1" />
          </motion.g>
          <motion.g animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} style={{ transformOrigin: '95px 50px' }}>
            <circle cx="95" cy="50" r="8" fill="#1F2937"/>
            <circle cx="95" cy="50" r="3" fill="#D1D5DB"/>
            <line x1="95" y1="42" x2="95" y2="58" stroke="#9CA3AF" strokeWidth="1" />
            <line x1="87" y1="50" x2="103" y2="50" stroke="#9CA3AF" strokeWidth="1" />
          </motion.g>
        </svg>
      </motion.div>

      {/* The Kid 1 */}
      <motion.div 
        className="absolute bottom-5"
        initial={{ x: "-10vw" }}
        animate={{ x: "110vw" }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear", delay: 2 }}
      >
        <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}>
          <svg width="60" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="20" cy="55" rx="15" ry="3" fill="rgba(0,0,0,0.1)"/>
            {/* Backpack */}
            <rect x="4" y="26" width="10" height="18" rx="3" fill="#EF4444"/>
            <rect x="6" y="29" width="4" height="10" rx="1" fill="#DC2626"/>
            {/* Head */}
            <circle cx="20" cy="15" r="9" fill="#FDE68A"/>
            {/* Hair */}
            <path d="M11 15C11 10 15 6 20 6C25 6 29 10 29 15" fill="#92400E"/>
            {/* Body */}
            <rect x="12" y="24" width="16" height="22" rx="5" fill="#3B82F6"/>
            <rect x="12" y="40" width="16" height="6" fill="#1E40AF"/>
            {/* Arms */}
            <motion.rect animate={{ rotate: [-20, 20, -20] }} transition={{ repeat: Infinity, duration: 0.5 }} style={{ transformOrigin: '20px 28px' }} x="18" y="26" width="4" height="14" rx="2" fill="#FDE68A"/>
            {/* Legs */}
            <motion.rect animate={{ rotate: [-30, 30, -30] }} transition={{ repeat: Infinity, duration: 0.5 }} style={{ transformOrigin: '16px 45px' }} x="14" y="45" width="4" height="12" rx="2" fill="#1F2937"/>
            <motion.rect animate={{ rotate: [30, -30, 30] }} transition={{ repeat: Infinity, duration: 0.5 }} style={{ transformOrigin: '24px 45px' }} x="22" y="45" width="4" height="12" rx="2" fill="#1F2937"/>
          </svg>
        </motion.div>
      </motion.div>
      
      {/* The Kid 2 */}
      <motion.div 
        className="absolute bottom-5"
        initial={{ x: "-15vw" }}
        animate={{ x: "115vw" }}
        transition={{ repeat: Infinity, duration: 28, ease: "linear", delay: 7 }}
      >
        <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}>
          <svg width="50" height="50" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="20" cy="55" rx="15" ry="3" fill="rgba(0,0,0,0.1)"/>
            {/* Backpack */}
            <rect x="6" y="27" width="8" height="15" rx="2" fill="#F59E0B"/>
            {/* Head */}
            <circle cx="20" cy="15" r="8" fill="#FECACA"/>
            {/* Hair */}
            <circle cx="16" cy="10" r="4" fill="#000000"/>
            <circle cx="24" cy="10" r="4" fill="#000000"/>
            {/* Body */}
            <rect x="12" y="24" width="16" height="20" rx="4" fill="#10B981"/>
            <rect x="12" y="38" width="16" height="6" fill="#047857"/>
            {/* Arms */}
            <motion.rect animate={{ rotate: [-25, 25, -25] }} transition={{ repeat: Infinity, duration: 0.6 }} style={{ transformOrigin: '20px 28px' }} x="18" y="26" width="4" height="12" rx="2" fill="#FECACA"/>
            {/* Legs */}
            <motion.rect animate={{ rotate: [-25, 25, -25] }} transition={{ repeat: Infinity, duration: 0.6 }} style={{ transformOrigin: '16px 45px' }} x="14" y="44" width="4" height="12" rx="2" fill="#1F2937"/>
            <motion.rect animate={{ rotate: [25, -25, 25] }} transition={{ repeat: Infinity, duration: 0.6 }} style={{ transformOrigin: '24px 45px' }} x="22" y="44" width="4" height="12" rx="2" fill="#1F2937"/>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
