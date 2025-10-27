import React, { useState } from 'react';

function BookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || quantity < 1) return;
    

    onAddBook({ title, author, quantity });
  
    setTitle('');
    setAuthor('');
    setQuantity(1);
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          placeholder="e.g., The Great Gatsby"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Author</label>
        <input
          type="text"
          placeholder="e.g., F. Scott Fitzgerald"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          min="1"
          placeholder="e.g., 5"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <button type="submit" className="btn-primary">Add Book</button>
    </form>
  );
}

export default BookForm;