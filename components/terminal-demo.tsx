"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Code2, Copy, CheckCircle, Terminal, RefreshCw } from "lucide-react";

interface TerminalLine {
  text: string;
  type: 'system' | 'user' | 'output';
}

export function TerminalDemo() {
  const [text, setText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [isDemoCompleted, setIsDemoCompleted] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<TerminalLine[]>([]);
  const [inputEnabled, setInputEnabled] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // More comprehensive and detailed lines
  const demoLines = useMemo(
    () => [
      "$ git clone https://github.com/Lunaris-Project/HyprLuna.git",
      "Cloning into repository...",
      "remote: Counting objects: 100% (247/247), done.",
      "$ cd HyprLuna",
      "$ ./install.sh",
      "[SYSTEM] Installing dependencies...",
      "[CONFIG] Setting up Hyprland components",
      "Installation complete! 🚀",
      "$ _",
    ],
    []
  );

  // Available commands and their responses
  const availableCommands = useMemo(() => ({
    help: [
      "Available commands:",
      "  help        - Show this help",
      "  lunarfetch  - Display system information",
      "  ls          - List files in current directory",
      "  cd          - Change directory",
      "  clear       - Clear terminal screen",
      "  exit        - Exit terminal session",
      "  sudo        - Execute command as superuser",
    ],
    lunarfetch: [
      "       /\\         nixev@hyprluna",
      "      /  \\        ---------------",
      "     /\\   \\       OS: Arch Linux x86_64",
      "    /      \\      Host: HyprLuna Desktop",
      "   /   ,,   \\     Kernel: 6.7.6-arch1-1",
      "  /   |  |  -\\    Uptime: 3 hours, 24 mins",
      " /_-''    ''-_\\   Packages: 1337",
      "                  Shell: fish 3.6.1",
      "                  DE: Hyprland",
      "                  WM: Hyprland",
      "                  Terminal: foot",
      "                  CPU: AMD Ryzen 9 5900X (24) @ 3.7GHz",
      "                  GPU: NVIDIA GeForce RTX 3080",
      "                  Memory: 8192MiB / 32768MiB"
    ],
    ls: [
      "config  docs  install.sh  LICENSE  lunarfetch  README.md"
    ],
    cd: [
      "Changed directory"
    ],
    clear: [],
    exit: [
      "Logout",
      "Connection to HyprLuna closed."
    ],
    sudo: [
      "[sudo] password for nixev: ",
      "nixev is now a sudoer. This incident will be reported."
    ],
    default: [
      "Command not found. Type 'help' for available commands."
    ]
  }), []);

  // Hydration and mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-scroll with smooth behavior
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [text, currentLine, commandHistory]);

  // Cursor blinking with dynamic interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, Math.random() * 150 + 300);
    return () => clearInterval(interval);
  }, []);

  // Enhanced typing effect with improved performance
  useEffect(() => {
    if (isDemoCompleted || currentLine >= demoLines.length) return;

    const line = demoLines[currentLine];
    if (text.length < line.length) {
      const timeout = setTimeout(() => {
        const baseSpeed = line.startsWith("$") ? 25 : 40;
        const variableSpeed = Math.random() * 15 + baseSpeed;

        setText(line.substring(0, text.length + 1));
      }, Math.random() * 30 + 15);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(
        () => {
          setText("");
          if (currentLine === demoLines.length - 1) {
            setIsDemoCompleted(true);
            setInputEnabled(true);
            
            // Focus input after demo completes
            setTimeout(() => {
              if (inputRef.current) {
                inputRef.current.focus();
              }
            }, 500);
          } else {
            setCurrentLine((prev) => prev + 1);
          }
        },
        currentLine === demoLines.length - 1 ? 1500 : 500
      );
      return () => clearTimeout(timeout);
    }
  }, [text, currentLine, demoLines, isDemoCompleted]);

  // Handle command execution
  const executeCommand = (cmd: string) => {
    const commandParts = cmd.trim().split(' ');
    const primaryCommand = commandParts[0].toLowerCase();
    
    // Add command to history
    const newCommandLine: TerminalLine = { 
      text: `$ ${cmd}`, 
      type: 'user' 
    };
    
    let responseLines: TerminalLine[] = [];
    
    // Process command and get response
    if (primaryCommand === 'clear') {
      // Just clear the terminal
      setCommandHistory([]);
      return;
    } else if (primaryCommand in availableCommands) {
      // Get command output
      responseLines = availableCommands[primaryCommand as keyof typeof availableCommands].map(
        line => ({ text: line, type: 'output' })
      );
      
      // Special case for sudo command
      if (primaryCommand === 'sudo' && commandParts.length > 1 && commandParts[1] === '-i') {
        responseLines = [
          { text: "[sudo] password for nixev: ********", type: 'system' },
          { text: "# Welcome to sudo mode, nixev!", type: 'system' },
          { text: "# You now have elevated privileges.", type: 'system' }
        ];
      }
    } else {
      // Command not found
      responseLines = availableCommands.default.map(
        line => ({ text: line, type: 'output' })
      );
    }
    
    // Update command history with command and its response
    setCommandHistory(prev => [...prev, newCommandLine, ...responseLines]);
    
    // Clear the input
    setUserInput("");
  };

  // Handle keydown events
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(userInput);
    }
  };

  // Copy to clipboard functionality
  const handleCopy = () => {
    const terminalText = [
      ...demoLines.slice(0, currentLine),
      text,
      ...commandHistory.map(line => line.text)
    ].join('\n');
    
    navigator.clipboard.writeText(terminalText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Restart demo functionality
  const handleRestart = () => {
    setText("");
    setCurrentLine(0);
    setCommandHistory([]);
    setIsDemoCompleted(false);
    setInputEnabled(false);
  };

  // Focus input when clicked anywhere in terminal
  const handleTerminalClick = () => {
    if (inputEnabled && inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Prevent render before hydration
  if (!mounted) return null;

  // Get system preference
  const systemPrefersDark = typeof window !== 'undefined' 
    ? window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches 
    : false;
  
  // Modern theme-based color variations
  const themeColors = {
    dark: {
      background:
        "bg-gradient-to-br from-zinc-950/90 to-zinc-950/70 backdrop-blur-xl",
      text: "text-emerald-300",
      border: "border-zinc-800/50",
      windowControls: "bg-zinc-900/80 backdrop-blur-md",
      windowTitle: "text-zinc-300",
      cursor: "bg-emerald-400",
      iconHover: "hover:bg-emerald-500/30",
      input: "bg-transparent border-none text-emerald-300 focus:ring-0 focus:outline-none",
      userCommand: "text-emerald-300",
      outputText: "text-gray-300",
      systemText: "text-yellow-300",
    },
    light: {
      background: "bg-white/75 backdrop-blur-xl",
      text: "text-emerald-700",
      border: "border-zinc-200/50",
      windowControls: "bg-zinc-100/80 backdrop-blur-md",
      windowTitle: "text-zinc-600",
      cursor: "bg-emerald-500",
      iconHover: "hover:bg-emerald-100",
      input: "bg-transparent border-none text-emerald-700 focus:ring-0 focus:outline-none",
      userCommand: "text-emerald-700",
      outputText: "text-gray-700",
      systemText: "text-amber-700",
    },
  };

  // Use the correct theme colors based on current theme setting, defaulting to system preference
  const currentTheme = theme === 'system' ? (systemPrefersDark ? 'dark' : 'light') : theme;
  const colors = currentTheme === "dark" ? themeColors.dark : themeColors.light;

  return (
    <div
      className={`rounded-xl overflow-hidden ${colors.border} border shadow-xl transition-all duration-500`}
    >
      {/* Window header with controls and tabs */}
      <div
        className={`${colors.windowControls} flex items-center justify-between border-b ${colors.border} py-2 px-3`}
      >
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>

        <div className="text-xs font-medium truncate max-w-[180px] sm:max-w-none opacity-80 px-3 py-0.5 rounded-md bg-black/20 backdrop-blur-md">
          <span className={`${colors.windowTitle}`}>
            nixev@hyprluna: ~/HyprLuna
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handleCopy}
            className={`${colors.iconHover} transition-colors duration-200 p-1 rounded-md`}
            title="Copy terminal output"
          >
            {isCopied ? (
              <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
            ) : (
              <Copy className="h-3.5 w-3.5 opacity-80" />
            )}
          </button>
          <button
            onClick={handleRestart}
            className={`${colors.iconHover} transition-colors duration-200 p-1 rounded-md`}
            title="Restart demo"
          >
            <RefreshCw className="h-3.5 w-3.5 opacity-80" />
          </button>
        </div>
      </div>

      {/* Terminal window content with typing effect */}
      <div
        ref={terminalRef}
        className={`${colors.background} ${colors.text} font-mono text-sm h-[320px] overflow-y-auto p-4 transition-all duration-500`}
        onClick={handleTerminalClick}
      >
        {/* Terminal Content */}
        <div className="space-y-1 p-3 text-[15px]">
          <AnimatePresence>
            {demoLines.slice(0, currentLine).map((line, i) => (
              <motion.div
                key={`demo-${i}`}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                  stiffness: 120,
                }}
                className="whitespace-pre-wrap break-all flex items-center gap-2"
              >
                {line.includes("✓") && (
                  <Terminal size={12} className="text-emerald-500 opacity-70" />
                )}
                {line}
              </motion.div>
            ))}
          </AnimatePresence>

          {!isDemoCompleted && (
            <div className="whitespace-pre-wrap break-all flex items-center">
              {text}
              <motion.span
                animate={{
                  opacity: cursorVisible ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className={`inline-block h-[18px] w-[9px] rounded-sm ${colors.cursor} ml-0.5`}
              ></motion.span>
            </div>
          )}

          {/* User command history */}
          <AnimatePresence>
            {commandHistory.map((line, i) => (
              <motion.div
                key={`history-${i}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                  stiffness: 120,
                }}
                className={`whitespace-pre-wrap break-all flex items-center gap-2 ${
                  line.type === 'user' 
                    ? colors.userCommand 
                    : line.type === 'system' 
                      ? colors.systemText 
                      : colors.outputText
                }`}
              >
                {line.text}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Interactive input when demo is completed */}
          {isDemoCompleted && (
            <div className="flex items-center mt-1">
              <span className="mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className={`w-full ${colors.input}`}
                placeholder="Type a command... (try 'help')"
                disabled={!inputEnabled}
                autoFocus={inputEnabled}
                aria-label="Terminal input"
              />
              {userInput.length === 0 && (
                <motion.span
                  animate={{
                    opacity: cursorVisible ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className={`absolute inline-block h-[18px] w-[9px] rounded-sm ${colors.cursor} ml-0.5`}
                ></motion.span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
