import { Box, CircularProgress, Typography, Skeleton } from "@mui/material";

import { useAdvancedStore } from "stores/advancedState.store";

export default function LoadingComponent() {

    const { statusCode, apiUUID } = useAdvancedStore(context => context);

    return (
        <Box sx={{display: 'flex', marginTop: '20px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        {
            statusCode === 202 ? (<>
                <Typography sx={{marginTop: '16px'}}>{`This request is currently being worked on. We will keep checking for results in the background. The average time for completion is around four minutes.`}</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <Typography sx={{marginTop: '16px', whiteSpace: 'pre-wrap'}}>{`You can return to this loader by inputting this Snowprint ID into the box above:  `}</Typography> 
            {
                apiUUID ? <Typography sx={{marginTop: '16px', color: 'red'}}>{`${apiUUID}`}</Typography> : <Skeleton variant="text" sx={{width: '50px'}}/>
            }
            </Box>
            </>) : (null)
        }

            <CircularProgress sx={{marginTop: '16px'}}/>
        </Box>
    )
}