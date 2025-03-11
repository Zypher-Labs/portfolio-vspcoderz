import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import React from 'react';

// Function to convert ANSI color codes to HTML
function ansiToHtml(text) {
  // Replace ANSI color codes with span elements
  const colorMap = {
    '\x1b[0m': '</span>',  // Reset
    '\x1b[1m': '<span style="font-weight: bold;">',  // Bold
    '\x1b[31m': '<span style="color: #ff5f56;">',  // Red
    '\x1b[32m': '<span style="color: #27c93f;">',  // Green
    '\x1b[33m': '<span style="color: #ffbd2e;">',  // Yellow
    '\x1b[34m': '<span style="color: #61afef;">',  // Blue
    '\x1b[35m': '<span style="color: #c678dd;">',  // Magenta
    '\x1b[36m': '<span style="color: #56b6c2;">',  // Cyan
    '\x1b[37m': '<span style="color: #dcdfe4;">'   // White
  };
  
  let result = text;
  
  // Replace all color codes with their HTML equivalents
  Object.keys(colorMap).forEach(code => {
    result = result.split(code).join(colorMap[code]);
  });
  
  return result;
}

export function Terminal({ className }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Portfolio OS Terminal' },
    { type: 'output', text: 'Type "help" to see available commands' },
  ]);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add command to history
    setHistory((prev) => [...prev, { type: 'command', text: `$ ${input}` }]);
    
    // Process command
    processCommand(input);
    
    // Clear input
    setInput('');
  };

  const processCommand = (cmd) => {
    const command = cmd.trim().toLowerCase();
    
    switch (command) {
      case 'help':
        setHistory((prev) => [
          ...prev,
          { 
            type: 'output', 
            text: `Available commands:
  help - Show this help message
  about - About me
  skills - My technical skills
  projects - My projects
  contact - Contact information
  clear - Clear terminal
  date - Show current date and time
  neofetch - Show system information with ASCII art` 
          }
        ]);
        break;
      case 'about':
        setHistory((prev) => [
          ...prev,
          { 
            type: 'output', 
            text: `I am a passionate developer with expertise in web development, 
focusing on creating beautiful and functional user experiences.` 
          }
        ]);
        break;
      case 'skills':
        setHistory((prev) => [
          ...prev,
          { 
            type: 'output', 
            text: `Technical Skills:
- Frontend: React, Vue, Angular, HTML, CSS, JavaScript
- Backend: Node.js, Express, Python, Django
- Database: MongoDB, PostgreSQL, MySQL
- DevOps: Docker, Kubernetes, AWS
- Other: Git, RESTful APIs, GraphQL` 
          }
        ]);
        break;
      case 'neofetch':
        const vAsciiArt = `
\x1b[36m _    _______ ____           \x1b[0m  \x1b[1mOS\x1b[0m: Portfolio OS v1.0.0
\x1b[36m| |  / / ___// __ \\          \x1b[0m  \x1b[1mHost\x1b[0m: React 19.0.0
\x1b[36m| | / /\\__ \\/ /_/ /          \x1b[0m  \x1b[1mKernel\x1b[0m: Vite 6.2.0
\x1b[36m| |/ /___/ / ____/           \x1b[0m  \x1b[1mUptime\x1b[0m: ${Math.floor(Math.random() * 24)} hours, ${Math.floor(Math.random() * 60)} mins
\x1b[36m|___//____/_/                \x1b[0m  \x1b[1mPackages\x1b[0m: ${Math.floor(Math.random() * 100) + 200} (npm)
\x1b[36m                             \x1b[0m  \x1b[1mShell\x1b[0m: Terminal.jsx
\x1b[36m                             \x1b[0m  \x1b[1mResolution\x1b[0m: ${window.innerWidth}x${window.innerHeight}
\x1b[36m                             \x1b[0m  \x1b[1mDE\x1b[0m: Custom Desktop Environment
\x1b[36m                             \x1b[0m  \x1b[1mWM\x1b[0m: Framer Motion
\x1b[36m                             \x1b[0m  \x1b[1mTheme\x1b[0m: macOS-inspired Dark
\x1b[36m                             \x1b[0m  \x1b[1mIcons\x1b[0m: react-icons/cg
\x1b[36m                             \x1b[0m  \x1b[1mTerminal\x1b[0m: Portfolio Terminal
\x1b[36m                             \x1b[0m  \x1b[1mCPU\x1b[0m: JavaScript V8 Engine
\x1b[36m                             \x1b[0m  \x1b[1mGPU\x1b[0m: WebGL Renderer
\x1b[36m                             \x1b[0m  \x1b[1mMemory\x1b[0m: ${Math.floor(Math.random() * 8) + 2}GB / 16GB
                                  
\x1b[31m●\x1b[32m●\x1b[33m●\x1b[34m●\x1b[35m●\x1b[36m●\x1b[37m●\x1b[0m  \x1b[31m●\x1b[32m●\x1b[33m●\x1b[34m●\x1b[35m●\x1b[36m●\x1b[37m●\x1b[0m`;
        
        setHistory((prev) => [
          ...prev,
          { type: 'output', text: vAsciiArt }
        ]);
        break;
      case 'projects':
        setHistory((prev) => [
          ...prev,
          { 
            type: 'output', 
            text: `Projects:
1. E-commerce Platform - React, Node.js, MongoDB
2. Social Media Dashboard - Vue.js, Firebase
3. Task Management System - Angular, Express, PostgreSQL
4. Portfolio OS - React, Three.js, Framer Motion` 
          }
        ]);
        break;
      case 'contact':
        setHistory((prev) => [
          ...prev,
          { 
            type: 'output', 
            text: `Contact Information:
Email: vspcoderz@example.com
GitHub: github.com/vspcoderz
LinkedIn: linkedin.com/in/vspcoderz
Twitter: @vspcoderz` 
          }
        ]);
        break;
      case 'clear':
        setHistory([
          { type: 'output', text: 'Terminal cleared' }
        ]);
        break;
      case 'date':
        setHistory((prev) => [
          ...prev,
          { type: 'output', text: new Date().toString() }
        ]);
        break;
      default:
        setHistory((prev) => [
          ...prev,
          { type: 'output', text: `Command not found: ${command}. Type "help" for available commands.` }
        ]);
    }
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div 
      className={cn("terminal bg-black text-green-400 p-4 h-full overflow-auto", className)}
      onClick={focusInput}
      ref={terminalRef}
    >
      {history.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`mb-1 ${item.type === 'command' ? 'text-yellow-400' : ''}`}
        >
          {item.text.includes('\x1b[') ? (
            <pre 
              className="whitespace-pre font-mono text-sm" 
              dangerouslySetInnerHTML={{ __html: ansiToHtml(item.text) }}
            />
          ) : (
            <pre className="whitespace-pre-wrap font-mono text-sm">{item.text}</pre>
          )}
        </motion.div>
      ))}
      <form onSubmit={handleInputSubmit} className="flex">
        <span className="text-yellow-400 mr-2">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          className="flex-1 bg-transparent outline-none text-green-400 font-mono text-sm"
          autoFocus
        />
      </form>
    </div>
  );
} 