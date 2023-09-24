import { Box, useTheme, useMediaQuery } from "@mui/material";

export default function MotifItem({item, largestScale}) {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'))

    // 1 rem * fontSize * largestScale

    return (
        <Box
            sx={{
                height: `${1 * 4 * largestScale}rem`,
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* This hidden element is required to maintain the regular DOM flow while the absolute element is scaled */}
            <Box sx={{                
                color: item.color,
                fontWeight: 550,
                lineHeight: 1,
                fontSize: '400%',
                visibility: 'hidden'
            }}>
                {item.base}
            </Box>
            <Box sx={{                
                color: item.color,
                fontWeight: 550,
                lineHeight: 1,
                fontSize: '400%',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                '::before': {
                    content: '"' + item.base + '"',
                    display: 'block',
                    transform: `scaleY(${item.scaleY})`,
                    transformOrigin: 'bottom'
                }
            }}>
            </Box>
        </Box>
    );
}