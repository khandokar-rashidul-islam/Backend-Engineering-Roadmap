"use client";
import React, {
  useState,
  useEffect,
  useRef,
  useSyncExternalStore,
  useMemo,
} from "react";
import { ROADMAP_DATA } from "../data/roadmapData";
import { CheckedState } from "@/types";
import { Header } from "@/components/Header";
import { ProgressBar } from "@/components/ProgressBar";
import { PhaseCard } from "@/components/PhaseCard";
import { Footer } from "@/components/Footer";

const STORAGE_KEY = "backend-roadmap-2026-progress";
const STORAGE_EVENT = "roadmap-storage-update";

// --- External store glue for localStorage ---
// useSyncExternalStore is the React-sanctioned way to read a browser-only
// store like localStorage: it returns getServerSnapshot() during SSR (no
// window access, no hydration mismatch) and re-syncs to the real value once
// mounted in the browser, without ever calling setState inside an effect body.
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(STORAGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(STORAGE_EVENT, callback);
  };
}

function getSnapshot(): string | null {
  return localStorage.getItem(STORAGE_KEY);
}

function getServerSnapshot(): string | null {
  return null;
}

function writeStorage(newState: CheckedState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
  window.dispatchEvent(new Event(STORAGE_EVENT));
}

function clearStorage() {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(STORAGE_EVENT));
}

export default function Home() {
  const rawStored = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const checkedState = useMemo<CheckedState>(() => {
    if (!rawStored) return {};
    try {
      const parsed = JSON.parse(rawStored);
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  }, [rawStored]);

  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    "phase-0": true, // First phase card expanded by default
  });
  const [manualStatus, setManualStatus] = useState<string>("");
  const [restoredDismissed, setRestoredDismissed] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Total items calculation
  const totalItems = ROADMAP_DATA.reduce(
    (acc, phase) => acc + phase.items.length,
    0,
  );
  const completedCount = Object.values(checkedState).filter(Boolean).length;

  // "progress restored" is derived at render time from data that's already
  // there (rawStored) — no setState needed to show it. This effect only
  // starts a dismiss timer, and its setState call lives inside the
  // setTimeout callback, not directly in the effect body.
  const showRestoredBadge = !!rawStored && !restoredDismissed;
  useEffect(() => {
    if (!rawStored) return;
    const timeout = setTimeout(() => setRestoredDismissed(true), 2500);
    return () => clearTimeout(timeout);
  }, [rawStored]);

  const saveStatus =
    manualStatus || (showRestoredBadge ? "progress restored" : "");

  // Save helper function
  const saveToStorage = (newState: CheckedState) => {
    setManualStatus("saving…");
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);

    try {
      writeStorage(newState);
      saveTimeoutRef.current = setTimeout(() => {
        setManualStatus("saved ✓");
        saveTimeoutRef.current = setTimeout(() => setManualStatus(""), 2000);
      }, 200);
    } catch (err) {
      console.warn("Failed to save progress to localStorage:", err);
      setManualStatus("storage warning");
    }
  };

  // Toggle single item checkbox
  const handleToggleItem = (itemId: string) => {
    const updated = { ...checkedState, [itemId]: !checkedState[itemId] };
    saveToStorage(updated);
  };

  // Toggle single card expand/collapse
  const handleToggleExpandCard = (phaseId: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [phaseId]: !prev[phaseId],
    }));
  };

  // Expand or Collapse All cards
  const allAreExpanded = ROADMAP_DATA.every((phase) => expandedCards[phase.id]);
  const handleToggleExpandAll = () => {
    const nextState = !allAreExpanded;
    const newExpanded: Record<string, boolean> = {};
    ROADMAP_DATA.forEach((phase) => {
      newExpanded[phase.id] = nextState;
    });
    setExpandedCards(newExpanded);
  };

  // Reset progress
  const handleReset = () => {
    try {
      clearStorage();
      setRestoredDismissed(true);
      setManualStatus("progress reset");
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
      saveTimeoutRef.current = setTimeout(() => setManualStatus(""), 2500);
    } catch (err) {
      console.warn("Failed to clear localStorage:", err);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0e14] bg-glow-blue bg-glow-green text-slate-200">
      {/* Background Subtle Radial Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Header Section */}
        <Header />

        {/* Progress Bar & Toolbar Sticky Section */}
        <ProgressBar
          completedCount={completedCount}
          totalCount={totalItems}
          saveStatus={saveStatus}
          allExpanded={allAreExpanded}
          onToggleExpandAll={handleToggleExpandAll}
          onReset={handleReset}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Timeline & Roadmap Phase Cards */}
        <main className="mt-4 space-y-0">
          {ROADMAP_DATA.map((phase, index) => (
            <PhaseCard
              key={phase.id}
              phase={phase}
              isExpanded={!!expandedCards[phase.id]}
              onToggleExpand={() => handleToggleExpandCard(phase.id)}
              checkedState={checkedState}
              onToggleItem={handleToggleItem}
              isLast={index === ROADMAP_DATA.length - 1}
              searchQuery={searchQuery}
            />
          ))}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
