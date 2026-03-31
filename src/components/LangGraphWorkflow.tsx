"use client";

import { motion } from "framer-motion";
import { 
  User, 
  Bot, 
  Search, 
  PenTool, 
  MessageSquare,
  Database
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

// Using relative grid positions (0-100) that we will map to SVG pixels
const NODES = [
  { id: "input", icon: User, label: "Input", x: 10, y: 50, color: "#94a3b8" }, // slate-400
  { id: "agent", icon: Bot, label: "Agent", x: 30, y: 50, color: "#A855F7" },  // primary purple
  { id: "tools", icon: Search, label: "Search Tool", x: 50, y: 25, color: "#3B82F6" }, // blue
  { id: "memory", icon: Database, label: "Memory", x: 50, y: 75, color: "#10B981" }, // green
  { id: "action", icon: PenTool, label: "Action", x: 70, y: 50, color: "#F59E0B" }, // amber
  { id: "output", icon: MessageSquare, label: "Output", x: 90, y: 50, color: "#00E5FF" }, // cyan
];

const CONNECTIONS = [
  { from: "input", to: "agent" },
  { from: "agent", to: "tools" },
  { from: "tools", to: "agent", isBack: true }, // Cyclic loop
  { from: "agent", to: "memory" },
  { from: "memory", to: "agent", isBack: true },
  { from: "agent", to: "action" },
  { from: "action", to: "output" },
];

export default function LangGraphWorkflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Helper to map 0-100 logical coordinates to actual pixel coordinates
  const getPxX = (percentX: number) => (percentX / 100) * dimensions.width;
  const getPxY = (percentY: number) => (percentY / 100) * dimensions.height;

  // Wait until we have dimensions to render the SVG to avoid hydration mismatch/errors
  const isReady = dimensions.width > 0;

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-video bg-[#0f111a] rounded-xl overflow-hidden border border-white/10 shadow-2xl font-mono min-h-[250px]"
    >
      {/* Background Dots mimicking a canvas/grid */}
      <div className="absolute inset-0" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', 
             backgroundSize: '20px 20px' 
           }} 
      />
      
      {/* UI Header */}
      <div className="absolute top-0 left-0 w-full h-8 bg-black/40 border-b border-white/5 flex items-center px-4 z-30">
        <div className="flex gap-1.5 mr-4 hidden sm:flex">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="text-[10px] text-slate-500 flex-1 text-center font-mono">
          agent_graph.py - LangGraph Studio
        </div>
      </div>

      {isReady && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none mt-4">
          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="4" 
                    refX="5" refY="2" orient="auto">
              <polygon points="0 0, 6 2, 0 4" fill="#64748b" />
            </marker>
            <marker id="arrowhead-back" markerWidth="6" markerHeight="4" 
                    refX="5" refY="2" orient="auto">
              <polygon points="0 0, 6 2, 0 4" fill="#a855f7" />
            </marker>
          </defs>
          
          {CONNECTIONS.map((conn, idx) => {
            const fromNode = NODES.find(n => n.id === conn.from)!;
            const toNode = NODES.find(n => n.id === conn.to)!;
            
            const startX = getPxX(fromNode.x);
            const startY = getPxY(fromNode.y);
            const endX = getPxX(toNode.x);
            const endY = getPxY(toNode.y);

            const isHorizontal = Math.abs(startY - endY) < 5;
            const isVertical = Math.abs(startX - endX) < 5;
            
            let pathD = '';
            
            if (conn.isBack) {
              // Draw curved path in pixels
              const cpOffset = isHorizontal ? 40 : (isVertical ? 40 : 25);
              const cpX = (startX + endX) / 2 + (startY > endY ? cpOffset : -cpOffset);
              const cpY = (startY + endY) / 2 + (startX < endX ? cpOffset : -cpOffset);
              pathD = `M ${startX} ${startY} Q ${cpX} ${cpY} ${endX} ${endY}`;
            } else {
              // Straight line in pixels
              pathD = `M ${startX} ${startY} L ${endX} ${endY}`;
            }

            return (
              <g key={`conn-${idx}`}>
                <motion.path
                  d={pathD}
                  stroke={conn.isBack ? "#a855f7" : "#64748b"}
                  strokeOpacity={conn.isBack ? 0.6 : 0.4}
                  strokeWidth={1.5}
                  strokeDasharray={conn.isBack ? "4 4" : "none"}
                  fill="none"
                  markerEnd={`url(#${conn.isBack ? 'arrowhead-back' : 'arrowhead'})`}
                />
                
                <motion.circle
                  r="3"
                  fill={conn.isBack ? "#a855f7" : "#00E5FF"}
                  filter="blur(1px)"
                >
                  <animateMotion
                    dur={conn.isBack ? "2s" : "3s"}
                    repeatCount="indefinite"
                    path={pathD}
                    begin={`${idx * 0.4}s`}
                  />
                </motion.circle>
              </g>
            );
          })}
        </svg>
      )}

      {/* Nodes (Boxes) */}
      <div className="absolute inset-x-0 bottom-0 top-8 z-20"> 
        {NODES.map((node) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            style={{ 
              left: `${node.x}%`, 
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)' // Center exactly on logical coordinates
            }}
            className="absolute flex flex-col items-center gap-1.5 cursor-pointer"
          >
            {/* The Node Box */}
            <div 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-12 rounded bg-[#1a1d27] border border-white/10 flex items-center justify-center relative shadow-lg"
            >
              <node.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: node.color }} />
              <div 
                className="absolute top-0 left-0 w-full h-0.5 rounded-t w-[calc(100%+2px)] -translate-x-[1px] -translate-y-[1px]"
                style={{ backgroundColor: node.color }}
              />
            </div>
            {/* The Label */}
            <span className="text-[8px] sm:text-[9px] md:text-[10px] text-slate-300 bg-[#0f111a] border border-white/5 px-1.5 py-0.5 rounded whitespace-nowrap shadow-sm">
              {node.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Code Snippet Overlay (Bottom Right) */}
      <div className="absolute bottom-3 left-4 md:left-auto md:right-4 z-30 opacity-60">
        <div className="bg-[#1a1d27] border border-white/5 rounded p-2 text-[7px] sm:text-[8px] md:text-[9px] text-slate-400 font-mono shadow-xl hidden sm:block">
          <div className="text-ai-purple">def <span className="text-blue-400">run_graph</span>():</div>
          <div className="pl-3">graph = StateGraph(AgentState)</div>
          <div className="pl-3">graph.add_node(<span className="text-green-400">&quot;agent&quot;</span>, agent)</div>
          <div className="pl-3">graph.add_edge(<span className="text-green-400">&quot;agent&quot;</span>, <span className="text-green-400">&quot;tools&quot;</span>)</div>
          <div className="pl-3 text-slate-500"># Compiling state...</div>
        </div>
      </div>
    </div>
  );
}
