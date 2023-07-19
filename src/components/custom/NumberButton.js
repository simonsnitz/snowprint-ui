import { ButtonGroup, IconButton, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from "react";

export default function NumberButton({ label, callBack, sx, min, max, starter }) {

    const [value, setValue] = useState(starter);
    const [isError, setIsError] = useState(false);

    const validateInput = () => {
        if (value > max || value < min || value === '') {
            setIsError(true)
        } else {
            setIsError(false)
        }
    }

    const incrementButton = () => {
        setValue(prevState => prevState + 1);
    }
    
    const decrementButton = () => {
        setValue(prevState => prevState - 1);
    }

    // TODO - possibly rearrange UX

    return (
        <TextField 
            InputProps={{
                endAdornment: <IconButton onClick={incrementButton} onBlur={validateInput}><AddIcon sx={{fontSize: '16px'}}/></IconButton>,
                startAdornment: <IconButton onClick={decrementButton} onBlur={validateInput}><RemoveIcon sx={{fontSize: '16px'}}/></IconButton>,
                sx: {
                    '& input': {
                        textAlign: 'center'
                    }
                },
            }}
            variant="outlined"
            value={value}
            label={label}
            sx={sx}
            margin="dense"
            onChange={(e) => {
                if (Number.isInteger(+e.target.value) || e.target.value === '') {
                    setValue(+e.target.value)
                }
            }}
            onBlur={() => {
                validateInput()
            }}
            error={isError}
            helperText={isError ? `Please enter a number between ${min} and ${max}` : null}
            
        />
    )
}