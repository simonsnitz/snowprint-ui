import { ButtonGroup, IconButton, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from "react";

export default function NumberButton({ label, callBack, field, sx, min, max, starter, decimalSupport = false }) {

    const [value, setValue] = useState(starter);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        checkForErrors() 
        
        // If we want decimals but the input is in the format of 1. 
        // In this case, the last update will be the one to stick
        // Until the users supplies another digit such as 1.1
        if (decimalSupport && !checkWholeNumber()) {
            return;
        } else {
            let converted = Number(value);

            console.log(validateCurrent(converted))

            // Run validation on provided range and update reducer
            if (!validateCurrent(converted)) {
                callBack(
                    {
                        type: 'updateValue',
                        field: {
                            name: field,
                            value: converted
                        }
                    }
                )
            }
        }
    }, [value])

    // Validate if the current value is within the provided range
    const validateCurrent = (passedInValue) => {
        if (passedInValue > max || passedInValue < min || passedInValue === '') {
            return true;
        } else {
            return false;
        }
    }

    // Check if the current value is in the format of 1 or 1.
    const checkWholeNumber = () => {
        const pattern = /^\d+\.$/;

        if (pattern.test(value)) {
            return false;
        } else {
            return true;
        }
    }

    const incrementButton = () => {
        setValue(prevState => prevState + 1);
    }
    
    const decrementButton = () => {
        setValue(prevState => prevState - 1);
    }

    // onBlur check for errors to feed to input
    const checkForErrors = () => {
        let errorResult = validateCurrent(Number(value));
        setIsError(errorResult);
        callBack({
            type: 'isError',
            value: errorResult
        })
    }

    /**
     * This function is checking for a valid input
     * There's a few scenarios to capture (... = next step)
     *  - ... -1 ... -1. ... -1.1
     * This will allow all of the above for futher validation
     * @param {string} input 
     * @returns bool
     */
    const isAllowedNumber = (input) => {
        return /^-?(?:\d+(\.\d*)?)?$/.test(input);
    }

    return (
        <TextField 
            InputProps={{
                endAdornment: <IconButton onClick={incrementButton} onBlur={checkForErrors}><AddIcon sx={{fontSize: '16px'}}/></IconButton>,
                startAdornment: <IconButton onClick={decrementButton} onBlur={checkForErrors}><RemoveIcon sx={{fontSize: '16px'}}/></IconButton>,
                sx: {
                    '& input': {
                        textAlign: 'center'
                    }
                }
            }}
            variant="outlined"
            value={value}
            label={label}
            sx={sx ? sx : {width: '50%', paddingX: '4px', marginY: '12px'}}
            onChange={(e) => {
                // If we want decimals and it passes the regex
                if (decimalSupport && isAllowedNumber(e.target.value)) {
                    setValue(e.target.value)
                } else if (Number.isInteger(+e.target.value) || e.target.value === '') { // No decimals, must be integer or empty
                    setValue(e.target.value)
                }
            }}
            error={isError}
            helperText={isError ? `Please enter a ${decimalSupport ? '' : 'whole'} number between ${min} and ${max}` : null}
        />
    )
}