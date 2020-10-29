import React from "react";
import { Employee } from "../components/displayEmployees"
import Employees from "../Seed/randomEmployees.json"

export default function Home() {

    return (
        <div >
            <h1>Employee Directory</h1>
            <table className="striped">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Id</th>
                        <th>Age</th>
                        <th>Phone #</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {Employees.map(employee => (

                        <displayEmployees {...employee} />
                    ))}

                </tbody>
            </table>
        </div>
    )

}