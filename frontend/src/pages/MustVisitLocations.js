import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const MustVisitLocations = () => {
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name, experience };
    axios.post('/api/posts', data)
      .then(response => console.log(response))
      .catch(error => console.error(error));
    setName('');
    setExperience('');
  };

  useEffect(() => {
    axios.get('/api/posts')
      .then(response => {
        console.log(response.data); // debug console log
        setPosts(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  console.log(posts); // debug console log

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        <br />
        <label htmlFor="experience">Experience:</label>
        <textarea id="experience" rows="5" cols="40" value={experience} onChange={(event) => setExperience(event.target.value)}></textarea>
        <br />
        <button type="submit">Post</button>
      </form>
      <br />
      <h2>Posts</h2>
{Array.isArray(posts) && posts.length > 0 ?
  posts.map(post => (
    <div key={post.id} style={{ backgroundColor: 'lightgray', padding: '10px', marginBottom: '10px' }}>
      <p>{post.name}</p>
      <p>{post.experience}</p>
    </div>
  )) :
  <p>Loading posts...</p>
}

    </>
  );
};

export default MustVisitLocations;
