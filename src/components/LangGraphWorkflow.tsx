"use client";

import { motion } from "framer-motion";
import { 
  User, 
  Bot, 
  Search, 
  PenTool, 
  CheckCircle2, 
  Zap
} from "lucide-react";
import { } from "react";

const NODES = [
  { id: "input", icon: User, label: "User Input", x: 10, y: 50, color: "#00E5FF" },
  { id: "supervisor", icon: Bot, label: "Supervisor", x: 30, y: 50, color: "#A855F7" },
  { id: "researcher", icon: Search, label: "Researcher", x: 50, y: 20, color: "#3B82F6" },
  { id: "writer", icon: PenTool, label: "Writer", x: 50, y: 80, color: "#10B981" },
  { id: "reviewer", icon: CheckCircle2, label: "Reviewer", x: 70, y: 50, color: "#F59E0B" },
  { id: "output", icon: Zap, label: "Final Result", x: 90, y: 50, color: "#FFFFFF" },
];

const CONNECTIONS = [
  { from: "input", to: "supervisor" },
  { from: "supervisor", to: "researcher" },
  { from: "supervisor", to: "writer" },
  { from: "researcher", to: "reviewer" },
  { from: "writer", to: "reviewer" },
  { from: "reviewer", to: "supervisor", isBack: true },
  { from: "reviewer", to: "output" },
];

export default function LangGraphWorkflow() {
  // SVG animations handle the flow visually
  return (
    <div className="relative w-full aspect-video bg-black/40 rounded-3xl overflow-hidden border border-white/10 group-hover:border-ai-purple/50 transition-all duration-500 shadow-2xl">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* SVG for Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {CONNECTIONS.map((conn, idx) => {
          const fromNode = NODES.find(n => n.id === conn.from)!;
          const toNode = NODES.find(n => n.id === conn.to)!;
          
          return (
            <g key={`conn-${idx}`}>
              <motion.path
                d={`M ${fromNode.x}% ${fromNode.y}% L ${toNode.x}% ${toNode.y}%`}
                stroke="white"
                strokeOpacity={0.1}
                strokeWidth={2}
                fill="none"
              />
              {/* Animated Flow Pulse */}
              <motion.circle
                r="3"
                fill={conn.isBack ? "#F59E0B" : "#A855F7"}
                filter="blur(2px)"
              >
                <animateMotion
                  dur={conn.isBack ? "2.5s" : "3s"}
                  repeatCount="indefinite"
                  path={`M ${fromNode.x}% ${fromNode.y}% L ${toNode.x}% ${toNode.y}%`}
                  begin={`${idx * 0.5}s`}
                />
              </motion.circle>
            </g>
          );
        })}
      </svg>

      {/* Nodes */}
      <div className="absolute inset-0">
        {NODES.map((node) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            style={{ 
              left: `${node.x}%`, 
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            className="absolute flex flex-col items-center gap-2 cursor-pointer z-20"
          >
            <div 
              className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center relative overflow-hidden group/node"
              style={{ 
                backgroundColor: `${node.color}15`, 
                border: `1px solid ${node.color}40`,
                boxShadow: `0 0 20px ${node.color}10`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <node.icon size={24} style={{ color: node.color }} />
              
              {/* Ambient Orbitals for 'Special' nodes */}
              {node.id === 'supervisor' && (
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-ai-purple/20 rounded-full scale-125"
                />
              )}
            </div>
            <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-tighter bg-black/60 px-2 py-0.5 rounded-full border border-white/5 backdrop-blur-md">
              {node.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Side Status Indicators */}
      <div className="absolute bottom-6 left-6 flex flex-col gap-2 z-30">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-mono text-green-500/80 uppercase">Graph State: Active</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-ai-purple animate-pulse delay-75" />
          <span className="text-[10px] font-mono text-ai-purple/80 uppercase">Tokens Flowing</span>
        </div>
      </div>

      {/* Top Header Placeholder */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-30">
        <div className="bg-white/5 border border-white/10 px-3 py-1 rounded-md backdrop-blur-md text-[10px] font-mono text-slate-500">
          Thread ID: 4f92-ax29-11p8
        </div>
        <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
}
