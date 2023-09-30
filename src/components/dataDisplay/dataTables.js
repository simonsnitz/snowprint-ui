import { Box, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react"

import { useAdvancedStore } from "stores/advancedState.store"

export default function DataTables() {

    const [localData, setLocalState] = useState([])
    const { apiResult } = useAdvancedStore(context => context);

    useEffect(() => {
        if (apiResult) {
            combineApiResults();
        }
    }, [apiResult])

    function combineApiResults() {
        let blast = apiResult.homolog
        let genome = apiResult.coordinates
        let predicted = apiResult.aligned_seq

        let combineMap = {}

        blast.forEach(item => {
            const id = item?.["Uniprot Id"]
            if (!combineMap[id]) {
                combineMap[id] = item
            }
        })

        genome.forEach(item => {
            const id = item?.["Uniprot Id"]
            if (!combineMap[id]) {
                combineMap[id] = item
            } else {
                const { "Uniprot Id": id, ...rest } = item;
                combineMap[id] = {
                    ...combineMap[id],
                    ...rest
                }
            }
        })

        predicted.forEach(item => {
            const id = item?.["Uniprot Id"]
            if (!combineMap[id]) {
                combineMap[id] = item
            } else {
                const { "Uniprot Id": id, ...rest } = item;
                combineMap[id] = {
                    ...combineMap[id],
                    ...rest
                }
            }
        })

        setLocalState(Object.values(combineMap))
    }

    const buildTable = () => {
        return (
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
                <TableHead>
                  <TableRow sx={{backgroundColor: '#f0f2f6', '& > *': {
                    border: '1px solid rgba(224, 224, 224, 1)'
                  }}}>
                  <TableCell>{'Uniprot ID'}</TableCell>
                        <TableCell>{'Identity'}</TableCell>
                        <TableCell>{'Coverage'}</TableCell>
                        <TableCell>{'Genome'}</TableCell>
                        <TableCell>{'Start'}</TableCell>
                        <TableCell>{'Stop'}</TableCell>
                        <TableCell>{'Strand'}</TableCell>
                        <TableCell>{'Predicted operator'}</TableCell>
                        <TableCell>{'Align score'}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {
                        localData.map(item => (
                            <TableRow  sx={{'& > *': {
                                border: '1px solid rgba(224, 224, 224, 1)'
                            }}}>
                                <TableCell>{item['Uniprot Id']}</TableCell>
                                <TableCell>{item["identity"]}</TableCell>
                                <TableCell>{item["coverage"]}</TableCell>
                                <TableCell>{item["Genome"]}</TableCell>
                                <TableCell>{item['Start']}</TableCell>
                                <TableCell>{item["Stop"]}</TableCell>
                                <TableCell>{item["Strand"]}</TableCell>
                                <TableCell>{item["Predicted operator"]}</TableCell>
                                <TableCell>{item["Align score"]}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
              </Table>
            </TableContainer>
          );
    }

    return (
        <Box>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginY: '20px'}}>        <Typography variant='h3'>{'Blast results'}</Typography></Box>

        {buildTable()}
        </Box>
    )
}