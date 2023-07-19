import NumberButton from "components/custom/NumberButton";
import { Box, Checkbox, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import PenaltyInput from "components/custom/PenaltyInput";

export default function Search({dispatch}) {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography sx={{width: '100%'}}>{'Search Method'}</Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                <FormControl margin="normal">
                    <FormLabel id="demo-radio-buttons-group-label">{'How should conservation be analyzed?'}</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Align" control={<Radio size="small"/>} label="Align an input sequence" />
                        <FormControlLabel value="Scan" control={<Radio size="small"/>} label="Scan entire promoter region" />
                        <FormControlLabel value="Look" control={<Radio size="small"/>} label="Look for inverted repeats" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <PenaltyInput callBack={dispatch} field={'penalty'} />
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                <NumberButton label="Match score" callBack={dispatch} field={'match'} min={0} max={10} starter={2}/>
                <NumberButton label="Mismatch score" callBack={dispatch} field={'misMatch'} min={-10} max={0} starter={-2} />
                <NumberButton label="Min operator length" callBack={dispatch} field={'minOperator'} min={3} max={10} starter={5}/>
                <NumberButton label="Max operator length" callBack={dispatch} field={'maxOperator'} min={11} max={40} starter={15}/>
            </Box>
        </Box>
    )
}