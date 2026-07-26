import React from 'react';
import { Terminal, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="mb-8 pt-2 sm:pt-6">
      {/* Eyebrow badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 font-mono text-xs text-slate-300 shadow-sm mb-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
        <span>ROADMAP.md — backend track</span>
      </div>

      {/* Title with gradient second line */}
      <h1 className="text-3xl sm:text-5xl font-extrabold font-mono tracking-tight text-white leading-tight sm:leading-none">
        Backend Engineering <br className="hidden sm:inline" />
        <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-300 bg-clip-text text-transparent">
          Roadmap — 2026 & Beyond
        </span>
      </h1>

      {/* Description */}
      <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed font-sans">
        A developer-styled, interactive checklist visualizing a phased learning path for modern server-side engineering. From CS foundations and distributed systems to vector databases and edge runtimes.
      </p>
    </header>
  );
};
