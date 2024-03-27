import React, { PureComponent } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ReactGridLayout = WidthProvider(RGL);

interface LayoutItem {
  x: number;
  y: number;
  w: number;
  h: number;
  i: string;
  bgColor: string;
}

interface Props {
  className?: string;
  items?: number;
  cols?: number;
  rowHeight?: number;
  onLayoutChange?: (layout: LayoutItem[]) => void;
  verticalCompact?: boolean;
  preventCollision?: boolean;
}

interface State {
  layout: LayoutItem[];
}

class NoCollisionLayout extends PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: "layout",
    items: 0,
    cols: 12,
    rowHeight: 30,
    onLayoutChange: () => {},
    verticalCompact: false,
    preventCollision: true,
  };

  constructor(props: Props) {
    super(props);

    this.state = { layout: [] };
  }

  generateDOM() {
    return _.map(this.state.layout, (item) => {
      return (
        <div key={item.i} style={{ backgroundColor: item.bgColor }}>
          <span className="text">{item.i}</span>
        </div>
      );
    });
  }

  generateLayout(): LayoutItem[] {
    const { items, cols } = this.props;
    return _.map(_.range(items || 0), (i) => {
      const y = Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % (cols || 0),
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: `item-${i}`,
        bgColor: "white",
      };
    });
  }

  onLayoutChange(layout: RGL.Layout[]): void {
    const newLayout = layout.map((item) => ({
      x: item.x,
      y: item.y,
      w: item.w,
      h: item.h,
      i: item.i,
      bgColor: "white",
    }));
    this.props.onLayoutChange!(newLayout);
  }

  // Función para agregar un nuevo item con el color especificado
  addNewItem(color: string): void {
    const newItem: LayoutItem = {
      x: 0,
      y: 0,
      w: 2,
      h: Math.ceil(Math.random() * 4) + 1,
      i: `item-${this.state.layout.length}`,
      bgColor: color,
    };
    this.setState((prevState) => ({
      layout: [...prevState.layout, newItem],
    }));
  }

  render() {
    return (
      <>
        <div>
          <button onClick={() => this.addNewItem("red")}>LG</button>
          <button onClick={() => this.addNewItem("blue")}>Sony</button>
          <button onClick={() => this.addNewItem("green")}>Samsung</button>
          <button onClick={() => this.addNewItem("yellow")}>Bose</button>
          <button onClick={() => this.addNewItem("orange")}>Marley</button>
        </div>
        <ReactGridLayout
          cols={24}
          width={5200}
          layout={this.state.layout}
          onLayoutChange={(layout) => this.onLayoutChange(layout)}
          {...this.props}
        >
          {this.generateDOM()}
        </ReactGridLayout>
      </>
    );
  }
}

export default NoCollisionLayout;
