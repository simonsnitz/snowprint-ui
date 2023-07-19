import { ButtonGroup, IconButton, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from "react";

export default function NumberButton({ label, callBack, field, sx, min, max, starter }) {

    const [value, setValue] = useState(starter);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (!validateCurrent()) {
            callBack(
                {
                    type: 'updateValue',
                    field: {
                        name: field,
                        value: value
                    }
                }
            )
        }
    }, [value])

    const validateCurrent = () => {
        if (value > max || value < min || value === '') {
            return true;
        } else {
            return false;
        }
    }

    const incrementButton = () => {
        setValue(prevState => prevState + 1);
    }
    
    const decrementButton = () => {
        setValue(prevState => prevState - 1);
    }

    const checkForErrors = () => {
        setIsError(validateCurrent());
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
                if (Number.isInteger(+e.target.value) || e.target.value === '') {
                    setValue(+e.target.value);
                }
            }}
            onBlur={() => checkForErrors()}
            error={isError}
            helperText={isError ? `Please enter a number between ${min} and ${max}` : null}
        />
    )

    // const [value, setValue] = useState(starter);
    // const [isError, setIsError] = useState(false);

    // const validateInput = () => {
    //     if (value > max || value < min || value === '') {
    //         setIsError(true)
    //         return true;
    //     } else {
    //         setIsError(false)
    //         return false;
    //     }
    // }

    // const handleStateUpdate = (updateValue) => {
    //     if (validateInput(updateValue)) {
    //         callBack(
    //             {
    //                 type: 'updateValue',
    //                 field: {
    //                     name: field,
    //                     value: value
    //                 }
    //             }
    //         )
    //     }
    //     setValue(updateValue);
    // }

    // const incrementButton = () => {
    //     setValue(prevState => prevState + 1);
    // }
    
    // const decrementButton = () => {
    //     setValue(prevState => prevState - 1);
    // }

    // // TODO - possibly rearrange UX

    // return (
    //     <TextField 
    //         InputProps={{
    //             endAdornment: <IconButton onClick={incrementButton} onBlur={validateInput}><AddIcon sx={{fontSize: '16px'}}/></IconButton>,
    //             startAdornment: <IconButton onClick={decrementButton} onBlur={validateInput}><RemoveIcon sx={{fontSize: '16px'}}/></IconButton>,
    //             sx: {
    //                 '& input': {
    //                     textAlign: 'center'
    //                 }
    //             },
    //         }}
    //         variant="outlined"
    //         value={value}
    //         label={label}
    //         sx={sx ? sx : {width: '50%', paddingX: '4px', marginY: '12px'}}
    //         margin="dense"
    //         onChange={(e) => {
    //             if (Number.isInteger(+e.target.value) || e.target.value === '') {
    //                 handleStateUpdate(+e.target.value)
    //             }
    //         }}
    //         onBlur={() => {
    //             validateInput()
    //         }}
    //         error={isError}
    //         helperText={isError ? `Please enter a number between ${min} and ${max}` : null}
    //     />
    // )
}