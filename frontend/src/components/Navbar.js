import React from 'react';


function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <button className="menu-button">Menu</button>
        <h1 className="logo">Ecommerce Website</h1>
        <div className="nav-icons">
          <button className="wishlist-button">
            <i className="fas fa-heart"></i>
          </button>
          <button className="cart-button">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">4</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
