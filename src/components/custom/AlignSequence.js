import { useState, useEffect } from "react";
import { TextField } from "@mui/material";

export default function AlignSequence({callBack, field}) {

    const [seqToAlign, setSeqToAlign] = useState(null);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        callBack(
            {
                type: 'updateValue',
                field: {
                    name: field,
                    value: seqToAlign
                }
            }
        )
    }, [seqToAlign])

    // Minimum is 10, disable search on mount
    useEffect(() => {
        callBack({
            type: 'isError',
            value: true
        });
        setIsError(true);

        // Clear error on unmount
        return () => callBack({
            type: 'isError',
            value: false
        })
    }, [])

    return(
        <TextField 
            onChange={(e) => {
                if (!/^[ATCGatcg]+$/.test(e.target.value)) {
                    return;
                }

                if (e.target.value.length < 10) {
                    callBack({
                        type: 'isError',
                        value: true
                    })
                    setIsError(true)
                    } else {
                        if (isError) {
                            setIsError(false);
                            callBack({
                                type: 'isError',
                                value: false
                            })
                        }
                    }
                    setSeqToAlign(e.target.value);
                }
            }
            value={seqToAlign}
            sx={{width: '100%', marginBottom: '16px'}}
            label="Sequence for alignment"
            error={isError}
            helperText={isError ? 'Minimum sequence is 10 bases long' : null}
        />
    )
}