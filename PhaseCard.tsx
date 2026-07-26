import React from 'react';
import { RotateCcw, Maximize2, Minimize2, Search, CheckCircle2 } from 'lucide-react';

interface ProgressBarProps {
  completedCount: number;
  totalCount: number;
  saveStatus: string; // "saved ✓" | "saving..." | "progress restored" | "reset" | ""
  allExpanded: boolean;
  onToggleExpandAll: () => void;
  onReset: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  completedCount,
  totalCount,
  saveStatus,
  allExpanded,
  onToggleExpandAll,
  onReset,
  searchQuery,
  onSearchChange,
}) => {
  const [isConfirmingReset, setIsConfirmingReset] = React.useState(false);
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const handleExecuteReset = () => {
    onReset();
    setIsConfirmingReset(false);
  };

  return (
    <section className="sticky top-0 z-30 bg-[#0a0e14]/90 backdrop-blur-md pt-3 pb-4 mb-8 border-b border-slate-800/80">
      <div className="flex flex-col gap-3">
        {/* Top metrics row */}
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-semibold text-slate-200">
            <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/80 text-cyan-300">
              {completedCount} / {totalCount} checked
            </span>
            <span className="text-slate-400 font-bold">{percentage}%</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Transient save status badge */}
            {saveStatus && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 font-mono text-xs animate-fade-in transition-all">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                {saveStatus}
              </span>
            )}

            {/* Quick Actions */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={onToggleExpandAll}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60 font-mono text-xs transition-colors cursor-pointer"
                title={allExpanded ? 'Collapse All Cards' : 'Expand All Cards'}
              >
                {allExpanded ? (
                  <>
                    <Minimize2 className="w-3.5 h-3.5 text-slate-400" />
                    <span className="hidden sm:inline">Collapse All</span>
                  </>
                ) : (
                  <>
                    <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
                    <span className="hidden sm:inline">Expand All</span>
                  </>
                )}
              </button>

              {isConfirmingReset ? (
                <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-red-950/60 border border-red-800/70 font-mono text-xs animate-fade-in">
                  <span className="text-red-300 hidden xs:inline px-1">Reset all?</span>
                  <button
                    onClick={handleExecuteReset}
                    className="px-2 py-0.5 rounded bg-red-600 hover:bg-red-500 text-white font-medium transition-colors cursor-pointer"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setIsConfirmingReset(false)}
                    className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsConfirmingReset(true)}
                  disabled={completedCount === 0}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded font-mono text-xs transition-colors border ${
                    completedCount === 0
                      ? 'bg-slate-900/50 text-slate-600 border-slate-800/60 cursor-not-allowed'
                      : 'bg-slate-800/80 hover:bg-red-950/40 hover:text-red-300 hover:border-red-800/60 text-slate-400 border-slate-700/60 cursor-pointer'
                  }`}
                  title={completedCount === 0 ? 'No progress to reset' : 'Reset All Checklist Progress'}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Animated Progress Bar Track */}
        <div className="relative w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out bg-gradient-to-r from-blue-500 via-emerald-400 to-pink-500 shadow-[0_0_12px_rgba(56,189,248,0.3)]"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Search / Filter Input */}
        <div className="relative mt-1">
          <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-500" />
          <input
            type="text"
            placeholder="Search topics (e.g. Postgres, Kafka, Go, JWT, Docker, Vector DB)..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-500 font-mono text-xs focus:outline-none focus:border-cyan-500/60 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-2 text-xs font-mono text-slate-500 hover:text-slate-300 cursor-pointer"
            >
              clear
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
