import React from 'react'
import './Note.css';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

let timer = 500, timeout;

function note(props) {

    const debounce = (func) => {
        clearTimeout(timeout);
        timeout = setTimeout(func, timer);
    };

    const updateText = (text, id) => {
        debounce(() => props.updateText(text, id));
    };

    return (
        <div className="note" style={{ backgroundColor: props.note.color }}>

          



            <textarea defaultValue={props.note.text}
                onChange={(event) => updateText(event.target.value, props.note.id)}
                className="note_text"></textarea>
           
            <div className="controls">
            <span className="date">
                {props.note.time}
                </span>

           <IconButton  
            aria-label="delete note" 
            component="span"
            onClick={() => props.deleteNote(props.note.id)}>
                <DeleteOutlineIcon />
            </IconButton>
           </div>
        </div>
    )
}

export default note
