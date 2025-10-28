import React from "react";
import { useNavigate } from "react-router-dom";
import { dummyBooks } from "../dummyData";
import "./Home.css"; // optional CSS file

const Home = () => {
  const navigate = useNavigate();

  // Extract unique categories from the data
  const categories = [...new Set(dummyBooks.map((book) => book.category))];

  return (
    <div className="home-container">
      <h1 className="welcome-text">📚 Welcome to the Online Library</h1>
      <p className="subtitle">Explore books by category</p>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className="category-btn"
            onClick={() => navigate(`/books/${category}`)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
