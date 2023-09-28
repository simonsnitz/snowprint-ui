import { useState } from "react";
import NumberButton from "components/custom/NumberButton";
import { Box, Checkbox, Typography } from "@mui/material";

export default function Blast({dispatch}) {

    const [isChecked, setIsChecked] = useState(true);

    const handleChecked = () => {
        setIsChecked(!isChecked);
        console.log('dispatch')
        dispatch(
            {
                type: 'updateValue',
                field: {
                    name: 'filter',
                    value: !isChecked
                }
            }
        )
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography sx={{width: '100%'}}>{'BLAST'}</Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                <NumberButton label="Identity cutoff" callBack={dispatch} field={'identity'} min={30} max={90} starter={40} decimalSupport/>
                <NumberButton label="Coverage cutoff" callBack={dispatch} field={'coverage'} min={60} max={100} starter={90} decimalSupport/>
                <NumberButton label="Max homologs" callBack={dispatch} field={'homologs'} min={10} max={100} starter={30}/>
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