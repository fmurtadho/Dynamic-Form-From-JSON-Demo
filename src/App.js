import DynamicForm from './components/DynamicForm/DynamicForm';
import { formData } from './data/FormData';
import {useEffect} from "react";

function App() {
  const handleSubmission = val => {
    console.log('Values : ', val)
  }

  useEffect(() => {
    console.log('JSON');
    console.log(formData);
    console.log('***');
  }, [])

  return (
    <div>
      <h2>Dynamic Form Demo</h2>
      <DynamicForm fields={formData} cbSubmit={handleSubmission} />
      <p>check console for submitted data</p>
    </div>
  )
}

export default App;
