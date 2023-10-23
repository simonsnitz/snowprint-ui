import { Box, Button, Divider, Link, Typography } from "@mui/material"
import Blast from "./Blast"
import Extraction from "./Extraction"
import Search from "./Search"
import Alignment from "./Alignment"
import { useEffect, useReducer } from "react"
import { defaultReducerState } from "constants/defaultConstants"
import { useSnackbar } from "notistack"

export default function AdvancedOptions({apiState, apiDispatch}) {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();


    
    const advancedOptionsReducer = (state, action) => {
        switch(action.type){
            case 'updateValue': {
                return {
                    ...state,
                    [action.field.name]: action.field.value
                }
            }
            case 'isError': {
                // Call parent reducer with error
                apiDispatch({
                    type: 'updateValue',
                    field: 'isError',
                    value: action.value
                })
                return state;
            }
        }
}

    const [state, dispatch] = useReducer(advancedOptionsReducer, defaultReducerState);

    const getProteinInfo = async () => {
        apiDispatch({
            type: 'updateValue',
            field: 'isLoading',
            value: true
        })
        await fetch('https://95crbgduv4.execute-api.us-east-2.amazonaws.com/startBlast', {
            method: 'POST',
            headers: {
                Accept: 'application/json'
            },
            body: JSON.stringify(
                {
                    ...state,
                    acc: apiState.acc,
                    method: apiState.inputMethod
                }
            )
        })
        .then(async resp => {
            if (resp.status === 200) {
                return resp.json()
            } else if (resp.status === 202) {
                let data = await resp.json();
                apiDispatch({
                    type: 'updateValue',
                    field: 'apiUUID',
                    value: data.id
                })
                apiDispatch({
                    type: 'updateValue',
                    field: 'statusCode',
                    value: 202
                })
                // Start polling API for new data
                setTimeout(getProteinInfo, 5000);
                
            } else if (resp.status === 400) {
                enqueueSnackbar('Sorry, this ID failed last time we ran it. Please reach out to simonsnitz@gmail.com in order try again.', {
                    variant: 'error'
                })
                apiDispatch({
                    type: 'apiError'
                })
            } else {
                // This is reached in some error scenario
                // TODO - clear loading
                enqueueSnackbar(`Sorry, we've encountered some type of error. Please try again.`, {
                    variant: 'error'
                })
                apiDispatch({
                    type: 'apiError'
                })
            }
        })
        .then(data => {
            if (data) {
                apiDispatch({
                    type: 'updateValue',
                    field: 'apiResult',
                    value: data
                });
                apiDispatch({
                    type: 'updateValue',
                    field: 'sendRequest',
                    value: false
                });
                apiDispatch({
                    type: 'updateValue',
                    field: 'isLoading',
                    value: false
                });
                apiDispatch({
                    type: 'updateValue',
                    field: 'apiUUID',
                    value: null
                });
            }
        })
        .catch(err => {
            console.log(`Api fetch error: ${err}`);
        })
    }

    useEffect(() => {
        if (apiState.sendRequest) {
            getProteinInfo();
        }
    }, [apiState.sendRequest])

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <Typography sx={{
                fontSize: '24px',
                fontWeight: 'bold',
                paddingY: '20px'
            }}>
                {'Advanced options'}
            </Typography>
            <Blast state={state.blast} dispatch={dispatch} />
            <Divider sx={{marginY: '24px'}}/>
            <Extraction state={state.extraction} dispatch={dispatch} />
            <Divider sx={{marginY: '24px'}} />
            <Search state={state.search} dispatch={dispatch} />
            <Divider sx={{marginY: '24px'}} />
            <Alignment state={state.promoter} dispatch={dispatch} />
        </Box>
    )
}