import { PureComponent, ReactNode } from "react";
import _ from "lodash";
import RGL, { WidthProvider, Layout } from "react-grid-layout";

interface Props {
  className?: string;
  items?: number;
  cols?: number;
  rowHeight?: number;
  onLayoutChange?: (layout: Layout[]) => void;
  verticalCompact?: boolean;
  y?: number;
}

const ReactGridLayout = WidthProvider(RGL);

export default class NoCompactingLayout extends PureComponent<Props, { layout: Layout[] }> {
  static defaultProps: Partial<Props> = {
    className: "layout",
    items: 120,
    cols: 84,
    rowHeight: 20,
    onLayoutChange: () => {},
    // This turns off compaction so you can place items wherever.
    verticalCompact: false,
  };

  constructor(props: Props) {
    super(props);

    const layout = this.generateLayout();
    this.state = { layout };
  }

  generateDOM(): ReactNode[] {
    return _.map(_.range(this.props.items!), (i) => {
      return (
        <div key={i}>
          <span className="text">{i}</span>
        </div>
      );
    });
  }

  generateLayout(): Layout[] {
    const p = this.props;
    return _.map(new Array(p.items), (_, i) => {
      const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 84,
        y: Math.floor(i / 6) * y,
        w: 12,
        h: y,
        i: i.toString(),
      };
    });
  }

  onLayoutChange = (layout: Layout[]) => {
    this.props.onLayoutChange!(layout);
  };

  exportToJson = () => {
    const { layout } = this.state;
    const jsonLayout = JSON.stringify(layout);
    console.log(jsonLayout); // You can replace console.log with any logic to save or export the JSON
  };

  render() {
    return (
      <div>
        <ReactGridLayout
          layout={this.state.layout}
          onLayoutChange={this.onLayoutChange}
          {...this.props}
        >
          {this.generateDOM()}
        </ReactGridLayout>
        <button onClick={this.exportToJson}>Exportar a JSON</button>
      </div>
    );
  }
}
