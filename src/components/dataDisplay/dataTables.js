import { Box, Table, TableContainer, TableHead, TableRow, TableCell } from "@mui/material"

export default function DataTables() {
    function BlastTable() {
        return (
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Uniprot ID</TableCell>
                            <TableCell>Identity</TableCell>
                            <TableCell>Coverage</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        )
    }

    function GenomeTable() {
        return (
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Uniprot ID</TableCell>
                            <TableCell>Genome</TableCell>
                            <TableCell>Start</TableCell>
                            <TableCell>Stop</TableCell>
                            <TableCell>Strand</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        )
    }

    function HomologTable() {
        return (
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Uniprot ID</TableCell>
                            <TableCell>Predicted Operator</TableCell>
                            <TableCell>Align Score</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        )
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <BlastTable />
            <GenomeTable />
            <HomologTable />
        </Box>
    )
}