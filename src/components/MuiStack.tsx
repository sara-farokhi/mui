import { Box, Stack } from '@mui/material'
import { red } from '@mui/material/colors';

//  This Component support system properties
const MuiStack = () => {
    // / const color = grey[500];
    return (
        <Stack m={3} typography="h4" spacing={3} direction="row" bgcolor="primary.dark">
            <Box width="200px" height="200px" sx={{
                bgcolor: red[500],

            }}>
                tesgt
            </Box>
            <Box bgcolor='primary.main' width="200px" height="200px" >
                test
            </Box>
        </Stack>
    )
}

export default MuiStack
