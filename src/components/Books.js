import React from 'react'
import List from './List'

function Books(props) {
    const {book, handleDelete} = props
    return (
        <div id="table">
            <table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Author</td>
                            <td>ISBN</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody id= "table-body">
                        {book.map((bk) => <List key={bk.isbn} title={bk.title} author = {bk.author} isbn ={bk.isbn} handleDelete={()=> handleDelete(bk.isbn)} />)}
                    </tbody>
                </table>
        </div>
    )
}

export default Books
