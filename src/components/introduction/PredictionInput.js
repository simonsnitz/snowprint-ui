import React, { useEffect, useReducer } from 'react'

import { Box, Button, CircularProgress, Drawer, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import InputRadio from "./InputRadio";
import SidePanel from "../drawer";
import DataDisplay from "components/dataDisplay";
import LoadingComponent from './LoadingComponent';
import { useSnackbar } from "notistack"

import { useAdvancedStore } from 'stores/advancedState.store';

export default function PredictionInput({ openMobileDrawer, setOpenMobileDrawer }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'))
    const { enqueueSnackbar } = useSnackbar();

    const zustandState = useAdvancedStore();

    const handleSubmit = () => {
        zustandState.updateApiValue('sendRequest', true)
    }

    const getProteinInfo = async () => {
        zustandState.updateApiValue('isLoading', true)
        await fetch('https://95crbgduv4.execute-api.us-east-2.amazonaws.com/startBlast', {
            method: 'POST',
            headers: {
                Accept: 'application/json'
            },
            body: JSON.stringify(
                {
                    ...zustandState.state,
                    acc: zustandState.acc,
                    method: zustandState.inputMethod
                }
            )
        })
        .then(async resp => {
            if (resp.status === 200) {
                return resp.json()
            } else if (resp.status === 202) {
                let data = await resp.json();
                zustandState.containerWaiting(data.id)

                // Start polling API for new data
                setTimeout(getProteinInfo, 5000);
                
            } else {
                // This is reached in some error scenario
                // TODO - clear loading
                enqueueSnackbar(`Sorry, we've encountered some type of error. Please try again.`, {
                    variant: 'error'
                });

                zustandState.apiFailure();
            }
        })
        .then(data => {
            if (data) {
                zustandState.apiSuccess(data);
            }
        })
        .catch(err => {
            console.log(`Api fetch error: ${err}`);
        })
    }

    useEffect(() => {
        if (zustandState.sendRequest) {
            getProteinInfo();
        }
    }, [zustandState.sendRequest])

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
                '& ::-webkit-scrollbar': {
                    backgroundColor: '#fff',
                    width: '16px'
                },
                '& ::-webkit-scrollbar-track': {
                    backgroundColor: '#fff'
                },
                '& ::-webkit-scrollbar-thumb': {
                    backgroundColor: '#babac0',
                    borderRadius: '16px',
                    border: '4px solid #fff'
                },
                '& ::-webkit-scrollbar-button': {
                    display: 'none'
                }
            }}>
                <SidePanel setOpenMobileDrawer={setOpenMobileDrawer}/>
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
                    <InputRadio />
                    <TextField sx={{width: '100%', marginTop: '24px'}} variant="filled" value={zustandState.acc} onChange={(e) => zustandState.updateApiValue('acc', e.target.value)}/>
                    <Button variant="outlined" sx={{marginTop: '20px'}} onClick={handleSubmit} disabled={zustandState.isError}>
                        Submit
                    </Button>
                </Box>
                {
                    zustandState.isLoading && <LoadingComponent />
                }
                {
                    !zustandState.isLoading && zustandState.apiResult && <DataDisplay />
                }
            </Box>
            <Drawer anchor="left" open={openMobileDrawer} onClose={() => setOpenMobileDrawer(!openMobileDrawer)}>
                <SidePanel setOpenMobileDrawer={setOpenMobileDrawer} />
            </Drawer>
        </Box>
    )
}