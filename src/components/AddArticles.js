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

    axios
        .post('/articles/add', articles)
        .then(res => {
            console.log(res.data)
            alert("Article Posted")
        })
        .catch(err => {
            console.log(err);
            alert("Article Posted Failed")
    });

 };




    return (
<AddArticleContainer>
    <Navbar/>
    <div className="container">
        <div><h1>ADD NEW ARTICLE</h1></div>
        <form className="formContainer" onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="form-group">
             <label htmlFor="authorname">Author Name</label>
                 <input 
                    type="text" 
                    onChange={e => setAuthorName(e.target.value)}
                    className="form-control" 
                    
                  />
            </div>
            <div className="form-group">
             <label htmlFor="title">Title</label>
                 <input 
                    type="text" 
                    onChange={e => setTitle(e.target.value)}
                    className="form-control" 
                    
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

.container {
    display: flex;
    color: #00FFFF;
    flex-direction: column;
    align-items: center;
    margin: 3rem;
}

h1 {
    font-size: 2.125rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.235;
    color: #00FFFF;
    letter-spacing: 0.00735em;
}

.formContainer {
    width: 25%;
}

.form-group {
    display: flex; 
    flex-direction: column;
    font-size: 1.6rem;
    margin: 20px 0;
    
}
input {
    height: 40px;
    font-size: 1rem;
   
}

textArea {
    height: 500px;

}

label {
    margin-bottom: 5px;
}
.btn-primary {
    font-size: 2em;
    padding: 0.25em 1em;
    background-color: Transparent;
    // opacity: 0.0;
    border: 2px solid #00FFFF;
    color: #00FFFF;
    border-radius: 5px;
    
    
}
`
;