import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import MotifDisplay from "components/custom/MotifDisplay";
import DOMPurify from 'dompurify'
import { useEffect, useState } from "react";

import { useAdvancedStore } from "stores/advancedState.store";

export default function DataResults() {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'))

    const {apiResult} = useAdvancedStore(context => context);
    const [promoterHtml, setPromoterHtml] = useState('')
    const [motifHtml, setMotifHtml] = useState('')

    useEffect(() => {
        // Deal with potential security issues of XSS
        if (apiResult?.html) {
            setPromoterHtml(DOMPurify.sanitize(apiResult.html))
        }

        if (apiResult?.motif_html) {
            setMotifHtml(apiResult.motif_html)
        }
        
    }, [apiResult])

    return (

        <>
            <Typography sx={{width: '100%', textAlign: 'center', marginY: '20px'}} variant='h3'>Results</Typography>
            <Box sx={{display: 'flex', minWidth: '100%', flexDirection: isSmallScreen ? 'column' : 'row', flexWrap: 'wrap'}}>
                <Box sx={{display: 'flex', width: '100%'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', width: isSmallScreen ? '100%' : '50%'}}>
                            <Typography>{'Conservation score'}</Typography>
                            <Typography sx={{fontWeight: 700, fontSize: '2.25rem'}}>{apiResult?.consensus_score || ''}</Typography>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', width: isSmallScreen ? '100%' : '50%'}}>
                        <Typography>{'Sequences aligned'}</Typography>
                        <Typography sx={{fontWeight: 700, fontSize: '2.25rem'}}>{apiResult?.num_seqs || ''}</Typography>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '100%', flexWrap: 'wrap', marginTop: '20px'}}>
                    <Typography>{'Predicted promoter region'}</Typography>
                    <div dangerouslySetInnerHTML={{__html: promoterHtml}} style={{maxWidth: '100%', wordWrap: 'break-word'}}/>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', marginTop: '20px'}}>
                    <Typography>{'Consensus sequence'}</Typography>
                    <Box sx={{wordWrap: 'break-word', fontWeight: 700, fontSize: '2rem'}}>{apiResult?.consensus_seq || ''}</Box>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
                    <Typography>{'Conservation motif logo'}</Typography>
                    <MotifDisplay data={motifHtml ? motifHtml : []} />
                </Box>
            </Box>
        </>
    )
}

