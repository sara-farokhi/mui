import { useState } from 'react'
import { Stack, Rating } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null)
  console.log(value)
  const handleChange = (e: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue)
  }
  return (
    <Stack m={5}>
      <Rating value={value} onChange={handleChange} size="medium" precision={0.5} icon={<FavoriteIcon color='error' />} emptyIcon=
        {<FavoriteBorderIcon color='error' />} />
      <Rating value={value} onChange={handleChange} highlightSelectedOnly size="medium" precision={0.5} icon={<FavoriteIcon color='error' />} emptyIcon=
        {<FavoriteBorderIcon color='error' />} />
      {/* <Rating value={value} readOnly onChange={handleChange} highlightSelectedOnly size="medium" precision={0.5} icon={<FavoriteIcon color='error' />} emptyIcon=
        {<FavoriteBorderIcon color='error' />} /> */}
    </Stack>
  )

}




export default MuiRating
