import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context';
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

  const [state,setState] = useContext(UserContext)
  const handleLogout = ()=>{
    setState({user:{},token:""})
    localStorage.removeItem('auth')
  }
  return (
    <nav>
      <ul>
        {list_item.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
        <li>{state.token ? (<button onClick={handleLogout}>logout</button>):""}</li>
      </ul>
    </nav>
  );
}
