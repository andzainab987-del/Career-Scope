"use client";

import React, { useState, useEffect, useRef } from "react";
import { Code, Brain, Shield, Server, Zap, Cpu, Building2, Activity, Plane, Rocket, Radio, User, Clock, FileText, Calendar } from "lucide-react";

const ICON_MAP: Record<string, any> = {
  Code, Brain, Shield, Server, Zap, Cpu, Building2, Activity, Plane, Rocket, Radio, User, Clock, FileText, Calendar,
};

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: any;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {};
      const isCurrentlyOpen = prev[id];

      if (!isCurrentlyOpen) {
        newState[id] = true;
        setActiveNodeId(id);
        setAutoRotate(false);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
      }
      return newState;
    });
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoRotate) {
      timer = setInterval(() => {
        setRotationAngle((prev) => (prev + 0.2) % 360);
      }, 40);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [autoRotate]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 250;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.cos(radian));

    return { x, y, angle, zIndex };
  };

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className="w-full min-h-[780px] h-[840px] flex flex-col items-center justify-center bg-black rounded-3xl border border-white/10 overflow-visible relative selection:bg-none my-4 p-8"
    >
      <div className="relative w-full h-full flex items-center justify-center">

        {/* Outer Orbital Orbit Ring */}
        <div className="absolute w-[500px] h-[500px] rounded-full border border-neutral-800/90 pointer-events-none"></div>

        {/* Inner Secondary Guide Ring */}
        <div className="absolute w-[250px] h-[250px] rounded-full border border-neutral-900/60 pointer-events-none"></div>

        {/* Central Core Element */}
        <div className="absolute w-36 h-36 rounded-full border border-neutral-800/80 flex items-center justify-center pointer-events-none z-10">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-purple-500 p-[2px] flex items-center justify-center shadow-[0_0_45px_rgba(56,189,248,0.4)] animate-pulse">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 via-sky-400 to-teal-300 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-slate-100 shadow-inner"></div>
            </div>
          </div>
        </div>

        {/* Floating Orbit Nodes */}
        {timelineData.map((item, index) => {
          const position = calculateNodePosition(index, timelineData.length);
          const isExpanded = !!expandedItems[item.id];
          const IconComponent = typeof item.icon === "string" ? (ICON_MAP[item.icon] || Code) : (item.icon || Code);

          // Smart position popover: if node is in bottom half of orbit, open upward!
          const popoverPositionClass = position.y > 40 ? "bottom-16" : "top-20";

          return (
            <div
              key={item.id}
              className="absolute flex flex-col items-center transition-all duration-300 cursor-pointer"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                zIndex: isExpanded ? 200 : position.zIndex,
              }}
              onClick={(e) => {
                e.stopPropagation();
                toggleItem(item.id);
              }}
            >
              {/* Circular Icon Node */}
              <div
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  border transition-all duration-300
                  ${
                    isExpanded
                      ? "bg-black border-white text-white shadow-[0_0_30px_rgba(255,255,255,0.5)] scale-125"
                      : "bg-neutral-950/90 border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-white hover:shadow-[0_0_18px_rgba(255,255,255,0.2)]"
                  }
                `}
              >
                <IconComponent className="w-5 h-5" />
              </div>

              {/* Title Directly Below Node */}
              <span
                className={`
                  mt-2 text-xs font-semibold tracking-tight text-center whitespace-nowrap transition-colors duration-200
                  ${isExpanded ? "text-white font-bold scale-105" : "text-neutral-400 hover:text-neutral-200"}
                `}
              >
                {item.title}
              </span>

              {/* Expanded Card Details (Smart Top/Bottom Positioning) */}
              {isExpanded && (
                <div
                  className={`absolute ${popoverPositionClass} w-72 p-5 rounded-xl bg-black/95 border border-white/20 text-white shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200 backdrop-blur-md`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] tracking-widest uppercase text-white/50 font-mono">
                      {item.category}
                    </span>
                    <span className="text-[10px] text-white/40">{item.date}</span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1.5">{item.title}</h4>
                  <p className="text-xs text-white/60 leading-relaxed mb-3">{item.content}</p>

                  {item.relatedIds.length > 0 && (
                    <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1">
                      <span className="text-[10px] text-white/40 block w-full mb-1">Related Pathways:</span>
                      {item.relatedIds.map((relId) => {
                        const rel = timelineData.find((t) => t.id === relId);
                        return rel ? (
                          <button
                            key={relId}
                            onClick={() => toggleItem(relId)}
                            className="text-[10px] px-2 py-0.5 border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-colors"
                          >
                            {rel.title}
                          </button>
                        ) : null;
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
