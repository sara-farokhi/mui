import React from 'react'
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


const MuiNavBar = () => {
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
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default MuiNavBar
