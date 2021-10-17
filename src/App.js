import React, { useState, useEffect } from 'react'
import './App.css';
import NoteContainer from './components/note_container/NoteContainer';
import SideMenu from './components/sidemenu/SideMenu';

function App() {

  const [note, setNote] =  useState( []);
  
  const addNote = (color) =>{
    const tempNotes = [...note];
    
    const currentdate = new Date(); 

    let hrs = currentdate.getHours();
    let amPm = hrs > 12 ? "PM" : "AM"

    const monthName = [
     "Jan",
     "Feb",
     "Mar",
     "Apr",
     "May",
     "Jun",
     "Jul",
     "Aug",
     "Sep",
     "Oct",
     "Nov",
     "Dec"
    ]
    const month = monthName[currentdate.getMonth()];

    const datetime = "Created Date: " + currentdate.getDate() + "/"
                + month  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds() + ""
                + amPm;

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: datetime,
      color
    });

    setNote(tempNotes);

  } 

  const deleteNote = (id) => {
    const tempNotes = [...note];

    const index = tempNotes.findIndex((item) => item.id === id);

    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNote(tempNotes);

  }


  const updateText = (text, id) => {
    const tempNotes = [...note];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNote(tempNotes);
  }


  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNote(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(note)
		);
	}, [note]);

 
  return (
    <div className="App">
      <SideMenu addNote={addNote}/>
      <NoteContainer notes={note} deleteNote={deleteNote} updateText={updateText} />
    </div>
  );
}

export default App;
