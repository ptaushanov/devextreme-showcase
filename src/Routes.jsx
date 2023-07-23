import { Routes as Switch, Route } from "react-router-dom"
import {
    Home,
    NotFound,
    DataGridExample,
    ChartExample,
    FormExample,
    GanttExample,
    FormFields,
    OtherExamples
} from "./pages"

import { TabNavigation } from "./layouts"

export default function Routes() {
    return (
        <Switch>
            <Route
                exact
                path="/"
                element={
                    <TabNavigation>
                        <Home />
                    </TabNavigation>
                }
            />
            <Route
                exact
                path="/datagrid"
                element={
                    <TabNavigation>
                        <DataGridExample />
                    </TabNavigation>
                }
            />
            <Route
                exact
                path="/chart"
                element={
                    <TabNavigation>
                        <ChartExample />
                    </TabNavigation>
                }
            />
            <Route
                exact
                path="/gantt"
                element={
                    <TabNavigation>
                        <GanttExample />
                    </TabNavigation>
                }
            />
            <Route
                exact
                path="/form"
                element={
                    <TabNavigation>
                        <FormExample />
                    </TabNavigation>
                }
            />
            <Route
                exact
                path="/form-fields"
                element={
                    <TabNavigation>
                        <FormFields />
                    </TabNavigation>
                }
            />
            <Route
                exact
                path="/other-examples"
                element={
                    <TabNavigation>
                        <OtherExamples />
                    </TabNavigation>
                }
            />
            <Route
                path="*"
                element={<NotFound />}
            />
        </Switch>
    )
}
