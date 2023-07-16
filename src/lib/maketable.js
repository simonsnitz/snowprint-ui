import { Table, TableContainer, TableHead, TableRow, TableCell } from "@mui/material";

export default function makeTable(headers, children) {
    return (
        <TableContainer>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        {headers.forEach(item => <TableCell>{item}</TableCell>)}
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    )
}