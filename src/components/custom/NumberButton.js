import { ButtonGroup, IconButton, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function NumberButton({ label, callBack, sx }) {

    return (
        <TextField 
            InputProps={{
                endAdornment: <IconButton><AddIcon sx={{fontSize: '16px'}}/></IconButton>,
                startAdornment: <IconButton ><RemoveIcon sx={{fontSize: '16px'}}/></IconButton>,
                sx: {
                    '& input': {
                        textAlign: 'center'
                    }
                }
            }}
            varaint="outlined"
            label={label}
            sx={sx}
            margin="dense"
        />
    )
}