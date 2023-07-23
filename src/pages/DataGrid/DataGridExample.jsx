import React, { useState } from 'react'
import DataGrid, {
    Column,
    Grouping,
    GroupPanel,
    Paging,
    Pager,
    SearchPanel,
    FilterRow,
    HeaderFilter,
    Button,
    Editing
} from 'devextreme-react/data-grid'

import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';
import ArrayStore from 'devextreme/data/array_store';
import CustomStore from 'devextreme/data/custom_store';

import DiscountCell from './components/DiscountCell';
import "./DataGridExample.scss"

const pageSizes = [10, 25, 50, 100];

const dataSourceOptions = new DataSource({
    store: new ODataStore({
        url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
        key: 'Id',
        beforeSend(request) {
            request.params.startDate = '2020-05-10';
            request.params.endDate = '2020-05-15';
        },
    })
})

const dataSourceArray = new DataSource({
    store: new ArrayStore({
        key: "id",
        data: [{
            id: 0,
            firstName: 'John',
            lastName: 'Smith',
            age: 30,
            dateOfBirth: new Date("2001/12/01"), // YYYY-DD-MM
            height: 180,
            weight: 84
        },
        {
            id: 1,
            firstName: 'Jane',
            lastName: 'Doe',
            age: 41,
            dateOfBirth: new Date("2003/03/01"), // YYYY-DD-MM
            height: 154,
            weight: 52
        },
        {
            id: 2,
            firstName: 'Jake',
            lastName: 'Doe',
            age: 12,
            dateOfBirth: new Date("1992/04/04"), // YYYY-DD-MM
            height: 120,
            weight: 40
        },
        {
            id: 3,
            firstName: 'Kate',
            lastName: 'Roe',
            age: 41,
            dateOfBirth: new Date("1968/12/07"), // YYYY-DD-MM
            height: 188,
            weight: 70
        }]
    })
})


const jsonPlaceholderDataSource = new CustomStore({
    key: 'id',
    load: async (loadOptions) => {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments");
        return await res.json();
    },
    insert: (values) => {
        // ...
    },
    update: (key, values) => {
        // ...
    },
    remove: (key) => {
        // ...
    }
})

export default function DataGridExample() {
    const [collapsed, setCollapsed] = useState(false)
    const [filterVisible, setFilterVisible] = useState(false)

    const handleContentReady = (event) => {
        if (!collapsed) {
            event.component.expandRow(['EnviroCare']);
            setCollapsed(true)
        }
    }

    const handleToggleFilter = () => setFilterVisible(filterValue => !filterValue)

    const formatAsHeight = ({ valueText }) => `${valueText} cm`
    const formatAsWeight = ({ valueText }) => `${valueText} kg`

    return (
        <>
            <div className="dx-demo-grid">
                <DataGrid
                    dataSource={dataSourceOptions}
                    allowColumnReordering
                    rowAlternationEnabled
                    showBorders
                    onContentReady={handleContentReady}
                >
                    <HeaderFilter visible={true} />
                    <Editing
                        mode="row"
                        allowAdding={true}
                        allowDeleting={true}
                        allowUpdating={true}
                    />

                    <GroupPanel visible={true} />
                    <SearchPanel visible={true} highlightCaseSensitive={true} width={200} />
                    <Grouping autoExpandAll={false} />

                    <Column dataField="Product" groupIndex={0} />

                    <Column
                        dataField="Amount"
                        caption="Sale Amount"
                        dataType="number"
                        format="currency"
                        alignment="right"
                    />
                    <Column
                        dataField="Discount"
                        caption="Discount %"
                        dataType="number"
                        format="percent"
                        alignment="right"
                        allowGrouping={false}
                        cellRender={DiscountCell}
                        cssClass="bullet"
                    />
                    <Column dataField="SaleDate" dataType="date" />
                    <Column dataField="Region" dataType="string" />
                    <Column dataField="Sector" dataType="string" />
                    <Column dataField="Channel" dataType="string" />
                    <Column dataField="Customer" dataType="string" width={150} />

                    <Pager
                        allowedPageSizes={pageSizes}
                        showPageSizeSelector
                        showNavigationButtons
                        showInfo
                    />
                    <Paging defaultPageSize={10} />
                </DataGrid>
            </div>
            <div className="dx-demo-grid">
                <DataGrid
                    dataSource={dataSourceArray}
                    rowAlternationEnabled
                    focusedRowEnabled
                    showBorders
                >
                    <SearchPanel visible={true} highlightCaseSensitive={true} width={200} />
                    <Column dataField="id" dataType="number" visible={false} />
                    <Column dataField="firstName" dataType="string" />
                    <Column dataField="lastName" dataType="string" />
                    <Column dataField="age" dataType="number" alignment="right" />
                    <Column dataField="dateOfBirth" dataType="date" />
                    <Column dataField="height"
                        dataType="number"
                        customizeText={formatAsHeight}
                        alignment="left"
                    />
                    <Column
                        dataField="weight"
                        dataType="number"
                        customizeText={formatAsWeight}
                        alignment="left"
                    />
                </DataGrid>
            </div>
            <div className="dx-demo-grid">
                <DataGrid
                    dataSource={jsonPlaceholderDataSource}
                    allowColumnReordering
                    rowAlternationEnabled
                    showBorders
                    allowColumnResizing
                >
                    <FilterRow visible={filterVisible} />
                    <GroupPanel visible={true} />
                    <SearchPanel visible={true} highlightCaseSensitive={true} width={200} />
                    <Grouping autoExpandAll={false} />

                    <Column type="buttons">
                        <Button cssClass="dx-filter-button" icon="filter" onClick={handleToggleFilter} />
                    </Column>
                    <Column
                        dataField="id"
                        dataType="number"
                        width={100}
                        allowResizing
                        allowHiding
                    />
                    <Column dataField="name" dataType="string" allowEditing />
                    <Column dataField="email" dataType="string" allowEditing />
                    <Column dataField="body" dataType="string" allowEditing />

                    <Pager
                        allowedPageSizes={pageSizes}
                        showPageSizeSelector
                        showNavigationButtons
                        showInfo
                    />
                    <Paging defaultPageSize={10} />
                </DataGrid>
            </div>
        </>
    )
}
