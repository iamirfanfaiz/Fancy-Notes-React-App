import React from 'react'
import './NoteContainer.css';
import Note from '../note/Note';

function NoteContainer(props) {

    // const reverse = function(array){
    //     const notesArray = [];
    
    //     for (var i = array.length-1; i >= 0; i--){
    //         notesArray.push(array[i])
    //     } 
    //     return notesArray
    // }

    // const notesRevered = reverse(props.notes);


    return (
        <div className="note-container">
            <h1>Notes</h1>
            <div className="note-container_notes">
                {props.notes?.length > 0 ? (
                    props.notes.map((item, index) => <Note key={item.id} note={item} deleteNote={props.deleteNote} updateText={props.updateText} />)
                ) : <div>No Notes Found</div>
                }
            </div>
        </div>
    )
}

export default NoteContainer
