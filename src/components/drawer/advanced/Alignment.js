import { Box, Typography } from "@mui/material"
import NumberButton from "components/custom/NumberButton"

import { useAdvancedStore } from "stores/advancedState.store"

export default function Alignment() {

    const { state } = useAdvancedStore(context => context);

    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography sx={{width: '100%'}}>{'Promoter Alignment'}</Typography>
            <Box sx={{width: '100%'}}>
                <NumberButton label="Extension Length" field={'extension'} min={0} max={10} starter={state.extension} />
            </Box>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                <NumberButton label="Gap open panalty" field={'gapOpen'} min={-999} max={0} starter={state.gapOpen} />
                <NumberButton label="Gap extend penalty" field={'gapExtend'} min={-999} max={0} starter={state.gapExtend} />
                <NumberButton label="Alignment match" field={'alignMatch'} min={1} max={100} starter={state.alignMatch} decimalSupport/>
                <NumberButton label="Alignment mismatch" field={'alignMismatch'} min={-100} max={1} starter={state.alignMismatch} decimalSupport/>
            </Box>
        </Box>
    )
}