import { Box } from "@mui/material";
import DataTables from "./dataTables";
import DataResults from "./dataResults";

export default function DataDisplay({apiState}) {
    return (
        <Box>
            <DataTables apiState={apiState}/>
            <DataResults apiState={apiState}/>
        </Box>
    )
}