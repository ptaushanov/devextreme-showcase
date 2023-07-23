import React from 'react'
import "./NotFound.scss"

import { Button } from 'devextreme-react'
import { Box, Item, } from 'devextreme-react/box'

import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()
    const handleGoBack = () => navigate(-1)

    return (
        <Box direction="row" width="100%" height={100} crossAlign="center" align="start">
            <Item baseSize="auto">
                <Button icon="back" className="dx-back" onClick={handleGoBack} />
            </Item>
            <Item baseSize="auto">
                <h1>404 NotFound</h1>
            </Item>
        </Box>
    )
}
