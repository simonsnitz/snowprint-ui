import NumberButton from "components/custom/NumberButton";
import { Box, Checkbox, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import PenaltyInput from "components/custom/PenaltyInput";
import { useState, useEffect } from "react";
import AlignSequence from "components/custom/AlignSequence";

import { useAdvancedStore } from "../../../stores/advancedState.store";

export default function Search() {

    const { state, updateStateValue } = useAdvancedStore(context => context);
    const [conservation, setConservation] = useState(state.conservation);

    useEffect(() => {
        updateStateValue('conservation', conservation)
    }, [conservation])

    const handleUpdate = (event) => {
        setConservation(event.target.value);
    }

    const getView = () => {
        switch(conservation){
            case 'Look for inverted repeats':
                return <PenaltyInput />
            case 'Scan entire promoter region':
                return <Box />
            case 'Align an input sequence':
                return <AlignSequence />
        }
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography sx={{width: '100%'}}>{'Search Method'}</Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                <FormControl margin="normal">
                    <FormLabel>{'How should conservation be analyzed?'}</FormLabel>
                    <RadioGroup
                        value={conservation}
                        onChange={handleUpdate}
                    >
                        <FormControlLabel value="Align an input sequence" control={<Radio size="small"/>} label="Align an input sequence" />
                        <FormControlLabel value="Scan entire promoter region" control={<Radio size="small"/>} label="Scan entire promoter region" />
                        <FormControlLabel value="Look for inverted repeats" control={<Radio size="small"/>} label="Look for inverted repeats" />
                    </RadioGroup>
                </FormControl>
            </Box>
            {getView()}
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                <NumberButton label="Match score" field={'match'} min={0} max={10} starter={state.match} decimalSupport/>
                <NumberButton label="Mismatch score" field={'misMatch'} min={-10} max={0} starter={state.misMatch} decimalSupport/>
                <NumberButton label="Min operator length" field={'minOperator'} min={3} max={10} starter={state.minOperator}/>
                <NumberButton label="Max operator length" field={'maxOperator'} min={11} max={40} starter={state.maxOperator}/>
            </Box>
        </Box>
    )
}