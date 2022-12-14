import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import { useState } from 'react'

const MuiBottomNavigation = () => {
    const [value, setValue] = useState(0)
    return (
        <BottomNavigation
            sx={{ position: "absolute", bottom: 0, width: "100%", display: { xs: "flex", md: "none" } }}
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
            showLabels
        >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
    )
}

export default MuiBottomNavigation
