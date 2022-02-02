import React from 'react'
import './NoteContainer.css';
import Note from '../note/Note';
import Search from '../search/Search';


function NoteContainer(props) {

    const reverse = function(array){
        const notesArray = [];

        for (var i = array.length-1; i >= 0; i--){
            notesArray.push(array[i])
        } 
        return notesArray
    }

    const notesRevered = reverse(props.notes);

    console.log(notesRevered);


    return (
        <div className="note-container">
            <div className="header">

                <span>
                    <h1>Notes</h1>
                    {props.notes?.length > 0 ? '' : <div>No Notes Found</div>}
                </span>

         

                <Search className="searchGroup" textSearch={props.handleSearchText} />

            </div>
            <div className="note-container_notes">

                {props.notes?.length > 0 ? (
                   notesRevered.map((item, index) => <Note key={item.id} note={item} deleteNote={props.deleteNote} updateText={props.updateText} />)
                ) : ''
                }

            </div>
        </div>
    )
}

export default NoteContainer
