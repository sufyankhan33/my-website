import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Send, MoreVertical, Phone, Video, Paperclip } from 'lucide-react';

const conversations = [
  { id: 1, name: 'Alice Freeman', role: 'Student', avatar: 'AF', lastMsg: 'Thank you for the update!', time: '10:30 AM', unread: 2 },
  { id: 2, name: 'Mr. Smith', role: 'Teacher', avatar: 'MS', lastMsg: 'Can we schedule a meeting?', time: 'Yesterday', unread: 0 },
  { id: 3, name: 'Admin Office', role: 'Staff', avatar: 'AO', lastMsg: 'The new guidelines are out.', time: 'Monday', unread: 0 },
  { id: 4, name: 'Bobby Singer', role: 'Student', avatar: 'BS', lastMsg: 'I will submit the assignment tomorrow.', time: 'Oct 24', unread: 0 },
];

const messages_data = {
  1: [
    { text: 'Hello, I have a question about my attendance.', sender: 'them', time: '10:15 AM' },
    { text: 'Sure, Alice. What seems to be the problem?', sender: 'me', time: '10:20 AM' },
    { text: 'It says I was absent yesterday, but I was in class.', sender: 'them', time: '10:25 AM' },
    { text: 'Let me look into that and update the system.', sender: 'me', time: '10:28 AM' },
    { text: 'Thank you for the update!', sender: 'them', time: '10:30 AM' },
  ]
};

export default function Messages() {
  const [activeChat, setActiveChat] = useState(conversations[0]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(messages_data);
  const [searchQuery, setSearchQuery] = useState('');  

  const filteredConversations = conversations.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.lastMsg.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMsg = { text: message, sender: 'me', time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) };
    setMessages({
      ...messages,
      [activeChat.id]: [...(messages[activeChat.id] || []), newMsg]
    });
    setMessage('');
  };

  const activeMessages = messages[activeChat.id] || [];

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-7rem)] flex flex-col md:flex-row gap-6 pb-6">
      {/* Left sidebar - Conversations list */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-2xl shadow-soft flex flex-col flex-shrink-0 border border-gray-100 overflow-hidden"
      >
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Messages</h2>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search messages..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-10 h-10 w-full"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide p-2 space-y-1">
          {filteredConversations.map((chat) => (
            <div 
              key={chat.id}
              onClick={() => setActiveChat(chat)}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${activeChat.id === chat.id ? 'bg-primary-50 border-primary-100 border' : 'hover:bg-gray-50 border border-transparent'}`}
            >
              <div className="relative flex-shrink-0">
                <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center font-bold text-sm ${activeChat.id === chat.id ? 'bg-primary-600 text-white' : 'bg-primary-100 text-primary-700'}`}>
                  {chat.avatar}
                </div>
                {chat.unread > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-danger flex items-center justify-center text-[10px] font-bold text-white rounded-full border-2 border-white">
                    {chat.unread}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className={`text-sm font-semibold truncate ${activeChat.id === chat.id ? 'text-primary-900' : 'text-gray-900'}`}>{chat.name}</h3>
                  <span className="text-xs text-gray-400 flex-shrink-0">{chat.time}</span>
                </div>
                <p className="text-xs text-gray-500 truncate">{chat.lastMsg}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right side - Chat Area */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 bg-white rounded-2xl shadow-soft flex flex-col border border-gray-100 overflow-hidden mt-4 md:mt-0"
      >
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white/50 backdrop-blur-sm z-10">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
              {activeChat.avatar}
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">{activeChat.name}</h2>
              <p className="text-xs text-gray-500">{activeChat.role} • Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <button onClick={() => alert('Voice call feature coming soon!')} className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block" title="Voice Call"><Phone className="h-5 w-5" /></button>
            <button onClick={() => alert('Video call feature coming soon!')} className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block" title="Video Call"><Video className="h-5 w-5" /></button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><MoreVertical className="h-5 w-5" /></button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-gray-50/50">
          {activeMessages.length === 0 ? (
            <div className="h-full flex items-center justify-center text-gray-400">
              No messages yet. Start the conversation!
            </div>
          ) : (
             activeMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] sm:max-w-[70%] rounded-2xl px-4 py-2 ${
                  msg.sender === 'me' 
                    ? 'bg-primary-600 text-white rounded-br-sm shadow-md shadow-primary-600/20' 
                    : 'bg-white border border-gray-100 text-gray-800 rounded-bl-sm shadow-sm'
                }`}>
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-[10px] mt-1 text-right ${msg.sender === 'me' ? 'text-primary-200' : 'text-gray-400'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100 bg-white flex items-center gap-2 sm:gap-4">
          <button type="button" className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors flex-shrink-0 hidden sm:block">
            <Paperclip className="h-5 w-5" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-gray-100 border-transparent focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 rounded-full px-4 py-2 text-sm outline-none transition-all"
          />
          <button 
            type="submit" 
            disabled={!message.trim()}
            className="h-10 w-10 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 hover:bg-primary-700 hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100"
          >
            <Send className="h-4 w-4 ml-1" />
          </button>
        </form>
      </motion.div>
    </div>
  );
}
