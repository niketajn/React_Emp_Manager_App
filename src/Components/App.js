import './App.css';
import Header from './Header';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { v4 as uuid} from 'uuid';
import EditEmployee from './EditEmployee';
import EmployeeDetail from './EmployeeDetail';
import api from '../api/employees';
import ProtectedRoutes from './ProtectedRoutes';
import Login from './Login';
import { UserAuthContextProvider } from '../Context/UserAuthContext';

function App() {
  
  const unique_id = uuid();
  const [employees,setEmployees] = useState([]);
  const [searchText,setSearchText] = useState('');
  const [searchResult,setSearchResult] = useState([]);

  const retrieveEmployees = async() => {
    const response = await api.get("/employees");
    return response.data;
  }
  const addEmployeeHandler = async (employee) => {
    const bodyRequest = {
      ...employee,
      id:unique_id
    }
    const response = await api.post("/employees", bodyRequest)
      setEmployees([...employees,response.data]);
  }

  useEffect(()=>{
    const getAllEmployees = async() => {
      const allEmployees = await retrieveEmployees();
      if(allEmployees) setEmployees(allEmployees);
    }
    getAllEmployees();
  }, []);

  const deleteEmployeeHandler = async (id) => {
    await api.delete(`/employees/${id}`);
    let filterArray = employees.filter(employee=>{
      return id!==employee.id;
    })
    setEmployees(filterArray);
  }

  const updateEmployeeHandler = async (data) => {
    const response = await api.put(`/employees/${data.id}`, data);
    const{id,name,email} = response.data;
    let updatedEmpDetails = employees.map((employee) => {
      return (id===employee.id) ? {...response.data} : employee;
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
        <UserAuthContextProvider>
        <Header/>
        <Routes>
          <Route path="/add" 
          element={
            <ProtectedRoutes>
            <AddEmployee addEmployeeHandler={addEmployeeHandler}/>
            </ProtectedRoutes>
            }>
          </Route>
          
          <Route path="/list" 
          element={
            <ProtectedRoutes>
              <EmployeeList item={searchText} searchKeyword={searchKeywordHandler} employees={searchText.length<1 ? employees : searchResult} deleteEmployee={deleteEmployeeHandler}/>
            </ProtectedRoutes>
          }>
          </Route>
          
          <Route path="/"
          element={
            <Login/>
          }>
          </Route>

          <Route path="/edit/:id"
          element={
            <ProtectedRoutes>
            <EditEmployee 
              updateEmployeeHandler={updateEmployeeHandler}>
            </EditEmployee>
            </ProtectedRoutes>
          }>
          </Route>

          <Route path="/detail/:id"
          element={
            <ProtectedRoutes>
            <EmployeeDetail></EmployeeDetail>
            </ProtectedRoutes>
          }>
          </Route>
          
        </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
