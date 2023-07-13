import { Box, Divider, Drawer, Typography } from "@mui/material";

import AboutMessage from "./AboutMessage";
import AdvancedOptions from "./advanced";

export default function SidePanel() {
    return (
        <Box sx={{display: 'flex', backgroundColor: '#f0f2f6', height: '100%', paddingX: '16px', flexDirection: 'column', maxWidth: '100%', overflowY: 'auto'}}>
            <AboutMessage />
            <Divider />
            <AdvancedOptions />
        </Box>
    )
}