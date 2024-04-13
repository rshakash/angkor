import React from 'react'
import { Link } from 'react-router-dom'

const Farmer = () => {
  return (
    <div>
        <h1>Farmer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti saepe explicabo odio dignissimos impedit obcaecati ullam dolores cum officia accusamus, animi quis maxime, itaque sint tenetur voluptate maiores. Eius, dignissimos!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium amet nisi vitae quae distinctio fugiat ex unde vel assumenda nobis eligendi quos, iste officiis eum commodi similique sed excepturi ipsam?</p>
        <Link to="/farmer/weather">Weather</Link>
        <Link to="/farmer/cropInfo">Crop Info</Link>
        <Link to="/farmer/messages">Messages</Link>
        <Link to="/farmer/search">Search</Link>
        <Link to="/farmer/profile">Profile</Link> 
        <Link to="/farmer/cropinfo">CropInfo</Link>
        <a href='https://angkor-backend.onrender.com/logout'>Logout</a>
    </div>
  )
}

export default Farmer