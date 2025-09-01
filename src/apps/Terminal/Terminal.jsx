import React, { useEffect, useState, useRef } from "react";

export function Terminal() {
  const [logs, setLogs] = useState([]);
  const [input, setInput] = useState("");
  const [booting, setBooting] = useState(true);
  const containerRef = useRef(null);

  const hackingLines = [
    "Initializing void system...",
    "Loading secure shell protocol...",
    "Accessing core registry...",
    "Decrypting bootloader...",
    "Establishing handshake...",
    "Fetching dependencies...",
    "System online.",
  ];

  // Booting animation
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < hackingLines.length) {
        setLogs((prev) => [...prev, hackingLines[i]]);
        i++;
      } else {
        clearInterval(interval);
        setLogs((prev) => [
          ...prev,
          "",
          "Welcome to Void Terminal!",
          "Type 'help' to see available commands.",
          "",
        ]);
        setBooting(false); // Now allow input
      }
    }, 400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    containerRef.current?.scrollTo(0, containerRef.current.scrollHeight);
  }, [logs]);

  const handleCommand = (cmd) => {
    let response = "";
    switch (cmd.trim().toLowerCase()) {
      case "help":
        const cmds = [
          ["help : ", "Show list of commands"],
          ["clear : ", "Clear the terminal screen"],
          ["about : ", "Learn more about this terminal"],
          ["void -v : ", "Display version info"],
          ["date : ", "Show today's date"],
          ["time : ", "Show current time"],
        ];
        response = [
          "Available Commands:",
          "---------------------",
          ...cmds.map(([c, desc]) => `${c.padEnd(15)}${desc}`),
        ];
        break;

      case "clear":
        setLogs([]);
        return;

      case "about":
        response = "Void [Version 1.0.0], (c) All rights reserved.";
        break;

      case "void -v":
        response = "Void Terminal version 1.0.0";
        break;

      case "date":
        response = new Date().toLocaleDateString();
        break;

      case "time":
        response = new Date().toLocaleTimeString();
        break;

      default:
        response = `Command not found: ${cmd}`;
    }

    setLogs((prev) => [
      ...prev,
      `> ${cmd}`,
      ...(Array.isArray(response) ? response : [response]),
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput("");
  };

  return (
    <div
      className="bg-black text-green-400 p-4 font-mono h-full overflow-y-auto rounded"
      ref={containerRef}
    >
      {logs.map((log, idx) => (
        <div key={idx}>{log}</div>
      ))}

      {!booting && (
        <form onSubmit={handleSubmit} className="flex mt-2">
          <span className="mr-2">&gt;</span>
          <input
            className="bg-black border-none outline-none flex-1 text-green-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
        </form>
      )}
    </div>
  );
}
