import {NavLink, Outlet} from "react-router-dom";
import {useState} from "react";

function App() {
  
  const [showMenu, setShowMenu] = useState(false);
  
  const handleBurgerClick = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };
  
  return (
    <div className="container">
      <nav className="navbar is-dark px-4 py-2">
        <div className="navbar-brand">
            <NavLink to="/" className={({ isActive }) => 'navbar-item is-uppercase' + (isActive ? ' is-active' : '')}>
              react-todos-1
            </NavLink>
            <a href="/" className={showMenu ? 'navbar-burger is-active' : 'navbar-burger'} onClick={handleBurgerClick}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
        </div>
        <div className={showMenu ? 'navbar-menu is-active' : 'navbar-menu'} onClick={handleBurgerClick}>
          <div className="navbar-start">
            <NavLink to="/add" className={({ isActive }) => 'navbar-item is-uppercase' + (isActive ? ' is-active' : '')}>
              add new Todo
            </NavLink>
             </div>
        </div>
      </nav>
      <main className="content px-6 py-6">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
