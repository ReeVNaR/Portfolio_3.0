import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSend, FiMessageCircle } from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm Aura. Ask me anything about Ranveer's projects or skills!", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const maxRetries = 3;
    let lastError;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{
                parts: [{ 
                  text: `You are Aura, an AI assistant on Ranveer Ghorpade's portfolio website. Answer questions about his projects, skills, and tech stack directly and concisely.
Be friendly but skip greetings like "Hey there", "Hello", "Hi there" etc. Just answer the question directly.
Do NOT use markdown formatting - no asterisks, hashtags, bold, italics, or special characters.
Use plain text only with line breaks to separate ideas.

SYSTEM: Ranveer's Portfolio Data:
${JSON.stringify(portfolioData, null, 2)}

USER: ${input}` 
                }]
              }]
            })
          }
        );

        if (!response.ok) {
          if (response.status === 503 && attempt < maxRetries) {
            lastError = new Error('Service temporarily unavailable. Retrying...');
            await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
            continue;
          }
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        
        if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
          throw new Error('Invalid response format');
        }

        const aiText = data.candidates[0].content.parts[0].text;
        const aiMessage = { id: Date.now() + 1, text: aiText, sender: 'ai' };
        setMessages(prev => [...prev, aiMessage]);
        setLoading(false);
        return;
      } catch (error) {
        lastError = error;
        if (attempt === maxRetries) break;
      }
    }

    console.error('Error:', lastError);
    const errorMessage = { 
      id: Date.now() + 1, 
      text: lastError?.message?.includes('503') 
        ? "The AI service is busy right now. Please try again in a moment."
        : "Sorry, I encountered an error. Please try again.", 
      sender: 'ai' 
    };
    setMessages(prev => [...prev, errorMessage]);
    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 p-4 sm:p-5 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 z-40 transition-all duration-300"
      >
        <FiMessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 sm:hidden bg-black/40 backdrop-blur-sm z-40"
            />
            
            <motion.div
              initial={{ x: 400, opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: 400, opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-16 left-0 right-0 bottom-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-96 sm:h-[600px] bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-2xl sm:rounded-2xl z-50 flex flex-col border border-gray-200 dark:border-gray-800"
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-3 px-4 py-5 sm:px-6 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white sm:rounded-t-2xl flex-shrink-0 shadow-md">
                <div>
                  <h2 className="font-bold text-lg sm:text-xl">Aura</h2>
                  <p className="text-xs text-blue-100">Ask about my projects</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-all duration-200"
                >
                  <FiX className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed font-medium transition-all duration-200 ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none shadow-md'
                          : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-bl-none shadow-sm'
                      }`}
                    >
                      <p className="whitespace-pre-wrap break-words">{message.text}</p>
                    </div>
                  </motion.div>
                ))}
                {loading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-200 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm">
                      <div className="flex gap-2">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ y: [0, -6, 0] }}
                            transition={{ repeat: Infinity, delay: i * 0.15, duration: 0.6 }}
                            className="w-2.5 h-2.5 bg-gray-500 dark:bg-gray-400 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Development Notice */}
              <div className="px-4 py-2 bg-amber-50 dark:bg-amber-900/20 border-t border-amber-200 dark:border-amber-800/50 text-center text-xs text-amber-700 dark:text-amber-300">
                🚀 Still in development - might have some errors. Try again if any issues occur.
              </div>

              {/* Input Form */}
              <form onSubmit={sendMessage} className="p-4 sm:p-5 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sm:rounded-b-2xl flex-shrink-0 shadow-lg">
                <div className="flex gap-3 items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me something..."
                    className="flex-1 px-4 py-3 text-sm sm:text-base border-2 border-gray-200 dark:border-gray-700 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={loading}
                    className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <FiSend className="w-5 h-5" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;
