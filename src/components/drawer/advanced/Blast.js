import { useState, useEffect } from "react";
import NumberButton from "components/custom/NumberButton";
import { Box, Checkbox, Typography } from "@mui/material";

import { useAdvancedStore } from "../../../stores/advancedState.store";

export default function Blast() {

    const { state, updateStateValue } = useAdvancedStore(context => context);
    const [isChecked, setIsChecked] = useState(state.filter);

    const handleChecked = () => {
        setIsChecked(!isChecked);
        updateStateValue('filter', !isChecked)
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography sx={{width: '100%'}}>{'BLAST'}</Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                <NumberButton label="Identity cutoff" field={'identity'} min={30} max={90} starter={state.identity} decimalSupport/>
                <NumberButton label="Coverage cutoff" field={'coverage'} min={60} max={100} starter={state.coverage} decimalSupport/>
                <NumberButton label="Max homologs" field={'homologs'} min={10} max={100} starter={state.homologs}/>
                <Box sx={{display: 'flex', flexDirection: 'column', width: '50%', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography sx={{fontSize: '14px'}}>Filter redundant?</Typography>
                    <Checkbox 
                        checked={isChecked}
                        onChange={handleChecked}
                    />
                </Box>
            </Box>
        </Box>
    )
}