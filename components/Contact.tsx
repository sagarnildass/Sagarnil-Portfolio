import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Client } from "@gradio/client";

export const Contact = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{type: 'user' | 'bot', content: string}[]>([]);
  // Store history in format expected by Gradio ChatInterface
  const [chatHistory, setChatHistory] = useState<Array<{role: string, content: string}>>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [client, setClient] = useState<any>(null);

  useEffect(() => {
    // Initialize client when component mounts
    const initClient = async () => {
      try {
        const newClient = await Client.connect("sagarnildass/career_conversation");
        setClient(newClient);
      } catch (err) {
        console.error("Failed to connect to Hugging Face Space:", err);
      }
    };
    
    if (open && !client) {
      initClient();
    }
    
    // Auto-focus the input field when chat is opened
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open, client]);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const dropIn = {
    hidden: {
      y: "4vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "stiff",
        damping: 25,
      },
    },
    exit: {
      y: "4vh",
      opacity: 0,
    },
  };

  // Create a simplified conversation for UI display
  const getConversationHistory = () => {
    if (chatHistory.length === 0) return [];
    
    // Convert the API history format to the UI format
    const conversationPairs = [];
    for (let i = 0; i < chatHistory.length; i += 2) {
      if (i + 1 < chatHistory.length) {
        conversationPairs.push([
          chatHistory[i].content,
          chatHistory[i + 1].content
        ]);
      }
    }
    return conversationPairs;
  };

  const handleSendMessage = async () => {
    if (!input.trim() || loading || !client) return;
    
    const userMessage = input.trim();
    setInput("");
    setLoading(true);
    
    // Add user message to chat UI
    setMessages(prev => [...prev, {type: 'user', content: userMessage}]);
    
    try {
      // Create the history in the correct format: array of (user, assistant) pairs
      const historyForAPI = getConversationHistory();
      
      // Send to API
      const result = await client.predict("/chat", [userMessage, historyForAPI]);
      
      // Get the bot response
      const botResponse = result.data;
      
      // Update UI
      setMessages(prev => [...prev, {type: 'bot', content: botResponse}]);
      
      // Update history with the new exchange
      setChatHistory(prev => [
        ...prev,
        { role: "user", content: userMessage },
        { role: "assistant", content: botResponse }
      ]);
    } catch (err) {
      console.error("Error sending message:", err);
      setMessages(prev => [...prev, {type: 'bot', content: "Sorry, I couldn't process your request. Please try again later."}]);
    } finally {
      setLoading(false);
      // Focus back on input after sending message
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };

  const handleToggleChat = () => {
    setOpen(!open);
    if (!open) {
      setMessages([]);
      setChatHistory([]);
    }
  };

  return (
    <AnimatePresence initial={false} onExitComplete={() => null}>
      <div className="fixed right-4 md:right-10 bottom-10 flex flex-col items-end z-[99999]">
        {open && (
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mb-4 rounded-xl shadow-2xl bg-zinc-800 flex flex-col overflow-hidden mx-4 md:mx-0 w-80 md:w-96"
          >
            <div className="p-4 bg-zinc-700">
              <h2 className="text-zinc-200 font-bold text-sm md:text-xl">
                Chat with my AI Avatar
              </h2>
              <small className="hidden md:block text-xs text-zinc-400">
                Ask me anything about my career or work!
              </small>
            </div>
            
            <div className="content flex flex-col bg-zinc-800 h-96 md:h-[40rem]">
              <div className="flex-1 p-4 overflow-y-auto">
                {messages.length === 0 ? (
                  <div className="text-zinc-500 text-center mt-4">
                    Send a message to start the conversation!
                  </div>
                ) : (
                  messages.map((msg, index) => (
                    <div 
                      key={index} 
                      className={`mb-3 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}
                    >
                      <div 
                        className={`inline-block px-3 py-2 rounded-lg ${
                          msg.type === 'user' 
                            ? 'bg-cyan-700 text-white' 
                            : 'bg-zinc-700 text-zinc-200'
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>
              
              <div className="p-3 border-t border-zinc-700 flex">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  disabled={loading || !client}
                  className="flex-1 text-zinc-400 rounded-md border bg-zinc-800 border-zinc-700 py-2 px-3 focus:outline-none focus:border-zinc-700"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={loading || !input.trim() || !client}
                  className={`ml-2 bg-cyan-700 text-white p-2 rounded-md ${
                    loading || !input.trim() || !client ? 'opacity-50 cursor-not-allowed' : 'hover:bg-cyan-600'
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center h-6 w-6">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
        <button
          onClick={handleToggleChat}
          className="bg-cyan-700 w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 hover:shadow-xl transition duration-200 shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-zinc-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        </button>
      </div>
    </AnimatePresence>
  );
};
