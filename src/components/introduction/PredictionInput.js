import React, { useEffect, useReducer } from 'react'

import { Box, Button, CircularProgress, Drawer, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import InputRadio from "./InputRadio";
import SidePanel from "../drawer";
import DataDisplay from "components/dataDisplay";
import LoadingComponent from './LoadingComponent';

export default function PredictionInput({ openMobileDrawer, setOpenMobileDrawer }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'))

    const apiReducer = (state, action) => {
        switch(action.type) {
            case 'updateValue': {
                return {
                    ...state,
                    [action.field]: action.value 
                }
            }
        }
    }

    const [apiState, apiDispatch] = useReducer(apiReducer, {
        sendRequest: false,
        acc: 'WP_013083972.1',
        inputMethod: 'RefSeq',
        apiResult: null,
        apiUUID: null,
        isLoading: false,
        statusCode: null,
        isError: false
    })

    const handleSubmit = () => {
        apiDispatch({
            type: 'updateValue',
            field: 'sendRequest',
            value: true
        })
    }

    return (
        <Box id="prediction-container" sx={{
            minHeight: isSmallScreen ? 'calc(100% - 51px)' : '100%',
            height: '100%',
            width: '100%',
            display: 'flex',
        }}>
            <Box sx={{
                width: '25%',
                display: isSmallScreen ? 'none': 'flex',
                height: '100%',
                overflowY: 'auto',
                // Create a Mac-OS like scrollbar
                // TODO - this stopped working
                '&::-webkit-scrollbar': {
                    backgroundColor: '#fff',
                    width: '16px'
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: '#fff'
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#babac0',
                    borderRadius: '16px',
                    border: '4px solid #fff'
                },
                '&::-webkit-scrollbar-button': {
                    display: 'none'
                }
            }}>
                <SidePanel setOpenMobileDrawer={setOpenMobileDrawer} apiState={apiState} apiDispatch={apiDispatch}/>
            </Box>
            <Box sx={{
                width: isSmallScreen ? '100%' : '80%',
                paddingX: '5%',
                paddingTop: '5%',
                overflowY: 'auto'
            }}>
                <Box sx={{width: '100%',
                    display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                objectFit: 'contain',
                flexDirection: 'column'
                }}>
                    <img src={'./Snowprint_Logo.png'} style={{maxWidth: "75%"}}/>
                    <Typography variant="h4" align="center">{`Predict a regulator's DNA binding sequence`}</Typography>
                    <InputRadio apiDispatch={apiDispatch} />
                    <TextField sx={{width: '100%', marginTop: '24px'}} variant="filled" value={apiState.acc} onChange={(e) => apiDispatch({
                        type: 'updateValue',
                        field: 'acc',
                        value: e.target.value
                    })}/>
                    <Button variant="outlined" sx={{marginTop: '20px'}} onClick={handleSubmit} disabled={apiState.isError}>
                        Submit
                    </Button>
                </Box>
                {
                    apiState.isLoading && <LoadingComponent apiState={apiState}/>
                }
                {
                    !apiState.isLoading && apiState.apiResult && <DataDisplay apiState={apiState}/>
                }
            </Box>
            <Drawer anchor="left" open={openMobileDrawer} onClose={() => setOpenMobileDrawer(!openMobileDrawer)}>
                <SidePanel setOpenMobileDrawer={setOpenMobileDrawer} apiState={apiState} apiDispatch={apiDispatch} />
            </Drawer>
        </Box>
    )
}