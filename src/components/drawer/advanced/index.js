import { Box, Divider, Typography } from "@mui/material"
import Blast from "./Blast"
import Extraction from "./Extraction"
import Search from "./Search"
import Alignment from "./Alignment"
import { useEffect, useReducer } from "react"
import { defaultReducerState } from "constants/defaultConstants"

export default function AdvancedOptions({apiState, apiDispatch}) {
    
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
        let result = await fetch('https://95crbgduv4.execute-api.us-east-2.amazonaws.com/startBlast', {
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
        });

        if (result.status === 200) {
            let data = await result.json();
            apiDispatch({
                type: 'updateValue',
                field: 'apiResult',
                value: data
            });
            apiDispatch({
                type: 'updateValue',
                field: 'sendRequest',
                value: false
            })
        } else if (result.status === 202) {
            apiDispatch({
                type: 'updateValue',
                field: 'apiUUID',
                value: 'test123'
            })
        }
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