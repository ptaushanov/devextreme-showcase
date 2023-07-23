import React from 'react'
import "./Home.scss"
import devextremeLogo from "../../assets/devextreme-icon.png"

export default function Home() {
    return (
        <div className="Home">
            <div className="content">
                <div className="image-content">
                    <img src={devextremeLogo} alt="DevExtreme Logo" />
                </div>
                <div className="text-content">
                    <h1>DevExtreme Demo</h1>
                    <p>with ReactJS</p>
                </div>
            </div>
        </div>
    )
}
