import React, { useState } from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import axios from 'axios';


const Articles = () => {

    const [title, setTitle] = useState('');
    const [article, setArticle] = useState('');
    const [authorname, setAuthorName] = useState('');

    const changeOnClick = e => {
        e.preventDefault();

        const articles = {
            title,
            article,
            authorname
        }
   

    setTitle('');
    setArticle('');
    setAuthorName('');

    // axios
    //     .post('/articles/add', articles)
    //     .then(res => console.log(res.data))
    //     .catch(err => {
    //         console.log(err);
    // });


    axios.get('/')
    .then(res => console.log(res.data))
    .catch(err => {
        console.log(err);
});
  

    };


    return (
<AddArticleContainer>
    <Navbar/>
    <div className="container">
        <h1>Add New Article</h1>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="form-group">
             <label htmlFor="authorname">Author Name</label>
                 <input 
                    type="text" 
                    onChange={e => setAuthorName(e.target.value)}
                    className="form-control" 
                    placeholder="Author Name"
                  />
            </div>
            <div className="form-group">
             <label htmlFor="title">Title</label>
                 <input 
                    type="text" 
                    onChange={e => setTitle(e.target.value)}
                    className="form-control" 
                    placeholder="Title"
                 />

            </div>
            <div className="form-group">
             <label htmlFor="article">Article</label>
             <textarea 
                onChange={e => setArticle(e.target.value)}
                className="form-control" 
                rows="3">
            </textarea>
            </div>

            <button type="submit" className="btn btn-primary">Post Article</button>
        </form>
    </div>
 </AddArticleContainer>
        
    );
};

export default Articles;

const AddArticleContainer = styled.div`
`
;