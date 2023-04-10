export interface DiscreteTemplate {
  id: string;
  label: string;
  type: "discrete";
  points: number;
}

export interface RunnableTemplate {
  id: string;
  label: string;
  type: "runnable";
  // The number of points per minute this item is worth
  rate: number;
}

export interface DiscreteItem extends DiscreteTemplate {
  quantity: number;
  timestamp: Date;
}

export interface RunnableItem extends RunnableTemplate {
  duration: number;
  timestamp: Date;
}

export type TrackedTemplate = DiscreteTemplate | RunnableTemplate;
export type TrackedItem = DiscreteItem | RunnableItem;
