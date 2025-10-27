import React from 'react';

function BookList({ books, onDelete }) {
  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p className="no-books-message">No books found matching your search.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <div className="book-info">
                <strong>{book.title}</strong>
                <span>by {book.author}</span>
              </div>
              <div className="book-actions">
                
                <span className="quantity-badge">
                  Copies: {book.quantity}
                </span>
                <button className="delete-btn" onClick={() => onDelete(book.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;