import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';


function AddBook({ onAddBook }) {
 
  const navigate = useNavigate();

  const handleBookAdd = (book) => {
  
    onAddBook(book);
  
    navigate('/');
  };

  return (
    <div className="add-book-page">
      <h2>Add a New Book</h2>
      
      <BookForm onAddBook={handleBookAdd} />
    </div>
  );
}

export default AddBook;