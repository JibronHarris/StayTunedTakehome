import '../css/Layout.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AllProducts from './AllProducts';

const Layout = () => {
  return (
    <BrowserRouter>
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
        </a>

        <div id="menu">
          <div className="pure-menu">
            <a className="pure-menu-heading" href="/#">
              The Store
            </a>

            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                <Link to="/" className="pure-menu-link">
                  Home
                </Link>
                <Link to="/products" className="pure-menu-link">
                  All Products
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div id="main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="products" element={<AllProducts />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
