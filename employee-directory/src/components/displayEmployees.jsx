import React from "react";

export const Employees = (props) => {
    console.log(props)
    const { picture, first, last, id, company, age, email, phone } = props
    return (


        <tr>
            <td><img src={picture} className="card-img-top" alt="..." /></td>
            <td>{`${first} ${last}`}</td>
            <td>{company}</td>
            <td>{id}</td>
            <td>{age}</td>
            <td>{phone}</td>
            <td>{email}</td>
        </tr>


    )
}