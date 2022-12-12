import { useState } from 'react'
import { Box, Switch, FormControlLabel } from "@mui/material"

const MuiSwitch = () => {
  const [value, setValue] = useState<boolean>(false)
  console.log(value)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked)
  }

  return (
    <>
      <Box width="300px" m={2}>
        <FormControlLabel label="mui swtich" control={<Switch checked={value} onChange={handleChange} color="secondary" />} />
      </Box>
    </>
  )
}

export default MuiSwitch
