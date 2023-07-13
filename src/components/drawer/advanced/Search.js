import NumberButton from "components/custom/NumberButton";
import { Box, Checkbox, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";

export default function Search() {
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
        </Box>
    )
}