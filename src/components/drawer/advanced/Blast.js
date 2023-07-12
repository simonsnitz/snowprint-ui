import NumberButton from "components/custom/NumberButton";
import { Box, Checkbox, Typography } from "@mui/material";

export default function Blast() {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography sx={{width: '100%'}}>{'BLAST'}</Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                <NumberButton label="Identity cutoff" sx={{width: '50%', paddingX: '4px', marginY: '12px'}}/>
                <NumberButton label="Coverage cutoff" sx={{width: '50%', paddingX: '4px', marginY: '12px'}}/>
                <NumberButton label="Max homologs" sx={{width: '50%', paddingX: '4px', marginY: '12px'}}/>
                <Box sx={{display: 'flex', flexDirection: 'column', width: '50%', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography sx={{fontSize: '14px'}}>Filter redundant?</Typography>
                    <Checkbox />
                </Box>
            </Box>
        </Box>
    )
}