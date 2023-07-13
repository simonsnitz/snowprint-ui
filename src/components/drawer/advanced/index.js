import { Box, Divider, Typography } from "@mui/material"
import Blast from "./Blast"
import Promoter from "./Promoter"
import Search from "./Search"

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
            <Promoter />
            <Divider sx={{marginY: '24px'}} />
            <Search />
        </Box>
    )
}