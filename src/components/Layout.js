import '../css/Layout.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../components/Home';
import AllProducts from '../components/AllProducts';

const Layout = () => {
  return (
    <BrowserRouter>
      <div id="layout">
        <a href="#menu" id="menuLink" class="menu-link">
          <span></span>
        </a>

        <div id="menu">
          <div class="pure-menu">
            <a class="pure-menu-heading" href="/#">
              The Store
            </a>

            <ul class="pure-menu-list">
              <li class="pure-menu-item">
                <Link to="/" class="pure-menu-link">
                  Home
                </Link>
                <Link to="/products" class="pure-menu-link">
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
