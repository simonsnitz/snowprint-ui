import NumberButton from "components/custom/NumberButton";
import { Box, Checkbox, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import PenaltyInput from "components/custom/PenaltyInput";
import { useState, useEffect } from "react";

export default function Search({dispatch}) {

    const [conservation, setConservation] = useState('align');

    useEffect(() => {
        dispatch({
            type: 'updateValue',
            field: {
                name: 'genomeChoice',
                value: conservation
            }
        })
    }, [conservation])

    const handleUpdate = (event) => {
        setConservation(event.target.value);
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
                        <FormControlLabel value="align" control={<Radio size="small"/>} label="Align an input sequence" />
                        <FormControlLabel value="scan" control={<Radio size="small"/>} label="Scan entire promoter region" />
                        <FormControlLabel value="look" control={<Radio size="small"/>} label="Look for inverted repeats" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <PenaltyInput callBack={dispatch} field={'penalty'} />
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                <NumberButton label="Match score" callBack={dispatch} field={'match'} min={0} max={10} starter={2} decimalSupport/>
                <NumberButton label="Mismatch score" callBack={dispatch} field={'misMatch'} min={-10} max={0} starter={-2} decimalSupport/>
                <NumberButton label="Min operator length" callBack={dispatch} field={'minOperator'} min={3} max={10} starter={5}/>
                <NumberButton label="Max operator length" callBack={dispatch} field={'maxOperator'} min={11} max={40} starter={15}/>
            </Box>
        </Box>
    )
}