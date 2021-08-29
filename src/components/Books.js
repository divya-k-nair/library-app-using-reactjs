import { Button, TextField } from '@material-ui/core'
import React from 'react'

export default function Books() {
    return (
        <div>
            <br></br>
            <h1>LIBRARY APP</h1>
            <TextField
            variant="outlined"
            label="BOOK TITLE"
            />
            <br></br><br></br>
            <TextField
            variant="outlined"
            label="DESCRIPTION"
            />
            <br></br><br></br>
            <TextField
            variant="outlined"
            label="PUBLISHER NAME"
            />
            <br></br><br></br>
            <TextField
            variant="outlined"
            label="AUTHOR"
            />
            <br></br><br></br>
            <TextField
            variant="outlined"
            label="DISTRIBUTOR"
            />
            <br></br><br></br>
            <Button
            color="secondary"
            variant="contained"
            >SUBMIT</Button>

        </div>
    )
}


