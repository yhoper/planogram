import { LayoutItem } from "./LayoutItem";

export interface Props {
  className?: string;
  items?: number;
  cols?: number;
  rowHeight?: number;
  onLayoutChange?: (layout: LayoutItem) => void;
  compactType?: "horizontal" | "vertical" | null;
  preventCollision?: boolean;
}
