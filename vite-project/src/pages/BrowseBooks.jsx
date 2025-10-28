import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import "./BrowseBooks.css";

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books.list);
  const [search, setSearch] = useState("");

  const filtered = books.filter((b) => {
    const matchesCategory = category ? b.category === category : true;
    const matchesSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="browse">
      <h2>{category ? `${category} Books` : "Browse All Books"}</h2>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="book-grid">
        {filtered.map((b) => (
          <div key={b.id} className="book-card">
            <h3>{b.title}</h3>
            <p>{b.author}</p>
            <Link to={`/book/${b.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
