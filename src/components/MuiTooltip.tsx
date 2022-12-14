import { Tooltip, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
const MuiTooltip = () => {
    return (
        <div>
            <Tooltip title="delete" placement='right' arrow enterDelay={500} leaveDelay={300}>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </div>
    )
}

export default MuiTooltip
