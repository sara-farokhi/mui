import React, { useState } from 'react'
import { Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material"

const MuiRadio = () => {
  const [selected, setSelected] = useState<string>('')

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value)
  }
  return (
    <>
      <Box width="300px" m={2}>
        <FormControl>
          <FormLabel>Work experience:</FormLabel>
          <RadioGroup onChange={handleSelect}  row>
            <FormControlLabel label="0-2" value="0-2" control={<Radio size="small" />}></FormControlLabel>
            <FormControlLabel label="2-4" value="2-4" control={<Radio size="medium" />}></FormControlLabel>
            <FormControlLabel label="4-6" value="4-6" control={<Radio  color="success"/>}></FormControlLabel>
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  )
}

export default MuiRadio
