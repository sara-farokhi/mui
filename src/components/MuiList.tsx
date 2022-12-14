import { Box, List, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemButton, ListItemIcon, Divider } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'


const MuiList = () => {
    return (
        <Box m={5}>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar
                                src='https://randomuser.me/api/portraits/women/79.jpg' />
                        </ListItemAvatar>
                        <ListItemText primary="Item1" secondary="This is Item1"></ListItemText>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar
                                src='https://randomuser.me/api/portraits/women/51.jpg' />
                        </ListItemAvatar>
                        <ListItemText primary="Item2" secondary="This is Item2"></ListItemText>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar src={`${process.env.PUBLIC_URL}/assets/user.png`} sx={{ bgcolor: "primary.light", height: 40, width: 40 }} />

                        </ListItemAvatar>
                        <ListItemText primary="Item3" secondary="This is Item3"></ListItemText>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default MuiList
