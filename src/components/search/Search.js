import React from 'react'
import './Search.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';

function Search(props) {
    return (
        <div className="search-group">
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="SearchNotes" label="Search Notes" variant="standard" onChange={(event) => props.textSearch(event.target.value)} />
            </Box>

        </div>
    )
}

export default Search
