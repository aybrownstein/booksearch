import React, { Component } from 'react';

class Filter extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"",
            author:"",
            isbn:"",
            Key:"AIzaSyCSYb2mw5WARugoqYvGe00IuLoA3Apb3GE"
        };
    }

    titleChanged(title){
        this.setState({
            title
        });
    }

    authorChanged(author){
        this.setState({
            author
        });
    }

    isbnChanged(isbn){
        this.setState({
            isbn
        });
    }

handleSubmite(e){
    e.preventDefault();
    const {title, author, isbn} = this.state;
    const booksearch = {title, author, isbn};
    const url = "https://www.googleapis.com/books/v1/"
    const options = {
        method: 'POST',
        body: JSON.stringify(booksearch),
        headers:{
            'content-type':'application/json'
        }
    };
    fetch(url,options)
    .then(res => {
        if(!res.ok){
throw new Error("something went wrong");
        } return res.json()
    })
    .then(data => {
        this.setState({
            title:"",
            author:"",
            isbn:"",
            Key:"AIzaSyCSYb2mw5WARugoqYvGe00IuLoA3Apb3GE" 
        });
        this.props.handleAdd(booksearch);
    })
    .catch(err=> {
        this.setState({
            error:err.message
        });
    });
}

    render() {
        return(
<div className="filter">
    <h2>Choose Your Book</h2>
    <form className="filter_form">
        <label htmlFor="title">Title</label>
        <input type="text" 
               name="title"
               id="title"
               placeholder="title"
               value={this.state.title}
               onChange={e => this.titleChanged(e.target.value)}/>
               <label htmlFor="author">Author</label>
               <input type="text"
               name="author"
               id="author"
               placeholder="author"
               value={this.state.author}
               onChange={e => this.authorChanged(e.target.value)}/>
               <label htmlFor="isbn">ISBN</label>
               <input type="number"
               name="isbn"
               id="isbn"
               placeholder="1234"
               value={this.state.isbn}
               onChange={e => this.isbnChanged(e.target.value)} />
               <div className="submit_button">
                   <button type="submit">Search</button>
               </div>

    </form>
</div>
        )
    }
}
export default Filter