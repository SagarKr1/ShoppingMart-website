import React from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const navigate = useNavigate();
    const [value, setValue] = React.useState('');
    const handleChange = (event) => {
        console.log(event.target.value);
        setValue(event.target.value);

    };


    const HandleSearch = () => {
        console.log(value);
        setValue('');
        navigate(`/s?key=${value}`);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            HandleSearch();
        }
    }

    return (
        <div>
            <TextField
                sx={{ width: { lg: "160%", sm: "75vw", md: "50vw", xs: "90vw" } }}
                placeholder='search here ....'
                name='search'
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={value}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={HandleSearch}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            ></TextField>
        </div>
    )
}
