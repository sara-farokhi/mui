import React, { useState } from 'react'
import { Box, TextField, MenuItem } from "@mui/material"

const MuiSelect = () => {
  const [value, setValue] = useState("")
  const [values, setValues] = useState<string[]>([])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const handleMultiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const multiValues = e.target.value
    setValues(typeof multiValues === "string" ? multiValues.split(",") : multiValues)

  }
 
  return (
    <>
      <Box width="300px" m={2}>
        <TextField label="Countries" value={value} select fullWidth onChange={handleChange}>
          <MenuItem value="ir">Iran</MenuItem>
          <MenuItem value="us">USA</MenuItem>
          <MenuItem value="uk">UK</MenuItem>
        </TextField>
      </Box>
      <Box width="300px" m={2}>
        <TextField label="Countries" value={values} select fullWidth onChange={handleMultiChange}
          SelectProps={{ multiple: true }}>
          <MenuItem value="ir">Iran</MenuItem>
          <MenuItem value="us">USA</MenuItem>
          <MenuItem value="uk">UK</MenuItem>
        </TextField>
      </Box>
    </>
  )
}

export default MuiSelect
