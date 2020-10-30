import React from 'react';
import EmployeeList from "../Seed/randomEmployees.json"
import EmployeeTable from "../components/EmployeeTable"

export default function App() {
  return (
    <div className="App">
       
      <EmployeeTable
        allemployees={EmployeeList
          }
      />
    </div>
  );
}