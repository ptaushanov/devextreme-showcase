import React, { useState } from 'react'
import {
    Form, SimpleItem, Label, ColCountByScreen, GroupItem, TabbedItem, Tab,
    EmailRule, NumericRule, RequiredRule, ButtonItem, ButtonOptions,
} from 'devextreme-react/form'

import { SelectBox } from 'devextreme-react'
import "./FormExample.scss"

import { employee, product, employee2 } from '../../data/formData'

export default function FormExample() {
    const [submitResult, setSubmitResult] = useState("")
    const [selectedColumnCount, setSelectedColumnCount] = useState(2)

    const dobOptions = { disabled: true }
    const hireDateOptions = { disabled: true }

    // JS Vanilla way
    const handleSubmit = (event) => {
        event.preventDefault();

        const { target: form } = event
        const formData = new FormData(form);
        const result = Array.from(formData.entries())
            .reduce((acc, [label, value]) => {
                acc[label] = value
                return acc
            }, {})

        setSubmitResult(result)
    }

    const handleCCChange = ({ value }) => setSelectedColumnCount(value)

    return (
        <>
            <div className="dx-form">
                <div className="dx-box-flex">
                    <h4 className="dx-h4">Simple Form</h4>
                    <p className="dx-subtext">with two columns</p>
                </div>
                <Form formData={employee} showColonAfterLabel colCount={2}></Form>
            </div>
            <div className="dx-form">
                <h4 className="dx-h4">Simple Form with items configuration</h4>
                <p className="dx-subtext">with floating labels</p>
                <Form formData={employee} labelMode="floating">
                    <SimpleItem dataField="firstName" editorType="dxTextBox" />
                    <SimpleItem dataField="lastName" editorType="dxTextBox" />
                    <SimpleItem
                        dataField="dateOfBirth"
                        editorType="dxDateBox"
                        editorOptions={dobOptions}
                    />
                    <SimpleItem
                        dataField="hireDate"
                        editorType="dxDateBox"
                        editorOptions={hireDateOptions}
                    />
                    <SimpleItem dataField="phone" editorType="dxTextBox" />
                    <SimpleItem dataField="email" editorType="dxTextBox">
                        <EmailRule message="Value must be an email" />
                    </SimpleItem>
                    <SimpleItem dataField="officeNumber" editorType="dxNumberBox" />
                </Form>
            </div>
            <div className="dx-form">
                <h4 className="dx-h4">Two Column Form (Responsive)</h4>
                <p className="dx-subtext">with spanning items (fields) and different label locations</p>
                <Form formData={product} labelMode="outside" labelLocation="top" >
                    <ColCountByScreen sm={1} xs={1} md={2} lg={2} />
                    <SimpleItem cssClass="dx-simple-item" dataField="name" editorType="dxTextBox" />
                    <SimpleItem cssClass="dx-simple-item" dataField="price" editorType="dxNumberBox" />
                    <SimpleItem cssClass="dx-simple-item" dataField="description" editorType="dxTextArea" colSpan={2} />
                    <SimpleItem cssClass="dx-simple-item" dataField="freeShipping" editorType="dxCheckBox">
                        <Label location="left" />
                    </SimpleItem>
                </Form>
            </div>
            <div className="dx-form">
                <div className="dx-box-flex">
                    <h4 className="dx-h4">Grouped/Tabbed From</h4>
                    <p className="dx-subtext">in read-only mode</p>
                </div>
                <Form formData={employee2} labelMode="outside" labelLocation="top" readOnly>
                    <ColCountByScreen sm={1} xs={1} md={2} lg={2} />

                    <GroupItem caption="Employee">
                        <SimpleItem cssClass="dx-simple-item" dataField="firstName" isRequired />
                        <SimpleItem cssClass="dx-simple-item" dataField="lastName" isRequired />
                        <SimpleItem cssClass="dx-simple-item" dataField="position" />
                        <SimpleItem cssClass="dx-simple-item" dataField="hireDate" />
                        <SimpleItem cssClass="dx-simple-item" dataField="officeNumber" />
                    </GroupItem>
                    <GroupItem caption="Personal Information">
                        <TabbedItem>
                            <Tab title="Contacts">
                                <SimpleItem cssClass="dx-simple-item" dataField="phone" />
                                <SimpleItem cssClass="dx-simple-item" dataField="email" />
                                <SimpleItem cssClass="dx-simple-item" dataField="skype" />
                            </Tab>
                            <Tab title="Note">
                                <SimpleItem
                                    cssClass="dx-simple-item"
                                    dataField="notes"
                                    editorType="dxTextArea" />
                            </Tab>
                        </TabbedItem>
                    </GroupItem>
                </Form>
            </div>
            <div className="dx-form">
                <div className="dx-box-flex">
                    <h4 className="dx-h4">Submittable Form</h4>
                    <p className="dx-subtext">with form validation and column controls</p>
                </div>
                <div className="dx-col-menu dx-fieldset">
                    <div className="dx-field">
                        <div className="dx-field-label">Column Count: </div>
                        <div className="dx-field-value">
                            <SelectBox
                                items={[1, 2, 3]}
                                value={selectedColumnCount}
                                onValueChanged={handleCCChange}
                            />
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <Form colCount={selectedColumnCount}>
                        <GroupItem caption="Personal Information">
                            <SimpleItem dataField="firstName" isRequired />
                            <SimpleItem dataField="lastName" isRequired />
                            <SimpleItem dataField="position" isRequired />
                            <SimpleItem
                                dataField="hireDate"
                                isRequired
                                editorType="dxDateBox"
                            />
                            <SimpleItem dataField="officeNumber" editorType="dxNumberBox">
                                <NumericRule />
                                <RequiredRule />
                            </SimpleItem>
                            <ButtonItem>
                                <ButtonOptions text="Submit Form" useSubmitBehavior />
                            </ButtonItem>
                        </GroupItem>
                        <GroupItem caption="Submitted Result">
                            <div className="dx-fieldset">
                                <div className="dx-field">
                                    <div className="dx-field-label">
                                        Personal Information:
                                    </div>
                                    {Object.entries(submitResult).map(([label, value], index) => (
                                        <div key={index} className="dx-field-value-static">
                                            {label} : {value}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </GroupItem>
                    </Form>
                </form>
            </div>
        </>
    )
}
