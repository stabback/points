import { TrackedItem } from "./types";

export function getScoreForDay(items: TrackedItem[], day: Date): number {
  let score = 0;
  items
    .filter((item) => item.timestamp.getDate() === day.getDate())
    .forEach((item) => {
      if (item.type === "discrete") {
        score += item.points * item.quantity;
      } else {
        score += item.rate * item.duration;
      }
    });
  return score;
}
