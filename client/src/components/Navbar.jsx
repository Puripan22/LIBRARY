import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const list_item = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Category',
      path: '/category',
    },
    {
      name: 'History',
      path: '/history',
    },
    {
      name: 'Bookmark',
      path: '/bookmark',
    },
  ];

  return (
    <nav>
      <ul>
        {list_item.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
