import React from 'react';
import { Database, GitCommit, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 pt-6 pb-12 border-t border-dashed border-slate-800 font-mono text-xs text-slate-400 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-4 text-slate-400">
        <div className="flex items-center gap-2">
          <Database className="w-3.5 h-3.5 text-emerald-400" />
          <span>
            Persistence: Automatically synchronized with local browser storage under key{' '}
            <code className="text-cyan-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
              backend-roadmap-2026-progress
            </code>
          </span>
        </div>

        <div className="flex items-center gap-2 text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
          <span>100% Client-side • Zero external tracking</span>
        </div>
      </div>

      <p className="text-slate-500 text-[11px] leading-relaxed">
        * Note: Phase accent colors represent semantic groupings and topic domains, not strict linear dependencies. Real-world backend mastery involves iterating across multiple phases concurrently.
      </p>
    </footer>
  );
};
