import { Box, FormControl, FormLabel, FormControlLabel, Checkbox, FormGroup } from '@mui/material'
import React, { useState } from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';


const MuiCheckBox = () => {
  const [acceptTerm, setAccepTerm] = useState(true)
  const [items, setItems] = useState<string[]>([])
  const handeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccepTerm(e.target.checked)
  }
  // console.log(items)
  const handleSeletedItems = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (items.indexOf(value) === -1) {
      setItems([...items, value])
    }
    else {
      setItems(items.filter(item => item !== value))
    }
  }
  return (
    <div>
      <Box m={5} >
        <FormControlLabel label="I accept terms and conitions" checked={acceptTerm} control={<Checkbox onChange={handeChange} />}></FormControlLabel >
      </Box >

      <Box m={3} >
        <Checkbox
          onChange={handeChange}
          checkedIcon={<BookmarkIcon />}
          icon={<BookmarkBorderIcon />}
        />
      </Box>
      <Box m={3} >
        <FormControl>
          <FormLabel>select items</FormLabel>
          <FormGroup>
            <FormControlLabel label="Item1" control={<Checkbox value="Item1" checked={items.includes("Item1")} onChange={handleSeletedItems} />}></FormControlLabel>
            <FormControlLabel label="Item2" control={<Checkbox value="Item2" checked={items.includes("Item2")} onChange={handleSeletedItems} />}></FormControlLabel>
            <FormControlLabel label="Item3" control={<Checkbox value="Item3" checked={items.includes("Item3")} onChange={handleSeletedItems} />}></FormControlLabel>
          </FormGroup>
        </FormControl>
      </Box >
    </div>

  )
}

export default MuiCheckBox
