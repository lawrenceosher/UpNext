import { Routes, Route, Navigate } from "react-router";
import UpNextHeader from "./layout/UpNextHeader";
import "../utils.css"
import UpNextNavigation from "./layout/Navigation";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";

export default function UpNext() {
  return (
    <div>
      <UpNextHeader />
      <UpNextNavigation />
      <div className="main-content-offset">
        <Routes>
          <Route path="/" element={<Navigate to="/UpNext/Home" />} />
          <Route path="/Account/Profile" element={<h1>UpNext Account</h1>} />
          <Route path="/Account/SignUp" element={<h1>UpNext SignUp</h1>} />
          <Route path="/Account/SignIn" element={<h1>UpNext SignIn</h1>} />
          <Route path="/Home" element={<h1>UpNext Main Dashboard</h1>} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Movies/:mid" element={<MovieDetails />} />
          <Route path="/TV" element={<h1>TV</h1>} />
          <Route path="/TV/:tid" element={<h1>TV Show Details Page</h1>} />
          <Route path="/Albums" element={<h1>Albums</h1>} />
          <Route path="/Albums/:aid" element={<h1>Album Details Page</h1>} />
          <Route path="/Books" element={<h1>Books</h1>} />
          <Route path="/Books/:bid" element={<h1>Book Details Page</h1>} />
          <Route path="/Podcasts" element={<h1>Podcasts</h1>} />
          <Route
            path="/Podcasts/:pid"
            element={<h1>Podcast Details Page</h1>}
          />
          <Route path="/Games" element={<h1>Video Games</h1>} />
          <Route
            path="/Games/:gid"
            element={<h1>Video Game Details Page</h1>}
          />
          <Route path="/Users" element={<h1>Users</h1>} />
          <Route path="/Settings" element={<h1>Settings</h1>} />
        </Routes>
      </div>
    </div>
  );
}
