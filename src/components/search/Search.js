import React from 'react'
import './Search.css';
import TextField from '@mui/material/TextField';

function Search(props) {
    return (
        <div className="search-group">
            <TextField className="search-text" id="standard-basic" label="Search Notes" variant="standard" 
            onChange={(event) => props.textSearch(event.target.value)} />
        </div>
    )
}

export default Search
