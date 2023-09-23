import { Box, CircularProgress, Typography, Skeleton } from "@mui/material";

export default function LoadingComponent({apiState}) {
    return (
        <Box sx={{display: 'flex', marginTop: '20px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        {
            apiState?.statusCode === 202 ? (<>
                <Typography sx={{marginTop: '16px'}}>{`This request is currently being worked on. We will keep checking for results in the background.`}</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <Typography sx={{marginTop: '16px', whiteSpace: 'pre-wrap'}}>{`You can return to this loader by inputing this Snowprint ID into the box above:  `}</Typography> 
            {
                apiState?.apiUUID ? <Typography sx={{marginTop: '16px', color: 'red'}}>{`${apiState.apiUUID}`}</Typography> : <Skeleton variant="text" sx={{width: '50px'}}/>
            }
            </Box>
            </>) : (null)
        }

            <CircularProgress sx={{marginTop: '16px'}}/>
        </Box>
    )
}