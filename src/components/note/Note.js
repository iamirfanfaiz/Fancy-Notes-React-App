import React from 'react'
import './Note.css';

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
            <p>{props.note.time}</p>
            <button className="delete-btn" onClick={() => props.deleteNote(props.note.id)}>Delete</button>
        </div>
    )
}

export default note
