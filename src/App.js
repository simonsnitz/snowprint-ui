import { Box, CssBaseline } from '@mui/material';
import './App.css';
import PredictionInput from './components/introduction/PredictionInput';

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <PredictionInput />
    </Box>
    </>
  );
}

export default App;
