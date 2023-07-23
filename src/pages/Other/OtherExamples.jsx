import React from 'react'
import "./OtherExamples.scss"
import { storeTypesDataSource } from '../../data/chartData'
import {
    Chart, Series, CommonSeriesSettings, Label, Format
} from 'devextreme-react/chart';

function OtherExamples() {
    return (
        <>
            <div className="dx-chart-divider">
                <h4>Stacked Bar Chart</h4>
                <Chart dataSource={storeTypesDataSource}>
                    <CommonSeriesSettings argumentField="time" type="stackedBar">
                        <Label visible={true}>
                            <Format type="fixedPoint" precision={0} />
                        </Label>
                    </CommonSeriesSettings>
                    <Series valueField="cakes" name="cakes" />
                    <Series valueField="lollipops" name="lollipops" />
                    <Series valueField="water" name="water" />
                    <Series valueField="juice" name="juice" />
                </Chart>
            </div>
        </>
    )
}

export default OtherExamples