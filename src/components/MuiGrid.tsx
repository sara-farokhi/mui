import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'

//  This Component support system properties

const MuiGrid = () => {
    // const color = grey[500];

    return (
        <>
            <Box my={5}>
                <Container >
                    <Grid container
                        rowSpacing={1}
                        columnSpacing={4}
                        // spacing={6}
                    >
                        <Grid item xs={12} sm={6} md={3}>
                            <Box p={3} bgcolor="secondary.light">item1</Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box p={3} bgcolor="secondary.light">item2</Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box p={3} bgcolor="secondary.light">item3</Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box p={3} bgcolor="secondary.light">item4</Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box p={3} bgcolor="secondary.light">item1</Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box p={3} bgcolor="secondary.light">item2</Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box p={3} bgcolor="secondary.light">item3</Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box p={3} bgcolor="secondary.light">item4</Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default MuiGrid
