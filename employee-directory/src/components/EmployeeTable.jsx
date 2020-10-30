import React from "react";

const useSortableData = (employees, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedEmployees = React.useMemo(() => {
    let sortableEmployees = [...employees];
    if (sortConfig !== null) {
      sortableEmployees.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableEmployees;
  }, [employees, sortConfig]);

  const requestSort = (key) => {
    let direction = 'descending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'descending'
    ) {
      direction = 'ascending';
    }
    setSortConfig({ key, direction });
  };

  return { employees: sortedEmployees, requestSort, sortConfig };
};

const EmployeeTable = (props) => {
  const { employees, requestSort, sortConfig } = useSortableData(props.allemployees);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table className="highlight responsive-table">
      
      <thead>
        <tr>
            <th>Image</th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('first')}
              className={getClassNamesFor('first')}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('company')}
              className={getClassNamesFor('company')}
            >
              Company
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('age')}
              className={getClassNamesFor('age')}
            >
              Age
            </button>
          </th>
          <th>Phone #</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td><img src={employee.picture} className="card-img-top" alt="..." /></td>
            <td>{`${employee.first} ${employee.last}`}</td>
            <td>{employee.company}</td>
            <td>{employee.age}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
