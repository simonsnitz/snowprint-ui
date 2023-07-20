import { Box, Divider, Typography } from "@mui/material"
import Blast from "./Blast"
import Extraction from "./Extraction"
import Search from "./Search"
import Alignment from "./Alignment"
import { useEffect, useReducer } from "react"
import { defaultReducerState } from "constants/defaultConstants"

export default function AdvancedOptions() {
    
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

    useEffect(() => {
        console.log(state)
    }, [state])

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