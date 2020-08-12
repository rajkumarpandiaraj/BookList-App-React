import React from 'react'
import './all.min.css'

function List(props) {
    const {title, author, isbn, handleDelete} = props
    return (
        <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>{isbn}</td>
            <td><i onClick={handleDelete} className="fa fa-trash delete"></i></td>
        </tr>
    )
} 

export default List
