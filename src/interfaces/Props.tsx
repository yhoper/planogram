import { LayoutItem } from "./LayoutItem";

export interface Props {
  className?: string;
  items?: number;
  cols?: number;
  rowHeight?: number;
  isDraggable?: boolean;
  isResizable?: boolean;
  onLayoutChange?: (layout: LayoutItem[]) => void; // Cambio aquí
  compactType?: "horizontal" | "vertical" | null;
  preventCollision?: boolean;
  verticalCompact?: boolean;
}
