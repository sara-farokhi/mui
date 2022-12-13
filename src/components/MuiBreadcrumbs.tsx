import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

const MuiBreadcrumbs = () => {
    return (
        <>
            <Box m={5}>
                <Breadcrumbs itemsAfterCollapse={1} itemsBeforeCollapse={2} maxItems={1} separator={<NavigateNextIcon sx={{ color: "primary.dark" }} />}>
                    <Link href='#' underline='none'><Typography  >Link 1</Typography></Link>
                    <Link href='#' underline='none'><Typography >Link 2</Typography></Link>
                    <Link href='#' underline='none'>Link 3 </Link>
                    <Typography>test</Typography>
                </Breadcrumbs>

            </Box>
            <Box m={5}>
                <Breadcrumbs>
                    <Link href='#' underline='none'><Typography  >Link 1</Typography></Link>
                    <Link href='#' underline='none'><Typography >Link 2</Typography></Link>
                    <Link href='#' underline='none'>Link 3 </Link>
                    <Typography>test</Typography>
                </Breadcrumbs>

            </Box>
        </>
    )
}

export default MuiBreadcrumbs
