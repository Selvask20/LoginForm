import './App.css';
import { Route, Routes } from 'react-router-dom'
import Form from './Form';
import Table from './Table';
import Update from './Update';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Form></Form>}></Route>
        <Route path='/table' element={<Table></Table>} ></Route>
        <Route path='/update' element={<Update></Update>}></Route>

      </Routes>
   
    </div>
  );
}

export default App;
