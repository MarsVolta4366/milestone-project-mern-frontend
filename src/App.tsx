import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import BlogNavBar from './components/BlogNavBar';
import EditPost from './components/EditPost';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import NewPost from './components/NewPost';
import ShowPost from './components/ShowPost';

function App() {

  let [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/posts`)
      const resData = await response.json()
      setData(resData)
    }
    fetchData()
  }, [])

  const deletePost = async (postId: string): Promise<void> => {
    await fetch(`http://localhost:3000/posts/${postId}`, {
      method: "DELETE",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    window.location.href = "/"
  }

  const deleteComment = async (commentId: string): Promise<void> => {
    await fetch(`http://localhost:3000/comments/${commentId}`, {
      method: "DELETE",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    window.location.reload()
  }

  return (
    <div className="App">
      <Router>
        <BlogNavBar />
        <Routes>
          <Route path="/" element={
            <Gallery data={data as Iterable<unknown>} />
          } />
          {/* NEW POST */}
          <Route path="/newPost" element={
            <NewPost />
          } />
          {/* EDIT POST */}
          <Route path="/editPost/:postId" element={
            <EditPost />
          } />
          {/* POST SHOW PAGE */}
          <Route path="/postShow/:postId" element={
            <ShowPost deletePost={deletePost} deleteComment={deleteComment} />
          } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;