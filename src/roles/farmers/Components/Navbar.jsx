import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>Angkor</h1>
        <ul>
            <li><a href="/farmer">Home</a></li>
            <li><a href="/farmer/search">Search</a></li>
            <li><a href="/farmer/weather">Weather</a></li>
            <li><a href="/farmer/cropinfo">CropInfo</a></li>
            <li><a href="/farmer/profile">Profile</a></li>
        </ul>
    </nav>
  )
}

export default Navbar