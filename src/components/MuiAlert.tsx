import { Alert, AlertTitle, Stack, Button } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check'


const MuiAlert = () => {
  return (<>
    <Stack spacing={2} m={5} >
      <Alert severity="info"><AlertTitle>info</AlertTitle>This is info  alert.</Alert>
      <Alert severity="success"><AlertTitle>success</AlertTitle>This is success alert.</Alert>
      <Alert severity="warning"><AlertTitle>warning</AlertTitle>This is warning alert.</Alert>
      <Alert severity="error"><AlertTitle>error</AlertTitle>This is error alert.</Alert>
    </Stack>
    <Stack spacing={2} m={5} >
      <Alert severity="info" variant="outlined" >This is info  alert.</Alert>
      <Alert severity="success" variant="outlined" icon={<CheckIcon />} onClose={() => alert("close is clicked")}>This is success alert.</Alert>
      <Alert severity="warning" variant="outlined" action={<Button onClick={() => alert("action is clicked")} variant="contained" color="warning" size="small">Action</Button>}>This is warning alert.</Alert>
      <Alert severity="error" variant="outlined">This is error alert.</Alert>
    </Stack>
    <Stack spacing={2} m={5} >
      <Alert severity="info" variant="filled">This is info  alert.</Alert>
      <Alert severity="success" variant="filled">This is success alert.</Alert>
      <Alert severity="warning" variant="filled">This is warning alert.</Alert>
      <Alert severity="error" variant="filled">This is error alert.</Alert>
    </Stack>
  </>

  )
}
export default MuiAlert
