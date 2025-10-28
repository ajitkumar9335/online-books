import { Link } from "react-router-dom";
import "./BookCard.css";

/**
 * BookCard Component
 * Props:
 *  - book: { id, title, author, category, description, rating }
 *  - showDetailsLink: boolean (optional) → whether to show "View Details" link
 */
export default function BookCard({ book, showDetailsLink = true }) {
  return (
    <div className="book-card">
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">by {book.author}</p>
      <p className="book-category">Category: {book.category}</p>
      <p className="book-rating">⭐ {book.rating}</p>

      {showDetailsLink && (
        <Link to={`/book/${book.id}`} className="details-link">
          View Details
        </Link>
      )}
    </div>
  );
}
