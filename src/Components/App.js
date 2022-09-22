import './App.css';
import Header from './Header';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { v4 as uuid} from 'uuid';

function App() {
  const LOCAL_STORAGE_KEY="employees";
  const unique_id = uuid();
  const [employees,setEmployees] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))??[]);

  const addEmployeeHandler = (employee) => {
    setEmployees([...employees,{...employee,id:unique_id}]);
  }

  useEffect(()=>{
    const getEmployees = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(getEmployees) setEmployees(getEmployees);
  },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(employees))
  },[employees]);

  const deleteEmployeeHandler = (id) => {
    let filterArray = employees.filter(employee=>{
      return id!==employee.id;
    })
    setEmployees(filterArray);
  }

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
            <EmployeeList employees={employees} deleteEmployee={deleteEmployeeHandler}/>
            }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
