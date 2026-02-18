"use client";

import { useEffect, useState } from "react";
import { Circle } from "lucide-react";

const terminalLines = [
  { text: "$ python agent_workflow.py", type: "command" },
  { text: "", type: "empty" },
  { text: "from crewai import Agent, Task, Crew", type: "code" },
  { text: "from langchain_openai import ChatOpenAI", type: "code" },
  { text: "", type: "empty" },
  { text: "# Initialize the LLM", type: "comment" },
  { text: 'llm = ChatOpenAI(model="gpt-4-turbo")', type: "code" },
  { text: "", type: "empty" },
  { text: "# Create specialized agents", type: "comment" },
  { text: "researcher = Agent(", type: "code" },
  { text: '    role="Senior Research Analyst",', type: "code" },
  { text: '    goal="Find actionable insights",', type: "code" },
  { text: "    llm=llm", type: "code" },
  { text: ")", type: "code" },
  { text: "", type: "empty" },
  { text: "writer = Agent(", type: "code" },
  { text: '    role="Content Strategist",', type: "code" },
  { text: '    goal="Draft compelling content",', type: "code" },
  { text: "    llm=llm", type: "code" },
  { text: ")", type: "code" },
  { text: "", type: "empty" },
  { text: "# Execute the workflow", type: "comment" },
  { text: "crew = Crew(agents=[researcher, writer])", type: "code" },
  { text: "result = crew.kickoff()", type: "code" },
  { text: "", type: "empty" },
  { text: "[✓] Agents initialized successfully", type: "success" },
  { text: "[✓] Tasks assigned to agents", type: "success" },
  { text: "[✓] Workflow completed in 2.3s", type: "success" },
];

export function Terminal() {
  const [displayedLines, setDisplayedLines] = useState<number>(0);
  const [currentChar, setCurrentChar] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    if (displayedLines >= terminalLines.length) {
      setIsTyping(false);
      // Reset and loop after a delay
      const resetTimer = setTimeout(() => {
        setDisplayedLines(0);
        setCurrentChar(0);
        setIsTyping(true);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }

    const currentLine = terminalLines[displayedLines];
    const lineLength = currentLine.text.length;

    if (currentChar < lineLength) {
      const charTimer = setTimeout(() => {
        setCurrentChar((prev) => prev + 1);
      }, currentLine.type === "command" ? 50 : 20);
      return () => clearTimeout(charTimer);
    } else {
      const lineTimer = setTimeout(() => {
        setDisplayedLines((prev) => prev + 1);
        setCurrentChar(0);
      }, currentLine.type === "empty" ? 100 : 150);
      return () => clearTimeout(lineTimer);
    }
  }, [displayedLines, currentChar]);

  const getLineColor = (type: string) => {
    switch (type) {
      case "command":
        return "text-accent-lime";
      case "comment":
        return "text-muted-foreground";
      case "success":
        return "text-accent-lime";
      default:
        return "text-foreground";
    }
  };

  return (
    <div className="rounded-xl border border-border bg-[#0d0d0d] overflow-hidden shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border">
        <Circle className="w-3 h-3 fill-red-500 text-red-500" />
        <Circle className="w-3 h-3 fill-yellow-500 text-yellow-500" />
        <Circle className="w-3 h-3 fill-green-500 text-green-500" />
        <span className="ml-4 text-xs text-muted-foreground font-mono">
          agent_workflow.py
        </span>
      </div>

      {/* Terminal Body */}
      <div className="p-4 font-mono text-sm h-[400px] overflow-hidden">
        <div className="space-y-1">
          {terminalLines.slice(0, displayedLines + 1).map((line, index) => (
            <div key={index} className={`${getLineColor(line.type)}`}>
              {index < displayedLines
                ? line.text
                : line.text.slice(0, currentChar)}
              {index === displayedLines && isTyping && (
                <span className="inline-block w-2 h-4 bg-accent-blue animate-blink ml-0.5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
