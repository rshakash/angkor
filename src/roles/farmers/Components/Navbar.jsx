import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navside">
      <div id='heading'>
        <h1 className='font-extrabold text-4xl'>Angkor</h1>
        </div>
        <ul className='p-4' id='navholder'>          
            <li className='navig'><i class="fa-solid fa-magnifying-glass p-1"></i><a href="/farmer/search">Search</a></li>
            <li className='navig'><i class="fa-solid fa-house p-1"></i>    <a href="/farmer">Home</a></li>
            <li className='navig'><i class="fa-solid fa-cloud p-1"></i><a href="/farmer/weather">Weather</a></li>
            <li className='navig'><i class="fa-solid fa-wheat-awn p-1"></i><a href="/farmer/cropinfo">CropInfo</a></li>
            <li className='navig'><i class="fa-solid fa-user-tie p-1"></i><a href="/farmer/profile">Profile</a></li>
            <li className='navig logout'><i class="fa-solid fa-right-from-bracket p-1"></i><a href="/farmer/profile">Log Out</a></li>
          </ul>
    </nav>
  )
}

export default Navbar