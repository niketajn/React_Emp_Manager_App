import './App.css';
import Header from './Header';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const LOCAL_STORAGE_KEY="employees";
  const [employees,setEmployees] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))??[]);

  const addEmployeeHandler = (employee) => {
    setEmployees([...employees,employee]);
  }

  useEffect(()=>{
    const getEmployees = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(getEmployees) setEmployees(getEmployees);
  },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(employees))
  },[employees]);

  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/add" 
          element={
            <AddEmployee addEmployeeHandler={addEmployeeHandler}/>
            }>
          </Route>

          <Route path="/" 
          element={
            <EmployeeList employees={employees}/>
            }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
