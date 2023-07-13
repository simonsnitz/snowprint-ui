import NumberButton from "components/custom/NumberButton";
import { Box, Checkbox, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";

export default function Promoter() {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography sx={{width: '100%'}}>{'Promoter Extraction'}</Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                {/* TODO - previous label included "promoter" but doesn't fit on responsive */}
                <NumberButton label="Min length" sx={{width: '50%', paddingX: '4px', marginY: '12px'}} />
                <NumberButton label="Max length" sx={{width: '50%', paddingX: '4px', marginY: '12px'}} />
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">{'How should genome coordinates be fetched?'}</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Batch" control={<Radio size="small"/>} label="Batch" />
                        <FormControlLabel value="Individually" control={<Radio size="small"/>} label="Individually" />
                    </RadioGroup>
                </FormControl>
            </Box>
        </Box>
    )
}