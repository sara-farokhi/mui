import React from 'react'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import CopyIcon from '@mui/icons-material/FileCopyOutlined'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import EditIcon from '@mui/icons-material/Edit'

const MuiSpeedDial = () => {
    return (
        <SpeedDial
            ariaLabel='Navigation speed dial'
            sx={{ position: "absolute", bottom: "16px", right: '16px', display: { xs: 'flex', md: 'none' } }}

            icon={<SpeedDialIcon openIcon={<EditIcon />} />}  >
            <SpeedDialAction icon={<CopyIcon />} tooltipTitle="Copy" />
            <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
            <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
        </SpeedDial>

    )
}

export default MuiSpeedDial
