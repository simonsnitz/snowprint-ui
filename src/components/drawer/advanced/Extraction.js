import NumberButton from "components/custom/NumberButton";
import { Box, Checkbox, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useEffect, useState } from "react";

import { useAdvancedStore } from "../../../stores/advancedState.store";

export default function Extraction() {
    const { state, updateStateValue } = useAdvancedStore(context => context);
    const [genomeValue, setGenomeValue] = useState(state.genomeChoice)

    useEffect(() => {
        updateStateValue('genomeChoice', genomeValue)
    }, [genomeValue])

    const handleUpdate = (event) => {
        setGenomeValue(event.target.value);
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography sx={{width: '100%'}}>{'Promoter Extraction'}</Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                {/* TODO - previous label included "promoter" but doesn't fit on responsive */}
                <NumberButton label="Min length" field={'minLength'} min={1} max={500} starter={state.minLength}/>
                <NumberButton label="Max length" field={'maxLength'} min={20} max={9000} starter={state.maxLength}/>
                <FormControl>
                    <FormLabel>{'How should genome coordinates be fetched?'}</FormLabel>
                    <RadioGroup
                        value={genomeValue}
                        onChange={handleUpdate}
                    >
                        <FormControlLabel value="batch" control={<Radio size="small"/>} label="Batch" />
                        <FormControlLabel value="individually" control={<Radio size="small"/>} label="Individually" />
                    </RadioGroup>
                </FormControl>
            </Box>
        </Box>
    )
}