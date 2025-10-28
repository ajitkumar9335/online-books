import { useLocation, Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="notfound">
      <h2>404 - Page Not Found</h2>
      <p>Invalid URL: <strong>{location.pathname}</strong></p>
      <Link to="/">Go Home</Link>
    </div>
  );
}
