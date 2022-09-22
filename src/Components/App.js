import './App.css';
import Header from './Header';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import { useState } from 'react';
function App() {

  const [employees,setEmployees] = useState([]);

  const addEmployeeHandler = (employee) => {
    setEmployees([...employees,employee]);
  }

  return (
    <div>
      <Header/>
      <AddEmployee addEmployeeHandler={addEmployeeHandler}/>

      <EmployeeList employees={employees}/>
    </div>
  );
}

export default App;
