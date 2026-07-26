import React from 'react';
import { ChevronRight, Check, Sparkles, ExternalLink } from 'lucide-react';
import { RoadmapPhase, CheckedState } from '../types';
import { FormattedText } from './FormattedText';

interface PhaseCardProps {
  phase: RoadmapPhase;
  isExpanded: boolean;
  onToggleExpand: () => void;
  checkedState: CheckedState;
  onToggleItem: (itemId: string) => void;
  isLast: boolean;
  searchQuery: string;
}

export const PhaseCard: React.FC<PhaseCardProps> = ({
  phase,
  isExpanded,
  onToggleExpand,
  checkedState,
  onToggleItem,
  isLast,
  searchQuery,
}) => {
  // Compute completed stats for this phase
  const totalPhaseItems = phase.items.length;
  const completedPhaseItems = phase.items.filter((item) => checkedState[item.id]).length;
  const isPhaseComplete = totalPhaseItems > 0 && completedPhaseItems === totalPhaseItems;

  // Filter items if searching
  const filteredItems = searchQuery.trim()
    ? phase.items.filter((item) => {
        const query = searchQuery.toLowerCase();
        return (
          item.text.toLowerCase().includes(query) ||
          (item.subhead && item.subhead.toLowerCase().includes(query)) ||
          phase.title.toLowerCase().includes(query) ||
          phase.filename.toLowerCase().includes(query)
        );
      })
    : phase.items;

  // If searching and this phase has no matching items, hide card unless title matches
  if (searchQuery.trim() && filteredItems.length === 0) {
    return null;
  }

  return (
    <div className="relative flex gap-3 sm:gap-6 pb-8 sm:pb-10 group">
      {/* Timeline Rail & Commit Node */}
      <div className="relative flex flex-col items-center">
        {/* Circular Commit Node */}
        <div
          className={`relative z-10 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 transition-all duration-300 ${
            isPhaseComplete
              ? 'bg-[#0a0e14] border-emerald-400 ring-4 ring-emerald-500/20 shadow-[0_0_12px_rgba(52,211,153,0.4)]'
              : isExpanded
              ? 'bg-[#0a0e14] ring-4 ring-opacity-20 shadow-md'
              : 'bg-[#0a0e14] hover:scale-105'
          }`}
          style={{
            borderColor: isPhaseComplete ? '#34d399' : phase.accentColor,
            boxShadow: isExpanded && !isPhaseComplete ? `0 0 12px ${phase.accentColor}40` : undefined,
          }}
        >
          {isPhaseComplete ? (
            <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
          ) : (
            <span
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-transform duration-300"
              style={{
                backgroundColor: phase.accentColor,
                transform: isExpanded ? 'scale(1.2)' : 'scale(1)',
              }}
            />
          )}
        </div>

        {/* Vertical Rail Line connecting nodes */}
        {!isLast && (
          <div className="absolute top-8 bottom-0 w-0.5 bg-gradient-to-b from-slate-700/60 via-slate-800/40 to-slate-800/20" />
        )}
      </div>

      {/* Main Card Container */}
      <div className="flex-1 min-w-0">
        <div
          className={`rounded-xl border transition-all duration-300 overflow-hidden bg-slate-900/70 backdrop-blur-sm ${
            isExpanded
              ? 'shadow-xl'
              : 'border-slate-800/80 hover:border-slate-700'
          }`}
          style={{
            borderColor: isExpanded ? phase.accentColor : undefined,
            boxShadow: isExpanded ? `0 10px 30px -10px ${phase.accentColor}20` : undefined,
          }}
        >
          {/* Card Header (Code Editor Style) */}
          <button
            onClick={onToggleExpand}
            className={`w-full text-left px-3.5 py-3 sm:px-5 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors cursor-pointer select-none ${
              phase.isGradientHeader
                ? 'bg-gradient-to-r from-amber-500/10 via-slate-900/90 to-slate-900'
                : 'bg-slate-950/80 hover:bg-slate-900/90'
            }`}
          >
            {/* Left side: traffic lights, filename, title */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1">
              {/* Traffic light dots */}
              <div className="hidden xs:flex items-center gap-1.5 shrink-0 pr-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>

              {/* Monospace Filename tag */}
              <span className="font-mono text-xs text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60 shrink-0">
                {phase.filename}
              </span>

              {/* Title */}
              <h2 className="font-mono font-bold text-sm sm:text-base text-slate-100 truncate">
                {phase.title}
              </h2>

              {phase.isGradientHeader && (
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 animate-pulse hidden sm:block" />
              )}
            </div>

            {/* Right side: Time estimate pill, count indicator, chevron */}
            <div className="flex items-center justify-between sm:justify-end gap-2.5 shrink-0">
              {/* Completed ratio indicator */}
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-800/60 text-slate-400">
                {completedPhaseItems}/{totalPhaseItems}
              </span>

              {/* Time Estimate Pill Tag */}
              <span
                className="font-mono text-xs px-2.5 py-0.5 rounded-full font-medium hidden sm:inline-block border border-white/10"
                style={{
                  backgroundColor: `${phase.accentColor}18`,
                  color: phase.accentColor,
                }}
              >
                {phase.timeEstimate}
              </span>

              {/* Chevron Icon */}
              <div
                className="p-1 rounded hover:bg-slate-800 text-slate-400 transition-transform duration-300"
                style={{
                  transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                }}
              >
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </button>

          {/* Accordion Body */}
          {isExpanded && (
            <div className="p-4 sm:p-6 border-t border-slate-800/60 space-y-4 animate-fade-in">
              {/* Optional Italic Lead Sentence */}
              {phase.leadText && (
                <p className="italic text-xs sm:text-sm text-slate-400 font-sans leading-relaxed border-l-2 pl-3 py-0.5"
                   style={{ borderColor: phase.accentColor }}>
                  {phase.leadText}
                </p>
              )}

              {/* Items List */}
              <div className="space-y-2 pt-1">
                {filteredItems.map((item, idx) => {
                  const isChecked = !!checkedState[item.id];
                  const showSubhead =
                    item.subhead &&
                    (idx === 0 || filteredItems[idx - 1].subhead !== item.subhead);

                  return (
                    <React.Fragment key={item.id}>
                      {/* Optional Subhead Divider */}
                      {showSubhead && (
                        <div className="pt-3 pb-1">
                          <span
                            className="font-mono text-[11px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                            style={{ color: phase.accentColor }}
                          >
                            // {item.subhead}
                          </span>
                        </div>
                      )}

                      {/* Checklist Item Row */}
                      <label
                        onClick={() => onToggleItem(item.id)}
                        className={`flex items-start gap-3 p-2.5 rounded-lg border transition-all cursor-pointer group/item select-none ${
                          isChecked
                            ? 'bg-slate-950/40 border-slate-800/60'
                            : 'bg-slate-900/40 border-slate-800/40 hover:bg-slate-800/40 hover:border-slate-700/80'
                        }`}
                      >
                        {/* Custom Square Checkbox with rounded corners */}
                        <div
                          className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-all duration-200 ${
                            isChecked
                              ? 'border-transparent shadow-sm'
                              : 'border-slate-600 bg-slate-950 group-hover/item:border-slate-400'
                          }`}
                          style={{
                            backgroundColor: isChecked ? phase.accentColor : undefined,
                            borderColor: isChecked ? phase.accentColor : undefined,
                          }}
                        >
                          {isChecked && (
                            <Check className="w-3.5 h-3.5 text-slate-950 stroke-[3]" />
                          )}
                        </div>

                        {/* Item Text & Optional Resource Link */}
                        <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                          <div
                            className={`font-sans text-xs sm:text-sm leading-relaxed transition-all duration-200 ${
                              isChecked
                                ? 'line-through text-slate-500/80'
                                : 'text-slate-200 group-hover/item:text-white'
                            }`}
                          >
                            <FormattedText text={item.text} accentColor={phase.accentColor} />
                          </div>

                          {item.resource && (
                            <a
                              href={item.resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700/60 transition-colors shrink-0 self-start sm:self-auto"
                              title={`Open resource: ${item.resource.label}`}
                            >
                              <span>{item.resource.label}</span>
                              <ExternalLink className="w-3 h-3 text-slate-400" />
                            </a>
                          )}
                        </div>
                      </label>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
