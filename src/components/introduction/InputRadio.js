import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, Box } from "@mui/material";

export default function InputRadio() {
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
        >
            <FormControlLabel value="RefSeq" control={<Radio />} label="RefSeq" />
            <FormControlLabel value="Uniprot" control={<Radio />} label="Uniprot" />
            <FormControlLabel value="protein" control={<Radio />} label="Protein Sequence" />
        </RadioGroup>
    </FormControl>
        </Box>

    )
}