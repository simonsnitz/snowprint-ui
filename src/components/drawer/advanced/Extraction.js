import NumberButton from "components/custom/NumberButton";
import { Box, Checkbox, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useEffect, useState } from "react";

export default function Extraction({dispatch}) {
    const [genomeValue, setGenomeValue] = useState('batch')

    useEffect(() => {
        dispatch({
            type: 'updateValue',
            field: {
                name: 'genomeChoice',
                value: genomeValue
            }
        })
    }, [genomeValue])

    const handleUpdate = (event) => {
        setGenomeValue(event.target.value);
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography sx={{width: '100%'}}>{'Promoter Extraction'}</Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                {/* TODO - previous label included "promoter" but doesn't fit on responsive */}
                <NumberButton label="Min length" callBack={dispatch} field={'minLength'} min={1} max={500} starter={80}/>
                <NumberButton label="Max length" callBack={dispatch} field={'maxLength'} min={20} max={9000} starter={800}/>
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