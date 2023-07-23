import React, { useState } from 'react'
import "./FormFields.scss"

import "devextreme/ui/text_box"
import "devextreme/ui/text_area"
import "devextreme/ui/number_box"
import "devextreme/ui/autocomplete"
import "devextreme/ui/check_box"
import "devextreme/ui/color_box"
import "devextreme/ui/date_box"
import "devextreme/ui/select_box"
import "devextreme/ui/switch"
import "devextreme/ui/tag_box"
import "devextreme/ui/slider"

import {
    ColCountByScreen, Form, SimpleItem, GroupItem,
    ButtonItem, TabbedItem, Tab, ButtonOptions, Label
} from "devextreme-react/form"

import { ValidationSummary } from 'devextreme-react/validation-summary'

import {
    TextBox, Autocomplete, CheckBox, ColorBox, DateBox, NumberBox,
    SelectBox, Switch, TagBox, TextArea, Button, Slider
} from 'devextreme-react'

import {
    Validator, RequiredRule, EmailRule, StringLengthRule,
    PatternRule, RangeRule, NumericRule
} from 'devextreme-react/validator';

import { cities } from '../../data/formData'
import { Tooltip } from 'devextreme-react/range-slider'

function FormFields() {
    const [stylingMode, setStylingMode] = useState("outlined")
    const [labelMode, setLabelMode] = useState("floating")
    const [labelModeForm, setLabelModeForm] = useState("outside")
    const stylingModeOptions = ["filled", "outlined", "underlined"];
    const labelModeOptions = ["static", "floating", "hidden"]
    const labelModeSIOptions = ["static", "floating", "hidden", "outside"]

    const handleStylingModeChanged = ({ value }) => setStylingMode(value)
    const handleLabelModeChanged = ({ value }) => setLabelMode(value)
    const handleLabelModeFormChanged = ({ value }) => setLabelModeForm(value)

    const renderTextBox = () => {
        return <TextBox
            stylingMode={stylingMode}
            labelMode={labelMode}
            label="Name"
            placeholder="Enter name here ..."
            showClearButton
        />
    }

    const renderAutocomplete = () => {
        return <Autocomplete
            dataSource={cities}
            stylingMode={stylingMode}
            labelMode={labelMode}
            placeholder="Type city here ..."
            label="City"
            showClearButton
        />
    }

    const renderTextArea = () => {
        return <TextArea
            stylingMode={stylingMode}
            labelMode={labelMode}
            placeholder="Type a description here ..."
            label="Description"
            showClearButton
        />
    }

    const renderNumberBox = () => {
        return <NumberBox
            stylingMode={stylingMode}
            labelMode={labelMode}
            placeholder="Enter price here ..."
            label="Price"
            format="$ #,##0.##"
            showClearButton
        />
    }

    return (
        <>
            <div className="dx-col-menu dx-fieldset">
                <div className="dx-field">
                    <div className="dx-field-label">Styling Mode: </div>
                    <div className="dx-field-value">
                        <SelectBox
                            items={stylingModeOptions}
                            value={stylingMode}
                            onValueChanged={handleStylingModeChanged}
                        />
                    </div>
                </div>
                <div className="dx-field">
                    <div className="dx-field-label">Label Mode: </div>
                    <div className="dx-field-value">
                        <SelectBox
                            items={labelModeOptions}
                            value={labelMode}
                            onValueChanged={handleLabelModeChanged}
                        />
                    </div>
                </div>
                <div className="dx-field">
                    <div className="dx-field-label">Label Mode (Form): </div>
                    <div className="dx-field-value">
                        <SelectBox
                            items={labelModeSIOptions}
                            value={labelModeForm}
                            onValueChanged={handleLabelModeFormChanged}
                        />
                    </div>
                </div>
            </div>
            <div className="dx-form">
                <div className="dx-flex-container">
                    <div className="dx-box-flex dx-flex-item">
                        <h4 className="dx-h4 ">TextBox</h4>
                        <p className="dx-subtext">and dxTextBox</p>
                    </div>
                    <div className="dx-box-flex dx-flex-item">
                        <h4 className="dx-h4 ">Autocomplete</h4>
                        <p className="dx-subtext">and dxAutocomplete</p>
                    </div>
                </div>
                <form onSubmit={(event) => event.preventDefault()}>
                    <Form labelMode={labelModeForm} showValidationSummary>
                        <ColCountByScreen sm={1} xs={1} md={2} lg={2} />
                        {/* TextBox */}
                        <TabbedItem>
                            <Tab title="TextBox Editor">
                                <GroupItem caption="TextBox (active)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <TextBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Enter name here ..."
                                            label="Name"
                                        >
                                        </TextBox>
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem caption="TextBox (using render with clearButton)">
                                    <SimpleItem
                                        cssClass="dx-simple-item"
                                        render={renderTextBox}
                                    />
                                </GroupItem>

                                <GroupItem caption="TextBox (disabled)">
                                    <SimpleItem cssClass="dx-simple-item" >
                                        <TextBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Enter name here ..."
                                            label="Name"
                                            disabled
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem caption="TextBox (readOnly)">
                                    <SimpleItem cssClass="dx-simple-item" >
                                        <TextBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Enter name here ..."
                                            label="Name"
                                            readOnly
                                        />
                                    </SimpleItem>
                                </GroupItem>
                            </Tab>

                            <Tab title="Validated TextBox">
                                <GroupItem caption="TextBox RequiredRule">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <TextBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Enter name here ..."
                                            label="Name"
                                        >
                                            <Validator>
                                                <RequiredRule />
                                            </Validator>
                                        </TextBox>
                                    </SimpleItem>
                                </GroupItem>
                                <GroupItem caption="TextBox StringLengthRule">
                                    <SimpleItem cssClass="dx-simple-item" >
                                        <TextBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Type text 2-8 characters long ..."
                                            label="Long Text"
                                        >
                                            <Validator>
                                                <StringLengthRule min={2} max={8} />
                                            </Validator>
                                        </TextBox>
                                    </SimpleItem>
                                </GroupItem>
                                <GroupItem caption="TextBox EmailRule">
                                    <SimpleItem cssClass="dx-simple-item" >
                                        <TextBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Enter email here ..."
                                            label="Email"
                                        >
                                            <Validator>
                                                <EmailRule />
                                            </Validator>
                                        </TextBox>
                                    </SimpleItem>
                                </GroupItem>
                                <GroupItem caption="TextBox PatternRule">
                                    <SimpleItem cssClass="dx-simple-item" >
                                        <TextBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Enter small letters ..."
                                            label="Small letters"
                                        >
                                            <Validator>
                                                <PatternRule
                                                    pattern={/[a-z]/}
                                                    message="Only small letters are allowed"
                                                />
                                            </Validator>
                                        </TextBox>
                                    </SimpleItem>
                                </GroupItem>
                                <SimpleItem cssClass="dx-submit">
                                    <Button useSubmitBehavior text="Submit" />
                                </SimpleItem>
                            </Tab>

                            <Tab title="dxTextBox (Validated)">
                                <SimpleItem
                                    cssClass="dx-simple-item"
                                    editorType="dxTextBox"
                                    editorOptions={{ stylingMode, labelMode }}
                                >
                                    <Label text="dxTextBox" location="left" />
                                    <RequiredRule />
                                    <StringLengthRule min={2} max={20} />
                                    <PatternRule
                                        pattern={/[a-z]/}
                                        message="Only small letters are allowed"
                                    />
                                </SimpleItem>
                                <ButtonItem colSpan={2}>
                                    <ButtonOptions useSubmitBehavior text="Submit" />
                                </ButtonItem>
                            </Tab>
                        </TabbedItem>
                        {/* Autocomplete */}
                        <TabbedItem>
                            <Tab title="Autocomplete Editor">
                                <GroupItem caption="Autocomplete (active)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <Autocomplete
                                            dataSource={cities}
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Type city here ..."
                                            label="City"
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem caption="Autocomplete (using render with clearButton)">
                                    <SimpleItem
                                        cssClass="dx-simple-item"
                                        render={renderAutocomplete}
                                    />
                                </GroupItem>

                                <GroupItem caption="Autocomplete (disabled)">
                                    <SimpleItem cssClass="dx-simple-item" >
                                        <Autocomplete
                                            dataSource={cities}
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Type city here ..."
                                            label="City"
                                            disabled
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem caption="Autocomplete (readOnly)">
                                    <SimpleItem cssClass="dx-simple-item" >
                                        <Autocomplete
                                            dataSource={cities}
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Type city here ..."
                                            label="City"
                                            readOnly
                                        />
                                    </SimpleItem>
                                </GroupItem>
                            </Tab>

                            <Tab title="Validated Autocomplete">
                                <GroupItem caption="Autocomplete RequiredRule">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <Autocomplete
                                            dataSource={cities}
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Type city here ..."
                                            label="City"
                                        >
                                            <Validator>
                                                <RequiredRule />
                                            </Validator>
                                        </Autocomplete>
                                    </SimpleItem>
                                </GroupItem>
                                <GroupItem caption="Autocomplete StringLengthRule">
                                    <SimpleItem cssClass="dx-simple-item" >
                                        <Autocomplete
                                            dataSource={cities}
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Enter text 2-8 characters long ..."
                                            label="Long City"
                                        >
                                            <Validator>
                                                <StringLengthRule min={2} max={8} />
                                            </Validator>
                                        </Autocomplete>
                                    </SimpleItem>
                                </GroupItem>
                                <GroupItem caption="Autocomplete PatternRule">
                                    <SimpleItem cssClass="dx-simple-item" >
                                        <Autocomplete
                                            dataSource={cities}
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Type only letters ..."
                                            label="Only letters"
                                        >
                                            <Validator>
                                                <PatternRule
                                                    pattern={/[a-z|A-Z]/}
                                                    message="Only letters are allowed"
                                                />
                                            </Validator>
                                        </Autocomplete>
                                    </SimpleItem>
                                </GroupItem>
                                <SimpleItem cssClass="dx-submit">
                                    <Button useSubmitBehavior text="Submit" />
                                </SimpleItem>
                            </Tab>

                            <Tab title="dxAutocomplete (Validated)">
                                <SimpleItem
                                    cssClass="dx-simple-item"
                                    editorType="dxAutocomplete"
                                    editorOptions={{
                                        dataSource: cities,
                                        stylingMode,
                                        labelMode
                                    }}
                                >
                                    <Label text="dxAutocomplete" location="left" />
                                    <RequiredRule />
                                    <StringLengthRule min={2} max={20} />
                                    <PatternRule
                                        pattern={/[a-z]/}
                                        message="Only small letters are allowed"
                                    />
                                </SimpleItem>
                                <ButtonItem colSpan={2}>
                                    <ButtonOptions useSubmitBehavior text="Submit" />
                                </ButtonItem>
                            </Tab>
                        </TabbedItem>
                        <ValidationSummary />
                    </Form>
                </form>
            </div>

            <div className="dx-form">
                <div className="dx-flex-container">
                    <div className="dx-box-flex dx-flex-item">
                        <h4 className="dx-h4 ">TextArea</h4>
                        <p className="dx-subtext">and dxTextArea</p>
                    </div>
                    <div className="dx-box-flex dx-flex-item">
                        <h4 className="dx-h4 ">NumberBox</h4>
                        <p className="dx-subtext">and dxNumberBox</p>
                    </div>
                </div>
                <form onSubmit={(event) => event.preventDefault()}>
                    <Form labelMode={labelModeForm} showValidationSummary>
                        <ColCountByScreen sm={1} xs={1} md={2} lg={2} />
                        {/* TextArea */}
                        <TabbedItem>
                            <Tab title="TextArea Editor">
                                <GroupItem caption="TextArea (active)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <TextArea
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Type a description here ..."
                                            label="Description"
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem caption="TextArea (fixed height)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <TextArea
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Type a description here ..."
                                            label="Description"
                                            height={150}
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem caption="TextArea (using render with clearButton)">
                                    <SimpleItem
                                        cssClass="dx-simple-item"
                                        render={renderTextArea}
                                    />
                                </GroupItem>

                                <GroupItem caption="TextArea (disabled)">
                                    <SimpleItem cssClass="dx-simple-item" >
                                        <TextArea
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Type a description here ..."
                                            label="Description"
                                            disabled
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem caption="TextArea (readOnly)">
                                    <SimpleItem cssClass="dx-simple-item" >
                                        <TextArea
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Type a description here ..."
                                            label="Description"
                                            readOnly
                                        />
                                    </SimpleItem>
                                </GroupItem>
                            </Tab>

                            <Tab title="Validated TextArea">
                                <GroupItem caption="TextArea RequiredRule">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <TextArea
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Type a description here ..."
                                            label="Description"
                                        >
                                            <Validator>
                                                <RequiredRule />
                                            </Validator>
                                        </TextArea>
                                    </SimpleItem>
                                </GroupItem>
                                <GroupItem caption="TextArea maxLength">
                                    <SimpleItem cssClass="dx-simple-item" >
                                        <TextArea
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Enter up to 12 characters long ..."
                                            label="Description"
                                            maxLength={12}
                                        />
                                    </SimpleItem>
                                </GroupItem>
                                <GroupItem caption="TextArea PatternRule">
                                    <SimpleItem cssClass="dx-simple-item" >
                                        <TextArea
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Enter small letters ..."
                                            label="Description"
                                        >
                                            <Validator>
                                                <PatternRule
                                                    pattern={/[a-z]/}
                                                    message="Only small letters are allowed"
                                                />
                                            </Validator>
                                        </TextArea>
                                    </SimpleItem>
                                </GroupItem>
                                <SimpleItem cssClass="dx-submit">
                                    <Button useSubmitBehavior text="Submit" />
                                </SimpleItem>
                            </Tab>

                            <Tab title="dxTextArea (Validated)">
                                <SimpleItem
                                    cssClass="dx-simple-item"
                                    editorType="dxTextArea"
                                    editorOptions={{ stylingMode, labelMode }}
                                >
                                    <Label text="dxTextArea" location="left" />
                                    <RequiredRule />
                                    <StringLengthRule min={2} max={20} />
                                    <PatternRule
                                        pattern={/[a-z]/}
                                        message="Only small letters are allowed"
                                    />
                                </SimpleItem>
                                <ButtonItem colSpan={2}>
                                    <ButtonOptions useSubmitBehavior text="Submit" />
                                </ButtonItem>
                            </Tab>
                        </TabbedItem>
                        {/* NumberBox */}
                        <TabbedItem>
                            <Tab title="NumberBox Editor">
                                <GroupItem caption="NumberBox (active)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <NumberBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Enter price here ..."
                                            label="Price"
                                            format="$ #,##0.##"
                                        >
                                        </NumberBox>
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem caption="NumberBox (using render with clearButton)">
                                    <SimpleItem
                                        cssClass="dx-simple-item"
                                        render={renderNumberBox}
                                    />
                                </GroupItem>

                                <GroupItem caption="NumberBox (disabled)">
                                    <SimpleItem cssClass="dx-simple-item" >
                                        <NumberBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Enter price here ..."
                                            label="Price"
                                            format="$ #,##0.##"
                                            disabled
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem caption="NumberBox (readOnly)">
                                    <SimpleItem cssClass="dx-simple-item" >
                                        <NumberBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Enter price here ..."
                                            label="Price"
                                            format="$ #,##0.##"
                                            readOnly
                                        />
                                    </SimpleItem>
                                </GroupItem>
                            </Tab>

                            <Tab title="Validated NumberBox">
                                <GroupItem caption="NumberBox RequiredRule">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <NumberBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Enter price here ..."
                                            label="Price"
                                            format="$ #,##0.##"
                                        >
                                            <Validator>
                                                <RequiredRule />
                                            </Validator>
                                        </NumberBox>
                                    </SimpleItem>
                                </GroupItem>
                                <GroupItem caption="NumberBox NumericRule">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <NumberBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Enter price here ..."
                                            label="Price"
                                            format="$ #,##0.##"
                                        >
                                            <Validator>
                                                <NumericRule />
                                            </Validator>
                                        </NumberBox>
                                    </SimpleItem>
                                </GroupItem>
                                <GroupItem caption="NumberBox RangeRule">
                                    <SimpleItem cssClass="dx-simple-item" >
                                        <NumberBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Enter price (0 - 1049.99) ..."
                                            label="Price"
                                            format="$ #,##0.##"
                                        >
                                            <Validator>
                                                <RangeRule min={0} max={1024.99} />
                                            </Validator>
                                        </NumberBox>
                                    </SimpleItem>
                                </GroupItem>
                                <GroupItem caption="NumberBox PatternRule">
                                    <SimpleItem cssClass="dx-simple-item" >
                                        <NumberBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            placeholder="Enter only numbers (2-6) ..."
                                            label="Small letters"
                                            format="$ #,##0.##"
                                        >
                                            <Validator>
                                                <PatternRule
                                                    pattern={/[2-6]/}
                                                    message="Only numbers (2-6) are allowed"
                                                />
                                            </Validator>
                                        </NumberBox>
                                    </SimpleItem>
                                </GroupItem>
                                <SimpleItem cssClass="dx-submit">
                                    <Button useSubmitBehavior text="Submit" />
                                </SimpleItem>
                            </Tab>

                            <Tab title="dxNumberBox (Validated)">
                                <SimpleItem
                                    cssClass="dx-simple-item"
                                    editorType="dxNumberBox"
                                    editorOptions={{ stylingMode, labelMode, format: "$ #,##0.##" }}
                                >
                                    <Label text="dxNumberBox" location="left" />
                                    <RequiredRule />
                                    <NumericRule />
                                    <RangeRule min={0} max={1024.99} />
                                    <PatternRule
                                        pattern={/[2-6]/}
                                        message="Only numbers (2-6) are allowed"
                                    />
                                </SimpleItem>
                                <ButtonItem colSpan={2}>
                                    <ButtonOptions useSubmitBehavior text="Submit" />
                                </ButtonItem>
                            </Tab>
                        </TabbedItem>
                        <ValidationSummary />
                    </Form>
                </form>
            </div>

            <div className="dx-form">
                <h4 className="dx-h4 ">Other Editors</h4>
                <p className="dx-subtext">(CheckBox, ColorBox, DateBox,
                    SelectBox, Switch, TagBox, Slider)</p>
                <form onSubmit={(event) => event.preventDefault()}>
                    <Form labelMode={labelModeForm} showValidationSummary>
                        <TabbedItem>
                            {/* CheckBox */}
                            <Tab title="CheckBox Editor">
                                <GroupItem colCount={3} caption="CheckBox (active)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <Label text="Checked" location="left" />
                                        <CheckBox
                                            stylingMode={stylingMode}
                                            defaultValue={false}
                                        />
                                    </SimpleItem>
                                    <SimpleItem cssClass="dx-simple-item">
                                        <Label text="Unchecked" location="left" />
                                        <CheckBox
                                            stylingMode={stylingMode}
                                            defaultValue={true}
                                        />
                                    </SimpleItem>
                                    <SimpleItem cssClass="dx-simple-item">
                                        <Label text="Intermediate" location="left" />
                                        <CheckBox
                                            stylingMode={stylingMode}
                                            defaultValue={null}
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="CheckBox (disabled)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <Label text="Checked" location="left" />
                                        <CheckBox
                                            stylingMode={stylingMode}
                                            defaultValue={false}
                                            disabled
                                        />
                                    </SimpleItem>
                                    <SimpleItem cssClass="dx-simple-item">
                                        <Label text="Unchecked" location="left" />
                                        <CheckBox
                                            stylingMode={stylingMode}
                                            defaultValue={true}
                                            disabled
                                        />
                                    </SimpleItem>
                                    <SimpleItem cssClass="dx-simple-item">
                                        <Label text="Intermediate" location="left" />
                                        <CheckBox
                                            stylingMode={stylingMode}
                                            defaultValue={null}
                                            disabled
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="CheckBox (readOnly)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <Label text="Checked" location="left" />
                                        <CheckBox
                                            stylingMode={stylingMode}
                                            defaultValue={false}
                                            readOnly
                                        />
                                    </SimpleItem>
                                    <SimpleItem cssClass="dx-simple-item">
                                        <Label text="Unchecked" location="left" />
                                        <CheckBox
                                            stylingMode={stylingMode}
                                            defaultValue={true}
                                            readOnly
                                        />
                                    </SimpleItem>
                                    <SimpleItem cssClass="dx-simple-item">
                                        <Label text="Intermediate" location="left" />
                                        <CheckBox
                                            stylingMode={stylingMode}
                                            defaultValue={null}
                                            readOnly
                                        />
                                    </SimpleItem>
                                </GroupItem>
                            </Tab>

                            {/* ColorBox */}
                            <Tab title="ColorBox Editor">
                                <GroupItem colCount={3} caption="ColorBox (active)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <ColorBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            label="Pick a color"
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="ColorBox (with alpha channel)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <ColorBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            label="Pick a color"
                                            editAlphaChannel
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="ColorBox (disabled)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <ColorBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            label="Pick a color"
                                            disabled
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="ColorBox (readOnly)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <ColorBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            label="Pick a color"
                                            readOnly
                                        />
                                    </SimpleItem>
                                </GroupItem>
                            </Tab>

                            {/* DateBox */}
                            <Tab title="DateBox Editor">
                                <GroupItem colCount={3} caption="DateBox (type date)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <DateBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            label="Pick a date"
                                            pickerType="calendar"
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="DateBox (type time)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <DateBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            type="time"
                                            label="Pick a time"
                                            pickerType="list"
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="DateBox (type time with rollers as picker type)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <DateBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            type="time"
                                            label="Pick a time"
                                            pickerType="rollers"
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="DateBox (type datetime)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <DateBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            type="datetime"
                                            label="Pick a datetime"
                                            pickerType="calendar"
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="DateBox (type datetime with rollers as picker type)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <DateBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            type="datetime"
                                            label="Pick a datetime"
                                            pickerType="rollers"
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="DateBox (type datetime with native picker type)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <DateBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            type="datetime"
                                            label="Pick a datetime"
                                            pickerType="native"
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="DateBox (disabled)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <DateBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            label="Pick a date"
                                            disabled
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="DateBox (readOnly)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <DateBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            label="Pick a date"
                                            readOnly
                                        />
                                    </SimpleItem>
                                </GroupItem>
                            </Tab>

                            {/* SelectBox */}
                            <Tab title="SelectBox Editor">
                                <GroupItem colCount={3} caption="SelectBox (active)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <SelectBox
                                            items={cities}
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            label="Pick a city"
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="SelectBox (active with search enabled)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <SelectBox
                                            items={cities}
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            label="Pick a city"
                                            searchEnabled
                                            showDataBeforeSearch
                                            searchMode="contains"
                                            minSearchLength={2}
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="SelectBox (disabled)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <SelectBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            label="Pick a city"
                                            disabled
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="SelectBox (readOnly)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <SelectBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            label="Pick a city"
                                            readOnly
                                        />
                                    </SimpleItem>
                                </GroupItem>
                            </Tab>

                            {/* Switch */}
                            <Tab title="Switch Editor">
                                <GroupItem colCount={3} caption="Switch (active)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <Switch
                                            stylingMode={stylingMode}
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="Switch (disabled)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <Switch
                                            stylingMode={stylingMode}
                                            disabled
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="Switch (readOnly)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <Switch
                                            stylingMode={stylingMode}
                                            readOnly
                                        />
                                    </SimpleItem>
                                </GroupItem>
                            </Tab>

                            {/* TagBox */}
                            <Tab title="TagBox Editor">
                                <GroupItem colCount={3} caption="TagBox (active)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <TagBox
                                            items={cities}
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            label="Pick a city"
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="TagBox (active with search enabled)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <TagBox
                                            items={cities}
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            label="Pick a city"
                                            searchEnabled
                                            showDataBeforeSearch
                                            searchMode="contains"
                                            minSearchLength={2}
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="TagBox (disabled)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <TagBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            label="Pick a city"
                                            disabled
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="TagBox (readOnly)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <TagBox
                                            stylingMode={stylingMode}
                                            labelMode={labelMode}
                                            label="Pick a city"
                                            readOnly
                                        />
                                    </SimpleItem>
                                </GroupItem>
                            </Tab>

                            {/* Slider */}
                            <Tab title="Slider Editor">
                                <GroupItem colCount={3} caption="Slider (active with tooltip)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <Slider
                                            stylingMode={stylingMode}
                                            min={0}
                                            max={10}
                                            step={1}
                                        >
                                            <Tooltip enabled={true} />
                                        </Slider>
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="Slider (disabled)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <Slider
                                            stylingMode={stylingMode}
                                            disabled
                                        />
                                    </SimpleItem>
                                </GroupItem>

                                <GroupItem colCount={3} caption="Switch (readOnly with tooltip)">
                                    <SimpleItem cssClass="dx-simple-item">
                                        <Slider
                                            stylingMode={stylingMode}
                                            readOnly
                                        >
                                            <Tooltip enabled={true} />
                                        </Slider>
                                    </SimpleItem>
                                </GroupItem>
                            </Tab>

                        </TabbedItem>
                        <ValidationSummary />
                    </Form>
                </form>
            </div>
        </>
    )
}

export default FormFields