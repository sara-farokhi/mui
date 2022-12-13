import { Drawer, Box, Typography, IconButton } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
const MuiDrawer = () => {
    const [openDrower, setOpenDrawer] = useState(true)
    return (
        <Box display="flex">
            <IconButton onClick={() => setOpenDrawer(true)}>
                <MenuIcon />
            </IconButton>
         
            <Drawer open={openDrower} anchor="left" onClose={() => setOpenDrawer(false)}>
                <Box p={6}>
                    <Typography>This is Drawer</Typography>
                </Box>
            </Drawer>

        </Box>
    )
}

export default MuiDrawer
