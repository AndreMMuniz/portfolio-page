"use client";

import {
  User,
  Bot,
  Search,
  PenTool,
  MessageSquare,
  Database,
  ChevronRight,
} from "lucide-react";

const STEPS = [
  { id: "input", icon: User, label: "Input", color: "#94a3b8" },
  { id: "agent", icon: Bot, label: "Agent", color: "#A855F7" },
  { id: "tools", icon: Search, label: "Tools", color: "#3B82F6" },
  { id: "memory", icon: Database, label: "Memory", color: "#10B981" },
  { id: "action", icon: PenTool, label: "Action", color: "#F59E0B" },
  { id: "output", icon: MessageSquare, label: "Output", color: "#00E5FF" },
];

export default function LangGraphWorkflow() {
  return (
    <div className="relative w-full bg-[#0f111a] rounded-xl overflow-hidden border border-white/10 shadow-2xl font-mono">
      {/* Header bar */}
      <div className="w-full h-8 bg-black/40 border-b border-white/5 flex items-center px-4">
        <div className="flex gap-1.5 mr-4">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="text-[10px] text-slate-500 flex-1 text-center">
          agent_graph.py — LangGraph Studio
        </div>
      </div>

      {/* Workflow nodes */}
      <div className="px-4 py-8 md:px-6 md:py-10">
        <div className="flex items-center justify-between gap-1 md:gap-2 overflow-x-auto">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="flex items-center gap-1 md:gap-2 shrink-0">
                {/* Node */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-white/10 bg-[#1a1d2e] flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
                    style={{ boxShadow: `0 0 20px ${step.color}15` }}
                  >
                    {/* Top accent bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] rounded-t-lg"
                      style={{ backgroundColor: step.color }}
                    />
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: step.color }} />

                    {/* Subtle pulse on the Agent node */}
                    {step.id === "agent" && (
                      <div
                        className="absolute inset-0 rounded-lg animate-pulse opacity-20"
                        style={{ boxShadow: `0 0 15px ${step.color}` }}
                      />
                    )}
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-slate-400 whitespace-nowrap">
                    {step.label}
                  </span>
                </div>

                {/* Arrow connector (skip after last) */}
                {i < STEPS.length - 1 && (
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0 mb-5" />
                )}
              </div>
            );
          })}
        </div>

        {/* Code snippet */}
        <div className="mt-8 bg-[#1a1d27] border border-white/5 rounded-lg p-3 text-[10px] sm:text-[11px] text-slate-400 font-mono max-w-sm">
          <div>
            <span className="text-ai-purple">def</span>{" "}
            <span className="text-blue-400">run_graph</span>():
          </div>
          <div className="pl-4">
            graph = <span className="text-slate-300">StateGraph</span>(AgentState)
          </div>
          <div className="pl-4">
            graph.add_node(<span className="text-green-400">&quot;agent&quot;</span>, agent)
          </div>
          <div className="pl-4">
            graph.add_edge(<span className="text-green-400">&quot;agent&quot;</span>,{" "}
            <span className="text-green-400">&quot;tools&quot;</span>)
          </div>
          <div className="pl-4 text-slate-600"># Compiling state...</div>
        </div>
      </div>
    </div>
  );
}
