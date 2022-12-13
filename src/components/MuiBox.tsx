import { Box } from '@mui/material'
import { red } from '@mui/material/colors';

//  This Component support system properties

const MuiBox = () => {
    // const color = grey[500];

    return (
        <>
            <Box m={5} width="200px" height="200px" sx={{
                bgcolor: red[500],
                typography: "h2",
                p: "10px",
                "&:hover": {
                    backgroundColor: "secondary.light",
                }
            }}>
                tesgt
            </Box>
            <Box m={5} width="200px" height="200px" bgcolor="secondary.light" typography={"h2"} color='white' p={1}>
                test
            </Box>
        </>
    )
}

export default MuiBox
