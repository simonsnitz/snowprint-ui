import { Box, Typography } from "@mui/material";
import DOMPurify from 'dompurify'
import { useEffect, useState } from "react";

export default function DataResults({apiState}) {

    const [promoterHtml, setPromoterHtml] = useState('')
    const [motifHtml, setMotifHtml] = useState('')

    useEffect(() => {
        // Deal with potential security issues of XSS
        if (apiState?.apiResult?.html) {
            setPromoterHtml(DOMPurify.sanitize(apiState.apiResult.html))
        }

        if (apiState?.apiResult?.motif_html) {
            setMotifHtml(DOMPurify.sanitize(apiState.apiResult.motif_html))
        }
        
    }, [apiState.apiResult])

    return (
        <Box>
            <Typography sx={{width: '100%', textAlign: 'center', marginY: '20px'}} variant='h3'>Results</Typography>
            <Box sx={{display: 'flex', maxWidth: '100%'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', width: '10%'}}>
                    <Typography>{'Conservation score'}</Typography>
                    <Typography>{apiState?.apiResult?.consensus_score || ''}</Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', width: '10%'}}>
                    <Typography>{'Sequences aligned'}</Typography>
                    <Typography>{apiState?.apiResult?.num_seqs || ''}</Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', width: '80%', flexWrap: 'wrap'}}>
                    <Typography>{'Predicted promoter region'}</Typography>
                    <div dangerouslySetInnerHTML={{__html: promoterHtml}} style={{maxWidth: '100%', wordWrap: 'break-word'}}/>
                    {/* <div style={{ maxWidth: '100%', wordWrap: 'break-word'}}>{parse(sanitizeHtml(apiState?.apiResult?.html) || '')}</div> */}
                </Box>
            </Box>
            <Box>
                <Typography>{'Consensus sequence'}</Typography>
                <Box>{apiState?.apiResult?.consensus_seq || ''}</Box>
            </Box>
            <Box>
                <Typography>{'Conservation motif logo'}</Typography>
                <div dangerouslySetInnerHTML={{__html: motifHtml}} style={{maxWidth: '100%'}}/>
            </Box>
        </Box>
    )
}