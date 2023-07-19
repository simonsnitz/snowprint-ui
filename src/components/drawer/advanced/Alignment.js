import { Box, Typography } from "@mui/material"
import NumberButton from "components/custom/NumberButton"

export default function Alignment() {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography sx={{width: '100%'}}>{'Promoter Alignment'}</Typography>
            <Box sx={{width: '100%'}}>
                <NumberButton label="Extension Length" sx={{width: '50%', paddingX: '4px', marginY: '12px'}} min={0} max={10} starter={5} />
            </Box>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                <NumberButton label="Gap open panalty" sx={{width: '50%', paddingX: '4px', marginY: '12px'}} min={-999} max={0} starter={-100} />
                <NumberButton label="Gap extend penalty" sx={{width: '50%', paddingX: '4px', marginY: '12px'}} min={-999} max={0} starter={0} />
                <NumberButton label="Alignment match" sx={{width: '50%', paddingX: '4px', marginY: '12px'}} min={1} max={100} starter={2} />
                <NumberButton label="Alignment mismatch" sx={{width: '50%', paddingX: '4px', marginY: '12px'}} min={-100} max={1} starter={-0.5} />
            </Box>
        </Box>
    )
}