import React, { PureComponent } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

export default class NoCompactingLayout extends PureComponent {
  static defaultProps = {
    className: "layout",
    items: 120,
    cols: 84,
    rowHeight: 20,
    onLayoutChange: function () {},
    // This turns off compaction so you can place items wherever.
    verticalCompact: false,
  };

  constructor(props) {
    super(props);

    const layout = this.generateLayout();
    this.state = { layout };
  }

  generateDOM() {
    return _.map(_.range(this.props.items), function (i) {
      return (
        <div key={i}>
          <span className="text">{i}</span>
        </div>
      );
    });
  }

  generateLayout() {
    const p = this.props;
    return _.map(new Array(p.items), function (item, i) {
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

  onLayoutChange = (layout) => {
    this.props.onLayoutChange(layout);
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
