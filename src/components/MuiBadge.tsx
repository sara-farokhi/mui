import { Stack, Badge } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
const MuiBadge = () => {
    return (
        <div>
            <Stack direction="row" spacing={3} m={5}>
                <Badge variant='dot' color='primary' badgeContent={1002} ><MailIcon /></Badge>
                <Badge badgeContent={1002} ><MailIcon /></Badge>
                <Badge badgeContent={0} showZero color='primary' ><MailIcon /></Badge>
                <Badge badgeContent={1002} max={900} color='secondary'>
                    <MailIcon />
                </Badge>
            </Stack>

        </div >
    )
}

export default MuiBadge
