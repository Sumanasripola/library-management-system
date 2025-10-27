import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

function Home({ allBooks, onDelete }) {
  const [searchTerm, setSearchTerm] = useState('');

  const uniqueBookCount = allBooks.length;
  const totalCopies = allBooks.reduce((sum, book) => sum + book.quantity, 0);


  const filteredBooks = allBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <h2>My Collection</h2>

     
      <div className="library-stats">
        <div className="stat-card">
          <h3>Unique Titles</h3>
          <p>{uniqueBookCount}</p>
        </div>
        <div className="stat-card">
          <h3>Total Copies</h3>
          <p>{totalCopies}</p>
        </div>
      </div>

      <SearchBar onSearch={setSearchTerm} />
      <hr />
      <h3>Book List</h3>
      <BookList books={filteredBooks} onDelete={onDelete} />
    </div>
  );
}

export default Home;