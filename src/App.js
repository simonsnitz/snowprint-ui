import { useState } from 'react';
import { Box, CssBaseline, IconButton, useTheme, useMediaQuery } from '@mui/material';
import './App.css';
import PredictionInput from './components/introduction/PredictionInput';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'))

  const [openMobileDrawer, setOpenMobileDrawer] = useState(false);

  return (
    <>
      <CssBaseline />
      <Box sx={{
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      overflowY: 'auto',
            // Create a Mac-OS like scrollbar
      '& ::-webkit-scrollbar': {
        backgroundColor: '#fff',
        width: '16px'
      },
      '& ::-webkit-scrollbar-track': {
          backgroundColor: '#fff'
      },
      '& ::-webkit-scrollbar-thumb': {
          backgroundColor: '#babac0',
          borderRadius: '16px',
          border: '4px solid #fff'
      },
      '& ::-webkit-scrollbar-button': {
          display: 'none'
      }
    }}>
      <Box sx={{
        display: isSmallScreen ? 'flex' : 'none',
        width: '100%'
      }}>
        <IconButton onClick={() => setOpenMobileDrawer(!openMobileDrawer)}>
          <MenuIcon fontSize="large"/>
        </IconButton>
      </Box>
      <PredictionInput openMobileDrawer={openMobileDrawer} setOpenMobileDrawer={setOpenMobileDrawer}/>
    </Box>
    </>
  );
}

export default App;
