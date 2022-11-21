import './App.css';
import { Form } from './container/Form/Form';

const notes = [
  {
    id: 1,
    content: "Do the homework",
    label: "In progress"
  },
  {
    id: 2,
    content: "Clean the room",
    label: "To do"
  }
]

function App() {
  return (
    <>
      <Form notes={notes} />
    </>
  );
}

export default App;
