import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, Box } from "@mui/material";

import {
    uniprotValidation,
    refseqValidation,
    proteinValidation,
  } from './../../lib/Validations';

export default function InputRadio({apiDispatch}) {
    return (
        <Box sx={{
            display: 'flex',
            width: '100%',
            marginTop: '16px'
        }}>
        <FormControl>
        <FormLabel>{'Choose an input format'}</FormLabel>
        <RadioGroup
            defaultValue="RefSeq"
            onChange={(e) => apiDispatch({
                type: 'updateValue',
                field: 'inputMethod',
                value: e.target.value
            })}
        >
            <FormControlLabel value="RefSeq" control={<Radio />} pattern={refseqValidation} label="RefSeq" />
            <FormControlLabel value="Uniprot" control={<Radio />} pattern={uniprotValidation} label="Uniprot" />
            <FormControlLabel value="Protein sequence" control={<Radio />} pattern={proteinValidation} label="Protein Sequence" />
            <FormControlLabel value="Snowprint ID" control={<Radio />} label="Snowprint ID" />
        </RadioGroup>
    </FormControl>
        </Box>

    )
}