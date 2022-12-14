import { Stack, Avatar, AvatarGroup } from '@mui/material'

const MuiAvatar = () => {
    return (
        <div>
            <Stack direction="row" m={5}>
                <Avatar sx={{ bgcolor: "primary.light" }} >MH</Avatar>
                <Avatar sx={{ bgcolor: "success.light" }} >SF</Avatar>
                <Avatar sx={{ bgcolor: "seconadry.light" }} >MJ</Avatar>
            </Stack>
            <Stack direction="row" m={5}>
                <AvatarGroup max={2}>
                    <Avatar sx={{ bgcolor: "primary.light" }} >MH</Avatar>
                    <Avatar sx={{ bgcolor: "success.light" }} >SF</Avatar>
                    <Avatar sx={{ bgcolor: "seconadry.light" }} >MJ</Avatar>
                    <Avatar sx={{ bgcolor: "success.light" }} >SF</Avatar>
                    <Avatar sx={{ bgcolor: "seconadry.light" }} >MJ</Avatar><Avatar sx={{ bgcolor: "success.light" }} >SF</Avatar>
                    <Avatar sx={{ bgcolor: "seconadry.light" }} >MJ</Avatar>
                </AvatarGroup>
            </Stack>
            <Stack direction="row" m={5} >
                <AvatarGroup>
                    <Avatar sx={{ bgcolor: "primary.light", height: 60, width: 60 }} />
                    <Avatar sx={{ bgcolor: "success.light", height: 60, width: 60 }} />
                    <Avatar sx={{ bgcolor: "seconadry.light", height: 60, width: 60 }} />
                </AvatarGroup>
            </Stack>
            <Stack direction="row" m={5} >
                <AvatarGroup>
                    <Avatar src={`${process.env.PUBLIC_URL}/assets/user.png`} sx={{ bgcolor: "primary.light", height: 60, width: 60 }} />
                    <Avatar
                        src='https://randomuser.me/api/portraits/women/79.jpg'
                        sx={{ bgcolor: "success.light", height: 60, width: 60 }} />
                    <Avatar
                        src='https://randomuser.me/api/portraits/women/51.jpg'
                        sx={{ bgcolor: "seconadry.light", height: 60, width: 60 }} />
                </AvatarGroup>
            </Stack>


        </div>
    )
}

export default MuiAvatar
