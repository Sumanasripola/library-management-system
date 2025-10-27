import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AddBook from './pages/AddBook';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', quantity: 5 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', quantity: 3 },
    { id: 3, title: '1984', author: 'George Orwell', quantity: 7 },
    { id: 4, title: 'Dune', author: 'Frank Herbert', quantity: 4 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', quantity: 2 },
    { id: 6, title: 'Pride and Prejudice', author: 'Jane Austen', quantity: 5 },
    { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien', quantity: 6 },
    { id: 8, title: 'Brave New World', author: 'Aldous Huxley', quantity: 3 },
    { id: 9, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', quantity: 2 },
    { id: 10, title: 'Fahrenheit 451', author: 'Ray Bradbury', quantity: 4 },
    { id: 11, title: 'Moby-Dick', author: 'Herman Melville', quantity: 1 },
  ]);

  const addBook = (book) => {
    
    const newBook = { 
      ...book, 
      id: Date.now(),
      quantity: parseInt(book.quantity, 10) || 1 
    };
    setBooks([...books, newBook]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="App">
    
      <Navbar />
      <main className="container">
        <Routes>
  
          <Route 
            path="/" 
            element={<Home allBooks={books} onDelete={deleteBook} />} 
          />
        
          <Route 
            path="/add" 
            element={<AddBook onAddBook={addBook} />} 
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;