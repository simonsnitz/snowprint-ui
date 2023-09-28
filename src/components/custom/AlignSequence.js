import { useState, useEffect } from "react";
import { TextField } from "@mui/material";

import { useAdvancedStore } from "../../stores/advancedState.store";

export default function AlignSequence({callBack, field}) {

    const { updateStateValue, setGlobalError } = useAdvancedStore(context => context);

    const [seqToAlign, setSeqToAlign] = useState(null);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        updateStateValue('seqToAlign', seqToAlign)
    }, [seqToAlign])

    // Minimum is 10, disable search on mount
    useEffect(() => {
        setGlobalError(true)
        setIsError(true);

        return () => setGlobalError(false)
    }, [])

    return(
        <TextField 
            onChange={(e) => {
                if (!/^[ATCGatcg]+$/.test(e.target.value)) {
                    return;
                }

                if (e.target.value.length < 10) {
                    setGlobalError(true)
                    setIsError(true)
                    } else {
                        if (isError) {
                            setIsError(false);
                            setGlobalError(false)
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