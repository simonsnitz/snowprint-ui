import NumberButton from "components/custom/NumberButton";
import { Box, Checkbox, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import PenaltyInput from "components/custom/PenaltyInput";
import { useState, useEffect } from "react";
import AlignSequence from "components/custom/AlignSequence";

export default function Search({dispatch}) {

    const [conservation, setConservation] = useState('Look for inverted repeats');

    useEffect(() => {
        dispatch({
            type: 'updateValue',
            field: {
                name: 'conservation',
                value: conservation
            }
        })
    }, [conservation])

    const handleUpdate = (event) => {
        setConservation(event.target.value);
    }

    const getView = () => {
        switch(conservation){
            case 'Look for inverted repeats':
                return <PenaltyInput callBack={dispatch} field={'penalty'} />
            case 'Scan entire promoter region':
                return <Box />
            case 'Align an input sequence':
                return <AlignSequence callBack={dispatch} field={'seqToAlign'} />
        }
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography sx={{width: '100%'}}>{'Search Method'}</Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                <FormControl margin="normal">
                    <FormLabel>{'How should conservation be analyzed?'}</FormLabel>
                    <RadioGroup
                        value={conservation}
                        onChange={handleUpdate}
                    >
                        <FormControlLabel value="Align an input sequence" control={<Radio size="small"/>} label="Align an input sequence" />
                        <FormControlLabel value="Scan entire promoter region" control={<Radio size="small"/>} label="Scan entire promoter region" />
                        <FormControlLabel value="Look for inverted repeats" control={<Radio size="small"/>} label="Look for inverted repeats" />
                    </RadioGroup>
                </FormControl>
            </Box>
            {getView()}
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                <NumberButton label="Match score" callBack={dispatch} field={'match'} min={0} max={10} starter={2} decimalSupport/>
                <NumberButton label="Mismatch score" callBack={dispatch} field={'misMatch'} min={-10} max={0} starter={-2} decimalSupport/>
                <NumberButton label="Min operator length" callBack={dispatch} field={'minOperator'} min={3} max={10} starter={5}/>
                <NumberButton label="Max operator length" callBack={dispatch} field={'maxOperator'} min={11} max={40} starter={15}/>
            </Box>
        </Box>
    )
}