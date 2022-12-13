import { Stack, Link, Typography, Button } from '@mui/material'
import React from 'react'

const MuiLink = () => {
  return (
    <div>
      <Stack direction="row" spacing={2} p={15}>
        <Link href='#' underline='hover'><Typography variant='h5' >Link 3</Typography></Link>
        <Link href='#' underline='none'><Typography variant='h5'>Link 2</Typography></Link>
        <Link href='#' variant='h5' color="secondary.light">Link </Link>
      </Stack>

    </div>
  )
}

export default MuiLink
