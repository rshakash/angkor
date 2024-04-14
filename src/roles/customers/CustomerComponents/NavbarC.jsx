import './NavbarC.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navside">
      <div id='heading'>
        <h1 className='font-extrabold text-4xl'>Angkor</h1>
        </div>
        <ul className='p-4' id='navholder'>          
        <li className='navig'><i className="fa-solid fa-house p-1"></i><Link to="/customer/home">Home</Link></li>
        <li className='navig'><i className="fa-solid fa-magnifying-glass p-1"></i><Link to="/customer/search">Search</Link></li>
        <li className='navig'><i className="fa-brands fa-wpexplorer p-1"></i><Link to="/customer/explore">Explore</Link></li>
        <li className='navig'><i className="fa-solid fa-money-bill-transfer p-1"></i><Link to="/customer/transactions">Transactions</Link></li>             
        <li className='navig'><i className="fa-regular fa-message p-1"></i><Link to="/customer/messages">Messages</Link></li>
        <li className='navig'><i className="fa-solid fa-user-tie p-1"></i><Link to="/customer/profile">Profile</Link></li>
        <li className='logout'><i className="fa-solid fa-right-from-bracket p-1"></i><a href='https://angkor-backend.onrender.com/logout'>Logout</a></li>
          </ul>
    </nav>
  )
}

export default Navbar