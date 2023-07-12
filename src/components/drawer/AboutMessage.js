import { FirstPage } from "@mui/icons-material";
import { Typography, Box, IconButton, useTheme, useMediaQuery } from "@mui/material";

export default function AboutMessage({setOpenMobileDrawer}) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box sx={{maxWidth: '100%'}}>
            <Box sx={{display: isSmallScreen ? 'flex' : 'none', width: '100%', justifyContent: 'flex-end'}}>
                <IconButton onClick={() => setOpenMobileDrawer(false)}>
                    <FirstPage fontSize="large"/>
                </IconButton>
            </Box>
            <Typography sx={{
                paddingTop: isSmallScreen ? '12px' : '96px',
                marginBottom: '16px'
            }}>
                {'Prokaryotic transcription factors can be repurposed as chemical measurement tools for synthetic biology.'}
            </Typography>
            <Typography sx={{
                marginBottom: '16px'
            }}>
                {'To repurpose a transcription factor, the specific DNA sequence it binds to must be determined.'}
            </Typography>
            <Typography sx={{
                marginBottom: '16px'
            }}>
                {'Snowprint predicts transcription factor-DNA interactions by analyzing conservation patterns in local genomic contexts.'}
            </Typography>
            <Typography sx={{
                marginBottom: '16px',
                fontSize: '12px'
            }}>
                {'If you have any questions or would like to report any bugs, please contact us via Email. Our code is publically available on GitHub.'}
            </Typography>
            <Typography sx={{
                marginBottom: '16px',
                fontSize: '12px'
            }}>
                {`d'Oelsnitz S., Stofel S.K., and Ellington A.D. (2023) Snowprint: a predictive tool for genetic biosensor discovery. bioRxiv DOI:10.1101/2023.04.29.538814v1`}
            </Typography>
            <Typography sx={{
                marginBottom: '16px',
                fontSize: '12px'
            }}>
                {'Snowprint development was supported by the National Institute of Standards and Technology (70NANB21H100)'}
            </Typography>
        </Box>
    )
}