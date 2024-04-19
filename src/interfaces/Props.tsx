import { LayoutItem } from "./LayoutItem";

export interface Props {
  className?: string;
  items?: number;
  cols?: number;
  rowHeight?: number;
  onLayoutChange?: (layout: LayoutItem[]) => void; // Cambio aquí
  compactType?: "horizontal" | "vertical" | null;
  preventCollision?: boolean;
  verticalCompact?: boolean;
}
