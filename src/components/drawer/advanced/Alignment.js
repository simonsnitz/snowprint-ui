import { Box, Typography } from "@mui/material"
import NumberButton from "components/custom/NumberButton"

export default function Alignment({dispatch}) {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography sx={{width: '100%'}}>{'Promoter Alignment'}</Typography>
            <Box sx={{width: '100%'}}>
                <NumberButton label="Extension Length" callBack={dispatch} field={'extension'} min={0} max={10} starter={5} />
            </Box>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                <NumberButton label="Gap open panalty" callBack={dispatch} field={'gapOpen'} min={-999} max={0} starter={-100} />
                <NumberButton label="Gap extend penalty" callBack={dispatch} field={'gapExtend'} min={-999} max={0} starter={0} />
                <NumberButton label="Alignment match" callBack={dispatch} field={'alignMatch'} min={1} max={100} starter={2} decimalSupport/>
                <NumberButton label="Alignment mismatch" callBack={dispatch} field={'alignMismatch'} min={-100} max={1} starter={-0.5} decimalSupport/>
            </Box>
        </Box>
    )
}