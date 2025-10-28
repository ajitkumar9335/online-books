import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Online Library</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/books">Browse Books</Link>
        <Link to="/add-book">Add Book</Link>
      </div>
    </nav>
  );
}
