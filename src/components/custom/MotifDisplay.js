import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import MotifItem from "./MotifItem";

export default function MotifDisplay({data}) {

    const [largestScale, setLargestScale] = useState(0);

    useEffect(() => {
        let biggest = 0;
        data.forEach(item => {
            if (item.scaleY > biggest) {
                biggest = item.scaleY
            }
        })
        setLargestScale(biggest)
    }, [data])

    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            {
                data.map((item, index) => <MotifItem key={index} item={item} largestScale={largestScale}/>)
            }
        </Box>
    )
}

