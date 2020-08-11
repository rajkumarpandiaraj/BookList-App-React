import React from 'react'
import List from './List'

function Books(props) {
    // console.log(props.book);
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
                        {props.book.map((bk) => <List key={bk.isbn} title={bk.title} author = {bk.author} isbn ={bk.isbn} />)}
                    </tbody>
                </table>
        </div>
    )
}

export default Books
