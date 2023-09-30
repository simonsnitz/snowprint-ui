import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Slider, Typography } from "@mui/material";
import { defaultPenaltyState } from "constants/defaultConstants";
import { useState, useEffect } from "react";   

import { useAdvancedStore } from "../../stores/advancedState.store";

export default function PenaltyInput() {

    const { updateStateValue } = useAdvancedStore(context => context);

    const [penaltyState, setPenaltyState] = useState(defaultPenaltyState)
    const [isPenaltyOpen, setIsPenaltyOpen] = useState(false);

    useEffect(() => {
        updateStateValue('penalty', penaltyState)
    }, [penaltyState])

    return (    
        <List>
        <ListItemButton onClick={() => setIsPenaltyOpen(!isPenaltyOpen)}>
            <ListItemText primary="Spacer Penalty"/>
            {isPenaltyOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={isPenaltyOpen} timeout="auto" unmountOnExit>
            {
                Object.entries(defaultPenaltyState).map(([key, value]) => (
                    <Box sx={{display: 'flex'}} key={`${key}-${value}`}>
                        <Slider 
                            defaultValue={value}
                            min={-20}
                            max={20}
                            step={1}
                            marks
                            size="small"
                            onChange={(e) => {
                                setPenaltyState((prevState) => ({
                                    ...prevState,
                                    [key]: e.target.value
                                }))
                            }}
                            sx={{mr: '32px'}}
                        />
                        <Typography sx={{width: '3ch'}} align="right">{penaltyState[key]}</Typography>
                    </Box>
                ))
            }
        </Collapse>
    </List>
    )
}