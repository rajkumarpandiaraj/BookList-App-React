import React, { Component } from 'react'
import Books from './Books'

class Forminput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            book : {
                title : '',
                author : '',
                isbn : '',
            }, 
            bookArr : [],
        }
    }

    handleForTitleChange = (e) =>{
        this.setState({
            book:{
                ...this.state.book,
                title : e.target.value
            }
        })
    }

    handleForAuthorChange = (e) =>{
        this.setState({
            book:{
                ...this.state.book,
                author : e.target.value
            }
        })
    }

    handleForIsbnChange = (e) =>{
        this.setState({
            book:{
                ...this.state.book,
                isbn : e.target.value
            }
        })
    }
    
    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            bookArr : [...this.state.bookArr, this.state.book]
        }, this.clearInput)
    }

    clearInput = () =>{
        this.setState({
            book : {
                title : '',
                author : '',
                isbn : '',
            }
        })
    }

    handleDelete = (isbn)=> {
        const updatedBookArr = this.state.bookArr.filter(book => book.isbn !== isbn )
        this.setState({
            bookArr : updatedBookArr
        })
    }
    render() {
        return (
            <>
            <form action="" id="form" onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input type="text" name="title" placeholder='Thirukkural' value={this.state.book.title} onChange={this.handleForTitleChange} id="title"/>
                <label>Author</label>
                <input type="text" name="author" placeholder='Thiruvalluvar' value={this.state.book.author} onChange={this.handleForAuthorChange} id="author"/>
                <label>ISBN</label>
                <input type="text"  placeholder='5b36' name="isbn" value={this.state.book.isbn} onChange={this.handleForIsbnChange} id="isbn"/>
                <input type="submit" id="submit"/>
                
            </form>
            <Books book = {this.state.bookArr} handleDelete={this.handleDelete} />
            </>
        )
    }
}

export default Forminput
