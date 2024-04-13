import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navside">
      <div id='heading'>
        <h1 className='font-extrabold text-4xl'>Angkor</h1>
        </div>
        <ul className='p-4' id='navholder'>          
            <li className='navig'><i class="fa-solid fa-magnifying-glass p-1"></i><Link to="/farmer/search">Search</Link></li>
            <li className='navig'><i class="fa-solid fa-house p-1"></i>    <Link to="/farmer">Home</Link></li>
            <li className='navig'><i class="fa-solid fa-cloud p-1"></i><Link to="/farmer/weather">Weather</Link></li>
            <li className='navig'><i class="fa-solid fa-wheat-awn p-1"></i><Link to="/farmer/cropinfo">CropInfo</Link></li>
            <li className='navig'><i class="fa-solid fa-user-tie p-1"></i><Link to="/farmer/profile">Profile</Link></li>
            <li className='navig logout'><i class="fa-solid fa-right-from-bracket p-1"></i><a href='https://angkor-backend.onrender.com/logout'>Logout</a></li>
          </ul>
    </nav>
  )
}

export default Navbar