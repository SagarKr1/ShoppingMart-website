import React from 'react';
import { TextField } from '@mui/material';

export default function SearchBar() {
    return (
        <div>
            <TextField sx={{width:{lg:"160%",sm:"75vw" , md:"50vw",xs:"90vw"}}}></TextField>
        </div>
    )
}
