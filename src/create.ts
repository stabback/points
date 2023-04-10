import {
  DiscreteTemplate,
  RunnableTemplate,
  DiscreteItem,
  RunnableItem,
} from "./types";

function createUniqueId(name: string): string {
  return `${name}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

export function createDiscreteTemplate(
  label: string,
  points: number
): DiscreteTemplate {
  return {
    id: createUniqueId("discrete-template"),
    label,
    type: "discrete",
    points,
  };
}

export function createRunnableTemplate(
  label: string,
  rate: number
): RunnableTemplate {
  return {
    id: createUniqueId("runnable-template"),
    label,
    type: "runnable",
    rate,
  };
}

export function createDiscreteItem(
  template: DiscreteTemplate,
  quantity: number,
  timestamp: Date
): DiscreteItem {
  return {
    ...template,
    id: createUniqueId("discrete-item"),
    quantity,
    timestamp,
  };
}

export function createRunnableItem(
  template: RunnableTemplate,
  duration: number,
  timestamp: Date
): RunnableItem {
  return {
    ...template,
    id: createUniqueId("runnable-item"),
    duration,
    timestamp,
  };
}
