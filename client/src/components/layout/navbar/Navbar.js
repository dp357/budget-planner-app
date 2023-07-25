import { NavLink } from "react-router-dom";

const links = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/login",
    text: "Login",
  },
  {
    path: "/signup",
    text: "Signup",
  },
  {
    path: "/app",
    text: "App",
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.path}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
