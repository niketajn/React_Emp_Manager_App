import './App.css';
import Header from './Header';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { v4 as uuid} from 'uuid';
import EditEmployee from './EditEmployee';
import EmployeeDetail from './EmployeeDetail';

function App() {
  
  const LOCAL_STORAGE_KEY="employees";
  const unique_id = uuid();
  const [employees,setEmployees] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))??[]);
  const [searchText,setSearchText] = useState('');
  const [searchResult,setSearchResult] = useState([]);

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

  const updateEmployeeHandler = (data) => {
    const{id,name,email} = data;
    let updatedEmpDetails = employees.map((employee) => {
      return (id===employee.id) ? {...data} : employee;
    });
    setEmployees(updatedEmpDetails);
  }

  const searchKeywordHandler = (searchItem) => {
    setSearchText(searchItem);
    const result = employees.filter((employee)=>{
      return Object.values(employee)
      .join(" ")
      .toLowerCase()
      .includes(searchItem.toLowerCase())
    })
    setSearchResult(result);
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
            <EmployeeList item={searchText} searchKeyword={searchKeywordHandler} employees={searchText.length<1 ? employees : searchResult} deleteEmployee={deleteEmployeeHandler}/>
            }>
          </Route>

          <Route path="/edit/:id"
          element={
            <EditEmployee 
              updateEmployeeHandler={updateEmployeeHandler}>
            </EditEmployee>
          }>
          </Route>

          <Route path="/detail/:id"
          element={
            <EmployeeDetail></EmployeeDetail>
          }>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
