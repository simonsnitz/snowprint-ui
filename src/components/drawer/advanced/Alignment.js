import { Box, Typography } from "@mui/material"
import NumberButton from "components/custom/NumberButton"

export default function Alignment() {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography sx={{width: '100%'}}>{'Promoter Alignment'}</Typography>
            <Box sx={{width: '100%'}}>
                <NumberButton label="Extension Length" sx={{width: '50%', paddingX: '4px', marginY: '12px'}} />
            </Box>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                <NumberButton label="Gap open panalty" sx={{width: '50%', paddingX: '4px', marginY: '12px'}} />
                <NumberButton label="Gap extend penalty" sx={{width: '50%', paddingX: '4px', marginY: '12px'}} />
                <NumberButton label="Alignment match" sx={{width: '50%', paddingX: '4px', marginY: '12px'}} />
                <NumberButton label="Alignment mismatch" sx={{width: '50%', paddingX: '4px', marginY: '12px'}} />
            </Box>
        </Box>
    )
}