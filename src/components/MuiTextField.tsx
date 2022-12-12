import { TextField, Stack, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';

const MuiTextField = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <Stack spacing={2} m={3} direction="row">
        <TextField variant='outlined' label="Outlined"></TextField>
        <TextField variant='filled' label="Filled"></TextField>
        <TextField variant='standard' label="Standard"></TextField>
      </Stack>
      <Stack spacing={2} m={3} direction="row">
        <TextField variant='outlined' label="Outlined" color="secondary" size="small"></TextField>
        <TextField variant='filled' label="Filled" color="success" size="medium"></TextField>
      </Stack>
      <Stack spacing={2} m={3} direction="row">
        <TextField variant='outlined' label="Outlined" required></TextField>
        <TextField variant='filled' label="Filled" helperText="This is input with helper text" ></TextField>
        <TextField variant='standard' label="Standard" error></TextField>
      </Stack>
      <Stack spacing={2} m={3} direction="row">
        <TextField variant='outlined' label="Outlined" inputProps={{ readOnly: true }}></TextField>
        <TextField variant='filled' label="Filled" disabled ></TextField>
        <TextField variant='standard' label="Standard" type="password" InputProps={{
          startAdornment: <InputAdornment position='start' ><VisibilityIcon color='primary' /></InputAdornment>
        }}></TextField>
      </Stack>
      <Stack spacing={2} m={3} direction="row">
        <TextField variant='outlined' label="Outlined" required></TextField>
        <TextField variant='filled' label="Filled" helperText="This is input with helper text" ></TextField>
        <TextField variant='standard' label="Standard"
          value={value} onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value && "required"}
        ></TextField>
      </Stack>

    </>
  )
}

export default MuiTextField
