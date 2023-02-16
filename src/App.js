import { useState } from 'react';
import { GlobalStyle } from './globalStyles';
import { Header } from './container/Header/Header';
import { Body } from './container/Body/Body';

// todo: trasladar las exampleNotes
const exampleNotes = [
  {
    id: 1,
    title: "Do the homework",
    label: "inProgress",
    description: "Do the homework for my JavaScript review class.",
    emotionalLabel: "focus1"          
  },
  {
    id: 2,
    title: "Clean the room",
    label: "done",
    description: "Clean up the room and put all the notes in order.",
    emotionalLabel: "focus3"
  }
]

const optionsLabel =[
  {
      label: "To Do",
      value: "toDo",
      id: 1
  }, {
      label: "In Progress",
      value: "inProgress",
      id: 2
  }, {
      label: "Done",
      value: "done",
      id: 3
  }, {
      label: "Hold",
      value: "hold",
      id: 4
  }, {
      label: "Dropped",
      value: "dropped",
      id: 5
  }
]

// todo: the emotional options
    // enfocado, feliz/contento, triste, confundido, agobiado/anxioso, confiado, 
    // focus, happy, afraid, confident, confused, 
const emotionalOptions =[
  {
      label: "focus1",
      value: "focus1",
      id: 1
  }, {
      label: "focus2",
      value: "focus2",
      id: 2
  }, {
      label: "focus3",
      value: "focus3",
      id: 3
  }, {
      label: "focus4",
      value: "focus4",
      id: 4
  }, {
      label: "focus5",
      value: "focus5",
      id: 5
  }
]


function App() {

  return (
    <>
      <GlobalStyle />

      <Header />

      <Body exampleNotes={exampleNotes} optionsLabel={optionsLabel} emotionalOptions={emotionalOptions} />
      
    </>
  );
}

export default App;
