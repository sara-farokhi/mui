import { Stack, Chip, Avatar } from '@mui/material'
import { useState } from 'react'
const MuiChips = () => {

    const [chips, setChips] = useState<string[]>(["chip1", "chip2", "chip3", "chip4"])
    const handleClose = () => {
        alert("close is clicked")
    }
    const deleteChip = (chiptoDelete: string) => {
        setChips(chips.filter(chip => chip !== chiptoDelete))    }
    return (
        <>
            <Stack direction="row" spacing={3} m={5}>
                < Chip label="chip1" />
                < Chip label="chip1" color="secondary" />
                < Chip label="chip1" variant='outlined' color="success" />
                < Chip label="chip1" variant='outlined' color="error" onDelete={handleClose} />
            </Stack >
            <Stack direction="row" spacing={3} m={5}>
                < Chip label="chip1" />
                < Chip label="chip1" color="secondary" />
                < Chip label="chip1" variant='outlined' color="success" />
                < Chip label="chip1" variant='outlined' color="error" onDelete={handleClose} />
            </Stack >
            <Stack direction="row" spacing={3} m={5}>
                {chips.map(chip => <Chip key={chip} label={chip} onDelete={()=>deleteChip(chip)} />)}
            </Stack >

        </>
    )
}

export default MuiChips
