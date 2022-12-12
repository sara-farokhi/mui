import React, { useState } from 'react'
import { Button, IconButton, Stack, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';



const MuiButton = () => {
  const [format, setFormat] = useState<string[]>(['bold'])
  const changeFormat = (event: React.MouseEvent<HTMLElement>, updateFormat: string[]) => {
    setFormat(updateFormat)
  }

  const [singleFormat, setSingleFormat] = useState<string | null>(null)
  const changeSingleFormat = (event: React.MouseEvent<HTMLElement>, updateSingleFormat: string | null) => {
    setSingleFormat(updateSingleFormat)
  }

  return (
    <div>
      <Stack direction="row" spacing={3} m={3}>
        <Button variant='text'>text</Button>
        <Button variant='contained'>contained</Button>
        <Button variant='outlined'>outlined</Button>
      </Stack>
      <Stack direction="row" spacing={3} m={3}>
        <Button variant='contained' color='primary'>primary</Button>
        <Button variant='contained' color='secondary'>secondary</Button>
        <Button variant='contained' color='success'>success</Button>
        <Button variant='contained' color='warning'>warning</Button>
        <Button variant='contained' color='error'>error</Button>
      </Stack>
      <Stack display="block" direction="row" spacing={3} m={3}>
        <Button variant='contained' size='small'>Small</Button>
        <Button variant='contained' size='medium'>medium</Button>
        <Button variant='contained' size='large'>large</Button>
      </Stack>
      <Stack display="block" direction="row" spacing={3} m={3}>
        <Button variant='contained' startIcon={<SendIcon />}>Small</Button>
        <Button variant='outlined' endIcon={<SendIcon />}>medium</Button>
      </Stack>
      <Stack display="block" direction="row" spacing={3} m={3}>
        <IconButton>
          <SendIcon color='secondary' />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing={3} m={3}>
        <Button variant='contained' color='primary' disableElevation>primary</Button>
        <Button variant='contained' color='secondary' disabled>secondary</Button>
        <Button variant='contained' color='secondary'>secondary</Button>
        <Button variant='contained' color='secondary' disableRipple>secondary</Button>
      </Stack>
      <Stack direction="row" m={3}>
        <ButtonGroup size="small">
          <Button variant='contained' color='primary'>primary</Button>
          <Button variant='contained' color='secondary'>secondary</Button>
          <Button variant='contained' color='success'>success</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row" m={3}>
        <ButtonGroup color='primary' variant='outlined' orientation='vertical'>
          <Button >primary</Button>
          <Button >secondary</Button>
          <Button >success</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row" m={3}>
        <ButtonGroup color='primary' variant='text'>
          <Button >primary</Button>
          <Button >secondary</Button>
          <Button >success</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row" m={3}>
        <ToggleButtonGroup value={format} onChange={changeFormat}>
          <ToggleButton value="bold" ><FormatBoldIcon /></ToggleButton>
          <ToggleButton value="italic" ><FormatItalicIcon /></ToggleButton>
          <ToggleButton value="underlined" ><FormatUnderlinedIcon /></ToggleButton>
        </ToggleButtonGroup>

      </Stack>
      <Stack direction="row" m={3}>
        <ToggleButtonGroup value={singleFormat} onChange={changeSingleFormat} exclusive>
          <ToggleButton value="bold" ><FormatBoldIcon /></ToggleButton>
          <ToggleButton value="italic" ><FormatItalicIcon /></ToggleButton>
          <ToggleButton value="underlined" ><FormatUnderlinedIcon /></ToggleButton>
        </ToggleButtonGroup>

      </Stack>
    </div>
  )
}

export default MuiButton
