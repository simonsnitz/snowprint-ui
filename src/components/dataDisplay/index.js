import { Box } from "@mui/material";
import DataTables from "./dataTables";
import DataResults from "./dataResults";

export default function DataDisplay() {
    return (
        <Box>
            <DataTables/>
            <DataResults/>
        </Box>
    )
}