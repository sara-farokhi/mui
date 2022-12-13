import React, { useState } from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Stack,
    Menu,
    MenuItem
} from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const MuiMenu = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    const open = Boolean(anchorEl)
    const handeShowMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget)
    }
    const HandleClose = () => {
        setAnchorEl(null)
    }
    return (
        <AppBar position='static' color='transparent'>
            <Toolbar sx={{ bgcolor: "primary.main", color: "white" }} >
                <IconButton size='large' edge='start' color='inherit' aria-label='logo' >
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant="h5" sx={{
                    flexGrow: 1
                }} >POKEMONE</Typography>
                <Stack direction="row" spacing={1}>
                    <Button color='inherit'>Features</Button>
                    <Button color='inherit'>Pricing</Button>
                    <Button color='inherit'>About</Button>
                    <Button
                        id="show-menu"
                        aria-controls={open ? 'menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup='true'
                        onClick={handeShowMenu}
                        endIcon={<KeyboardArrowDownIcon />}

                        color='inherit'>Show Menu
                    </Button>
                </Stack>
                <Menu
                    id="menu"
                    aria-labelledby='show-menu'
                    anchorEl={anchorEl}
                    open={open}
                    onClose={HandleClose}
                >
                    <MenuItem onClick={HandleClose}>item 1</MenuItem>
                    <MenuItem onClick={HandleClose}>item 1</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default MuiMenu
