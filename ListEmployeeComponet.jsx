import axios from 'axios'; // Import Axios
import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const ListEmployeeComponent = () => {
    // Define state to store employees data
    const [employees, setEmployees] = useState([]);
  
    // Use useEffect to fetch data when the component mounts
    useEffect(() => {
      // Define an async function to fetch employee data
      const fetchEmployees = async () => {
        try {
          // Make a GET request to fetch employee data from the server
          const response = await axios.get('http://localhost:8080/api/employees');
          // Set the fetched employee data in the state
          setEmployees(response.data);
        } catch (error) {
          // Handle any errors that occurred during the request
          console.error('Error fetching employees:', error);
        }
      };
  
      // Call the fetchEmployees function when the component mounts
      fetchEmployees();
    }, []); 
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Employee List</h2>
      <table className="table table-striped table-bordered">

        <thead className="thead-dark">
          <tr>
            <th scope="col">Employee Id</th>
            <th scope="col">Employee First Name</th>
            <th scope="col">Employee Last Name</th>
            <th scope="col">Employee's Email Id</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListEmployeeComponent;
