import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import axios from 'axios';





const Articles = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5050/articles')
        .then(res => setPosts(res.data))
        .catch(error => console.log(error));
    });
    return (
        <MainContainer>
             <Navbar/>
             BLog
            {posts.map((article, key) =>(
                <div className="container">
                    <h2>{article.title}</h2>
                    <p>{article.article}</p>
                    <span className="badge badge-secondary p-2">
                        {article.authorname}
                   </span>
                   <div className="row my-5"></div>
                   {/* <button type="submit" className="btn btn-primary">Edit</button>
                  
                    <button type="submit" className="btn btn-primary">Delete</button> */}
                    <hr/>
                </div>
            ))}
     
       </MainContainer>
    );
};
export default Articles;

//Main Container
const MainContainer = styled.div`
    font-size: 2.125rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.235;
    color: #00FFFF;
    letter-spacing: 0.00735em;
   

    


.container {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.235;
    color: white;
    letter-spacing: 0.00735em;

h2 {
    font-size: 1.25rem;
    color: #00FFFF;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.235;
    color: white;
    letter-spacing: 0.00735em;
}
p {
    font-size: .75rem;
    color: #00FFFF;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.235;
    color: white;
    letter-spacing: 0.00735em;

}
.btn-primary {
    font-size: 1rem;
    padding: 0.25em 1em;
    background-color: Transparent;
    // opacity: 0.0;
    border: 2px solid #00FFFF;
    color: #00FFFF;
    border-radius: 5px;
}




`;



