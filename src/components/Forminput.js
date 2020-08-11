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

    titleValue = (e) =>{
        this.setState({
            book:{
                ...this.state.book,
                title : e.target.value
            }
        })
    }

    authorValue = (e) =>{
        this.setState({
            book:{
                ...this.state.book,
                author : e.target.value
            }
        })
    }

    isbnValue = (e) =>{
        this.setState({
            book:{
                ...this.state.book,
                isbn : e.target.value
            }
        })
    }
    
    submitBtn = (e) =>{
        e.preventDefault();
        this.setState({
            bookArr : [...this.state.bookArr, this.state.book]
        }, this.clearInput)
    }

    clearInput = () =>{
        // console.log(this.state);
        this.setState({
            book : {
                title : '',
                author : '',
                isbn : '',
            }
        })
    }
    render() {
        return (
            <>
            <form action="" id="form" onSubmit={this.submitBtn}>
                <label>Title</label>
                <input type="text" name="title" placeholder='Thirukkural' value={this.state.book.title} onChange={this.titleValue} id="title"/>
                <label>Author</label>
                <input type="text" name="author" placeholder='Thiruvalluvar' value={this.state.book.author} onChange={this.authorValue} id="author"/>
                <label>ISBN</label>
                <input type="text"  placeholder='5b36' name="isbn" value={this.state.book.isbn} onChange={this.isbnValue} id="isbn"/>
                <input type="submit" id="submit"/>
                
            </form>
            <Books book = {this.state.bookArr}/>
            </>
        )
    }
}

export default Forminput
