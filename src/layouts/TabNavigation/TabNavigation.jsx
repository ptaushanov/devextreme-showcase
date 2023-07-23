import React, { useState, useEffect, useRef } from 'react'
import { Tabs, SelectBox } from 'devextreme-react';
import { tabs } from "../../data/tabs"
import { useNavigate } from 'react-router-dom';
import themes from "devextreme/ui/themes";
import { refreshTheme, currentTheme } from "devextreme/viz/themes"

import themeSelection from "../../data/themes"
import "./TabNavigation.scss"

const [firstTheme] = themeSelection
const { value: dafaultThemeValue } = firstTheme

export default function TabNavigation({ children }) {
    const [selectedTheme, setSelectedTheme] = useState(dafaultThemeValue)
    const themeInitialized = useRef(false)

    useEffect(() => {
        if (themeInitialized.current === false) {
            themeInitialized.current = true;

            const savedTheme = localStorage.getItem("theme") || "generic.light"

            themes.current(savedTheme)
            setSelectedTheme(savedTheme)
            currentTheme(savedTheme)
            refreshTheme()
        }
    }, [themeInitialized.current])

    const navigate = useNavigate();
    const handleItemClick = ({ itemData }) => navigate(itemData.path)
    const handleThemeChanged = ({ value }) => {
        localStorage.setItem("theme", value)

        if (!value) return
        themes.current(value)
        setSelectedTheme(value)
        currentTheme(value)
        refreshTheme()
    }
    return (
        <div className="tabNavigation">
            <div className="dx-theme-menu dx-fieldset">
                <div className="dx-field">
                    <div className="dx-field-label">Switch themes: </div>
                    <div className="dx-field-value">
                        <SelectBox
                            items={themeSelection}
                            displayExpr="displayName"
                            valueExpr="value"
                            value={selectedTheme}
                            onValueChanged={handleThemeChanged}
                        />
                    </div>
                </div>
            </div>
            <Tabs
                dataSource={tabs}
                keyExpr="id"
                onItemClick={handleItemClick}
                itemComponent={({ data }) => (
                    <span className="dx-tab-text dx-tab-text-center">
                        <i className={`dx-icon dx-icon-${data.icon}`}></i>
                        {data.text}
                    </span>
                )}
            />
            <div className="navigation-content">
                {children}
            </div>
        </div>
    )
}
