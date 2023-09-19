import { Box, Divider, Typography } from "@mui/material"
import Blast from "./Blast"
import Extraction from "./Extraction"
import Search from "./Search"
import Alignment from "./Alignment"
import { useEffect, useReducer } from "react"
import { defaultReducerState } from "constants/defaultConstants"
import { useSnackbar } from "notistack"

export default function AdvancedOptions({apiState, apiDispatch}) {

    const { enqueueSnackbar } = useSnackbar();
    
    const advancedOptionsReducer = (state, action) => {
        switch(action.type){
            case 'updateValue': {
                return {
                    ...state,
                    [action.field.name]: action.field.value
                }
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
                // Start polling API for new data
                setTimeout(getProteinInfo, 5000);
                
            } else {
                // This is reached in some error scenario
                // TODO - clear loading
                enqueueSnackbar(`Sorry, we've encountered some type of error. Please try again.`, {
                    variant: 'error'
                })
                apiDispatch({
                    type: 'updateValue',
                    field: 'sendRequest',
                    value: false
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