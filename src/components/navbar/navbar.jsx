import React, { Component } from 'react'
import { Menu } from 'antd'
import './Navbar.css';

const Navbar = ({ logo, menuItems }) => {
  return (
    <div className="top-bar">
      <span className='demo-logo'>Logo</span>
      <div className='navbar'>
        <Menu mode="horizontal" className='menu' >
          <Menu.Item className="logo">{logo}</Menu.Item>
          {menuItems.map((menuItem, index) => (
            <Menu.Item className="menu-item" key={index}>
              <div className="menu-item">{menuItem}</div>

            </Menu.Item>
          ))}
        </Menu>
      </div>

    </div>

  );
};

export default Navbar;


