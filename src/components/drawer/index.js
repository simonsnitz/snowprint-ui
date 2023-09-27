import React, { useEffect } from "react";
import { Box, Divider, Drawer, Typography } from "@mui/material";

import AboutMessage from "./AboutMessage";
import AdvancedOptions from "./advanced";

export default function SidePanel({setOpenMobileDrawer, apiState, apiDispatch}) {
    return (
        <Box sx={{display: 'flex', backgroundColor: '#f0f2f6', height: '100%', paddingX: '16px', flexDirection: 'column', maxWidth: '100%', overflowY: 'auto'}}>
            <AboutMessage setOpenMobileDrawer={setOpenMobileDrawer}/>
            <Divider />
            <AdvancedOptions apiState={apiState} apiDispatch={apiDispatch}/>
        </Box>
    )
}