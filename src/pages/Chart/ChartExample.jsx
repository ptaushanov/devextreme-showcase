import React from 'react'
import "./ChartExample.scss"

import {
    Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export, Tooltip,
    ArgumentAxis, ValueAxis, Tick, MinorTick, Border, Connector, Crosshair, Grid,
    Size, CommonPaneSettings, LoadingIndicator
} from 'devextreme-react/chart'

import PieChart, {
    Legend as PieLegend,
    Series as PieSeries,
    Tooltip as PieTooltip,
    Format as PieFormat,
    Label as PieLabel,
    Connector as PieConnector,
} from 'devextreme-react/pie-chart';

import { SelectBox } from 'devextreme-react';

import 'devextreme/data/odata/store';
import DataSource from 'devextreme/data/data_source'

import {
    simpleChartDataSource,
    simpleChartDataSource2,
    sideBySideDataSource,
    populationsDataSource
} from '../../data/chartData'

import { months } from "../../data/months"

const temperatureDataSource = new DataSource({
    store: {
        type: 'odata',
        url: 'https://js.devexpress.com/Demos/WidgetsGallery/odata/WeatherItems',
    },
    postProcess(results) {
        return results[0].DayItems;
    },
    expand: 'DayItems',
    filter: ['Id', '=', 1],
    paginate: false,
});


export default function ChartExample() {

    const customizeDates = ({ value }) => {
        const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat("en-US", options).format(value)
    }

    const customizeTemperatureLabel = ({ valueText }) => `${valueText}${'&#176C'}`
    const customizeTemperatureTooltip = ({ valueText }) => `${valueText}${'&#176C'}`
    const customizePieTooltip = ({ valueText, percent }) => `${valueText} - ${(percent * 100).toFixed(2)}%`

    const handleTemperatureChanged = ({ value }) => {
        temperatureDataSource.filter(['Id', '=', value]);
        temperatureDataSource.load();
    };

    return (
        <>
            <div className="dx-chart-divider">
                <h4>Simple Bar Chart</h4>
                <Chart
                    dataSource={simpleChartDataSource}
                >
                    <Series
                        valueField="earthquakes"
                        argumentField="year"
                        name="earthquakes"
                        type="bar"
                        color="#00aaff"
                    />
                </Chart>
            </div>
            <div className="dx-chart-divider">
                <h4>Simple Line Chart</h4>
                <Chart dataSource={simpleChartDataSource2}>
                    <Series
                        valueField="sales"
                        argumentField="date"
                        name="sales"
                        type="line"
                        color="#555ccc"
                    />
                    <Series
                        valueField="netProfit"
                        argumentField="date"
                        name="net profit"
                        type="line"
                        color="#aa99ff"
                    />
                    <Crosshair enabled={true} color="#aa50aa">
                        <Label visible={true} />
                    </Crosshair>
                    <Tooltip enabled={true} position="left" />
                </Chart>
            </div>
            <div className="dx-chart-divider">
                <h4>Side-by-Side Bar Chart</h4>
                <Chart
                    title="Gross State Product within the Great Lakes Region"
                    dataSource={sideBySideDataSource}
                    onPointClick={event => event.target.select()}
                    theme="generic.greenmist"
                >
                    <CommonSeriesSettings
                        argumentField="state"
                        type="bar"
                        hoverMode="onlyPoint"
                        selectionMode="onlyPoint"
                    >
                        <Label visible={true}>
                            <Format type="fixedPoint" precision={0} />
                        </Label>
                    </CommonSeriesSettings>
                    <Series
                        valueField="year2018"
                        name="2018"
                    />
                    <Series
                        valueField="year2017"
                        name="2017"
                    />
                    <Series
                        valueField="year2016"
                        name="2016"
                    />

                    <ValueAxis title="Gross product">
                        <MinorTick visible={true} />
                    </ValueAxis>

                    <ArgumentAxis title="Region" />

                    <Legend verticalAlignment="top" horizontalAlignment="center"></Legend>
                    <Export enabled={true} />
                </Chart>
            </div>
            <div className="dx-chart-divider">
                <Chart rotated dataSource={simpleChartDataSource2}>
                    <Series
                        valueField="sales"
                        argumentField="date"
                        name="sales"
                        type="bar"
                        color="#555ccc"
                    >
                        <Label visible={true} backgroundColor="#555ccc" alignment="center">
                            <Border visible={true} dashStyle="solid" width={1.5} color="#333aaa" cornerRadius={100} />
                            <Connector visible={true} width={2} />
                        </Label>
                    </Series>
                    <Series
                        valueField="netProfit"
                        argumentField="date"
                        name="net profit"
                        type="bar"
                        color="#aa99ff"
                    >
                        <Label visible={true} backgroundColor="#aa99ff" alignment="center">
                            <Border visible={true} dashStyle="solid" width={1.5} color="#8877dd" cornerRadius={100} />
                            <Connector visible={true} width={2} />
                        </Label>
                    </Series>
                    <ArgumentAxis>
                        <Label customizeText={customizeDates} />
                    </ArgumentAxis>

                    <ValueAxis>
                        <Tick visible={false} />
                        <Label visible={false} />
                    </ValueAxis>

                    <Tooltip enabled={true} position="left" />
                    <Legend verticalAlignment="bottom" horizontalAlignment="right"></Legend>
                </Chart>
            </div>

            <div className="dx-chart-divider">
                <h4>Server Side Data Processing Bar Chart</h4>
                <Chart
                    title="Temperature in Seattle , 2017"
                    dataSource={temperatureDataSource}>
                    <Size height={420} />
                    <ValueAxis valueType="numeric">
                        <Grid opacity={0.2} />
                        <Label customizeText={customizeTemperatureLabel} />
                    </ValueAxis>
                    <ArgumentAxis type="discrete">
                        <Grid visible={true} opacity={0.5} />
                    </ArgumentAxis>
                    <CommonPaneSettings>
                        <Border
                            visible={true}
                            width={2}
                            top={false}
                            right={false}
                        />
                    </CommonPaneSettings>
                    <Series
                        argumentField="Number"
                        valueField="Temperature"
                        type="spline"
                    />
                    <Legend visible={false} />
                    <Export enabled={true} />
                    <Tooltip
                        enabled={true}
                        contentTemplate={customizeTemperatureTooltip}
                        paddingLeftRight={20}
                        paddingTopBottom={20}
                        cornerRadius={10}
                    />
                    <LoadingIndicator enabled={true} />
                </Chart>

                <div className="dx-action">
                    <div className="dx-label">Choose a month:</div>
                    <SelectBox
                        width={150}
                        valueExpr="id"
                        displayExpr="name"
                        items={months}
                        defaultValue={1}
                        onValueChanged={handleTemperatureChanged} />
                </div>
            </div>
            <div className="dx-chart-divider">
                <h4>Donut Chart</h4>
                <PieChart
                    type="donut"
                    title="The Population of Continents and Regions"
                    dataSource={populationsDataSource}
                >
                    <PieSeries argumentField="region">
                        <PieLabel visible={true} format="millions">
                            <PieConnector visible={true} />
                        </PieLabel>
                    </PieSeries>
                    <PieLegend
                        margin={0}
                        horizontalAlignment="right"
                        verticalAlignment="top"
                    />
                    <PieTooltip enabled={true} contentTemplate={customizePieTooltip}>
                        <PieFormat type="millions" />
                    </PieTooltip>
                </PieChart>
            </div>
        </>
    )
}
