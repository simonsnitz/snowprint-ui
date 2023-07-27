import { Box, IconButton, Button, Drawer, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import InputRadio from "./InputRadio";
import SidePanel from "../drawer";
import { FirstPage } from "@mui/icons-material";

export default function PredictionInput({ openMobileDrawer, setOpenMobileDrawer }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'))
    return (
        <Box id="prediction-container" sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box sx={{
                width: '30%',
                display: isSmallScreen ? 'none': 'flex',
                height: '100%',
                overflowY: 'auto',
                // Create a Mac-OS like scrollbar
                // TODO - this stopped working
                '&::-webkit-scrollbar': {
                    backgroundColor: '#fff',
                    width: '16px'
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: '#fff'
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#babac0',
                    borderRadius: '16px',
                    border: '4px solid #fff'
                },
                '&::-webkit-scrollbar-button': {
                    display: 'none'
                }
            }}>
                <SidePanel />
            </Box>
            <Box sx={{
                width: '80%',
                padding: '5%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                objectFit: 'contain',
                flexDirection: 'column'
            }}>
                <img src={'./Snowprint_Logo.png'} style={{maxWidth: "100%"}}/>
                <Typography variant="h4" align="center">{`Predict a regulator's DNA binding sequence`}</Typography>
                <InputRadio />
                {/* TODO - what to put for the label? */}
                <TextField label="Please enter your data here" sx={{width: '100%', marginTop: '24px'}} variant="filled"/>
                <Button variant="outlined" sx={{marginTop: '20px'}}>
                    Submit
                </Button>
            </Box>
            <Drawer anchor="left" open={openMobileDrawer} onClose={() => setOpenMobileDrawer(!openMobileDrawer)}>
                <SidePanel setOpenMobileDrawer={setOpenMobileDrawer}/>
            </Drawer>
        </Box>
    )
}