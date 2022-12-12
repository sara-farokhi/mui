import { useState } from 'react'
import { Autocomplete, Stack, TextField } from "@mui/material"


const MuiAutoComplete = () => {
    type skill = {
        id: number,
        label: string
    }

    const skills = ['html', 'css', 'js', 'typescrpt', 'react'];
    const skillAsObj = skills.map((skill, i) => (
        { id: i, label: skill }
    ))
    const [value, setValue] = useState<null | string>(null)
    const [objValue, setObjValue] = useState<null | skill>(null)
    console.log(value)
    console.log(objValue)


    return (
        <>
            <Stack spacing={2} width="300px" m={3}>
                <Autocomplete
                    options={skills}
                    renderInput={(params) => <TextField {...params} />}
                    onChange={(e: any, newValue: string | null) => setValue(newValue)}
                    value={value}
                ></Autocomplete>
            </Stack>
            <Stack spacing={2} width="300px" m={3}>
                <Autocomplete
                    options={skillAsObj}
                    renderInput={(params) => <TextField {...params} />}
                    onChange={(e: any, newValue: null | skill) => setObjValue(newValue)}
                    value={objValue}
                ></Autocomplete>
            </Stack>
        </>
    )
}

export default MuiAutoComplete
