import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/fav">Favourites</NavLink>
    </nav>
  );
};

export default Navbar;
