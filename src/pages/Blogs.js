import React, { useState, useEffect } from 'react';
import './Blogs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: '', body: '', image: '' });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch blogs from RapidAPI
    const fetchBlogs = async () => {
      const url = 'https://blogsapi.p.rapidapi.com/?ordering=-date_published';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'dc04cdc8f3msha41e30ba171925dp14f55fjsnd94740f22e15',
          'X-RapidAPI-Host': 'blogsapi.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setBlogs(data.results);
        console.log(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, []);

  const [expandedBlogs, setExpandedBlogs] = useState([]);

  const handleReadMore = (blogId) => {
    setExpandedBlogs([...expandedBlogs, blogId]);
  };

  const handleAddBlog = () => {
    // Create a new blog object with a unique ID
    const newBlogWithId = {
      ...newBlog,
      id: Date.now(),
    };

    // Add the new blog at the beginning of the blogs array
    setBlogs([newBlogWithId, ...blogs]);

    // Reset the newBlog state
    setNewBlog({ title: '', body: '', image: '' });

    // Close the modal
    setShowModal(false);
  };

  return (
    <div className="container">
      <h2 className="mt-5">Blogs</h2>
      
      {/* Add Blog Button */}
      <div className='add-blog'>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Add Blog
        </Button>

        {/* Add Blog Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Add Your Blog</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="add-blog-form">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  placeholder="Enter title"
                  value={newBlog.title}
                  onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                  className="form-control w-100"
                />
              </div>

              <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea
                  id="body"
                  placeholder="Enter blog content"
                  value={newBlog.body}
                  onChange={(e) => setNewBlog({ ...newBlog, body: e.target.value })}
                  className="form-control w-100"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="image">Image URL</label>
                <input
                  type="text"
                  id="image"
                  placeholder="Enter image URL"
                  value={newBlog.image}
                  onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
                  className="form-control w-100"
                />
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAddBlog}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="blogs-container mt-4">
       {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog.id} className="blog-item card mb-4">
            <h3 className="blog-title card-header">{blog.title}</h3>
            <img src={blog.image} alt={blog.title} className="blog-image card-img-top" />
            <div className="card-body">
              <p className="blog-content card-text">
                {expandedBlogs.includes(blog.id)
                  ? blog.body
                  : blog.body.slice(0, Math.floor(blog.body.length * 0.2))}
              </p>
              {!expandedBlogs.includes(blog.id) && (
                <button
                  className="read-more-button btn btn-primary"
                  onClick={() => handleReadMore(blog.id)}
                >
                  Read More
                </button>
              )}
            </div>
          </div>
        ))
       ) : (
        <p>No Blogs Found. Api Calls Limit reached</p>
       )}
        
      </div>

      
      
    </div>
  );
};

export default Blogs;
