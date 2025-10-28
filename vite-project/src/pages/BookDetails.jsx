import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import "./BookDetails.css";

export default function BookDetails() {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.list.find((b) => b.id === parseInt(id))
  );

  if (!book) return <p>Book not found.</p>;

  return (
    <div className="details">
      <h2>{book.title}</h2>
      <h4>By {book.author}</h4>
      <p>{book.description}</p>
      <p>⭐ {book.rating}</p>
      <Link to="/books">Back to Browse</Link>
    </div>
  );
}
