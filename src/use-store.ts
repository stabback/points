import { useState, useEffect } from "react";
import {
  DiscreteTemplate,
  RunnableTemplate,
  DiscreteItem,
  RunnableItem,
  TrackedItem,
  TrackedTemplate,
} from "./types";

export const useStore = () => {
  const [templates, setTemplates] = useState<Array<TrackedTemplate>>([]);
  const [items, setItems] = useState<Array<TrackedItem>>([]);

  useEffect(() => {
    const templatesFromStorage = localStorage.getItem("templates");
    const itemsFromStorage = localStorage.getItem("items");
    if (templatesFromStorage) {
      setTemplates(JSON.parse(templatesFromStorage));
    }
    if (itemsFromStorage) {
      const parsedItems: TrackedItem[] = JSON.parse(itemsFromStorage);
      parsedItems.forEach((item) => {
        item.timestamp = new Date(item.timestamp);
      });
      setItems(parsedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("templates", JSON.stringify(templates));
    localStorage.setItem("items", JSON.stringify(items));
  }, [templates, items]);

  return {
    templates,
    items,
    setTemplates,
    setItems,
  };
};
