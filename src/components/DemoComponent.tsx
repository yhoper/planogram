import React, { useState } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

// Definición de interfaces
interface DemoComponentProps {
    items?: number;
    cols?: number;
    rowHeight?: number;
    onLayoutChange?: (layout: ReactGridLayout.Layout[]) => void;
    verticalCompact?: boolean;
}

// Definición de la interfaz para el layout
interface LayoutItem {
    x: number;
    y: number;
    w: number;
    h: number;
    i: string;
}

const DemoComponent: React.FC<DemoComponentProps> = ({
    items = 50,
    cols = 12,
    rowHeight = 30,
    onLayoutChange = () => { },
    verticalCompact = false,
}) => {
    // Generar elementos DOM
    const generateDOM = () => {
        return _.map(_.range(items), function (i) {
            return (
                <div key={i}>
                    <span className="text">{i}</span>
                </div>
            );
        });
    };

    // Generar layout
    const generateLayout = (): LayoutItem[] => {
        return _.map(new Array(items), function (_item, i) {
            const y =
                _.isNumber(cols) ? cols : Math.ceil(Math.random() * 4) + 1; // Usamos cols como fallback si y no está definido correctamente
            return {
                x: (i * 2) % 12,
                y: Math.floor(i / 6) * y,
                w: 2,
                h: 3,
                i: i.toString(),
            };
        });
    };


    const [layout, setLayout] = useState<LayoutItem[]>(generateLayout());

    // Manejar cambio en el layout
    const handleLayoutChange = (layout: LayoutItem[]) => {
        setLayout(layout);
        onLayoutChange(layout);
    };

    return (
        <ReactGridLayout
            layout={layout}
            onLayoutChange={handleLayoutChange}
            cols={cols}
            rowHeight={rowHeight}
            verticalCompact={verticalCompact}
        >
            {generateDOM()}
        </ReactGridLayout>
    );
};

export default DemoComponent;
