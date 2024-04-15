import { PureComponent } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import bose from "../assets/bose_logo.png";
import lg from "../assets/lg.svg";
import marley from "../assets/marley.webp";
import sony from "../assets/sony.png";
import samsung from "../assets/samsung.svg";

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
    items: 7, // Cambiado a 7 bloques
    cols: 12,
    rowHeight: 30,
    onLayoutChange: () => {},
    verticalCompact: false,
    preventCollision: true,
  };

  constructor(props: Props) {
    super(props);

    this.state = { layout: this.generateLayout() }; // Generar el layout inicial
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
    const { cols } = this.props;
    return _.map(_.range(12), (i) => { // Generar exactamente 7 bloques
      const y = Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % (cols || 0),
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: `LG HTS-${i}R`,
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
        <div className="button-container">
          <button
            className="btnglobal color-w"
            id="lg"
            onClick={() => this.addNewItem("#f0ece4")}
          >
            <img src={lg} alt="" />
          </button>
          <button
            className="btnglobal color-w"
            id="sony"
            onClick={() => this.addNewItem("#000")}
          >
            <img src={sony} alt="" />
          </button>
          <button
            className="btnglobal color-w"
            id="samsung"
            onClick={() => this.addNewItem("#14299f")}
          >
            <img src={samsung} alt="" />
          </button>
          <button
            className="btnglobal color-b"
            id="bose"
            onClick={() => this.addNewItem("#f7f8f8")}
          >
            <img src={bose} alt="" />
          </button>
          <button
            className="btnglobal color-w"
            id="marley"
            onClick={() => this.addNewItem("#1c1c28")}
          >
            <img src={marley} alt="" />
          </button>
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
