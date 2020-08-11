import React from 'react'
import './all.min.css'

function List(props) {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.author}</td>
            <td>{props.isbn}</td>
            <td><i className="fa fa-trash delete"></i></td>
        </tr>
    )
}

export default List
