import { PureComponent } from "react";
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

class NoCollisionLayout extends PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    className: "layout",
    items: 50,
    cols: 12,
    rowHeight: 30,
    onLayoutChange: () => {},
    verticalCompact: false,
    preventCollision: true,
  };

  constructor(props: Props) {
    super(props);

    const layout = this.generateLayout();
    this.state = { layout };
  }

  generateDOM() {
    return _.map(_.range(28 || 0), (i) => {
      return (
        <div key={i}>
          <span className="text">{i}</span>
        </div>
      );
    });
  }

  generateLayout(): LayoutItem[] {
    const { items, cols, rowHeight } = this.props;
    console.log(rowHeight)
    return _.map(_.range(items || 0), (i) => {
      const y = Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % (cols || 0),
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString(),
      };
    });
  }

  onLayoutChange(layout: LayoutItem[]) {
    this.props.onLayoutChange!(layout);
  }

  render() {
    return (
      <ReactGridLayout
        
        onLayoutChange={(layout) => this.onLayoutChange(layout)}
        {...this.props}
      >
        {this.generateDOM()}
      </ReactGridLayout>
    );
  }
}

export default NoCollisionLayout;
