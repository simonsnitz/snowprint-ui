import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, Box } from "@mui/material";
import { useAdvancedStore } from 'stores/advancedState.store';

export default function InputRadio() {

    const { updateApiValue } = useAdvancedStore(context => context)

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
            onChange={(e) => updateApiValue('inputMethod', e.target.value)}
        >
            <FormControlLabel value="RefSeq" control={<Radio />} label="RefSeq" />
            <FormControlLabel value="Uniprot" control={<Radio />} label="Uniprot" />
            <FormControlLabel value="Protein sequence" control={<Radio />} label="Protein Sequence" />
            <FormControlLabel value="Snowprint ID" control={<Radio />} label="Snowprint ID" />
        </RadioGroup>
    </FormControl>
        </Box>

    )
}