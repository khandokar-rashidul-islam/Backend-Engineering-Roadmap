export interface ResourceLink {
  label: string;
  url: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  subhead?: string;
  resource?: ResourceLink;
}

export interface RoadmapPhase {
  id: string;
  phaseNum: number;
  filename: string;
  title: string;
  timeEstimate: string;
  accentColor: string; // e.g. '#ff7b72'
  leadText?: string;
  isGradientHeader?: boolean;
  items: ChecklistItem[];
}

export type CheckedState = Record<string, boolean>;
