import NumberButton from "components/custom/NumberButton";
import { Box, Checkbox, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";

export default function Extraction({dispatch}) {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography sx={{width: '100%'}}>{'Promoter Extraction'}</Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                {/* TODO - previous label included "promoter" but doesn't fit on responsive */}
                <NumberButton label="Min length" callBack={dispatch} field={'minLength'} min={1} max={500} starter={80}/>
                <NumberButton label="Max length" callBack={dispatch} field={'maxLength'} min={20} max={9000} starter={800}/>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">{'How should genome coordinates be fetched?'}</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="batch" control={<Radio size="small"/>} label="Batch" />
                        <FormControlLabel value="individually" control={<Radio size="small"/>} label="Individually" />
                    </RadioGroup>
                </FormControl>
            </Box>
        </Box>
    )
}