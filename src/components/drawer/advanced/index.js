import { Box, Divider, Typography } from "@mui/material"
import Blast from "./Blast"
import Extraction from "./Extraction"
import Search from "./Search"
import Alignment from "./Alignment"

export default function AdvancedOptions() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <Typography sx={{
                fontSize: '24px',
                fontWeight: 'bold',
                paddingY: '20px'
            }}>
                {'Advanced options'}
            </Typography>
            <Blast />
            <Divider sx={{marginY: '24px'}}/>
            <Extraction />
            <Divider sx={{marginY: '24px'}} />
            <Search />
            <Divider sx={{marginY: '24px'}} />
            <Alignment />
        </Box>
    )
}