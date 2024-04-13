import React from 'react'
import { Link } from 'react-router-dom'

const Farmer = () => {
  return (
    <div>
        <h1>Customer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti saepe explicabo odio dignissimos impedit obcaecati ullam dolores cum officia accusamus, animi quis maxime, itaque sint tenetur voluptate maiores. Eius, dignissimos!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium amet nisi vitae quae distinctio fugiat ex unde vel assumenda nobis eligendi quos, iste officiis eum commodi similique sed excepturi ipsam?</p>
        <Link to="/customer/profile">Profile</Link>
        <Link to="/customer/transactions">Transactions</Link>
        <Link to="/customer/explore">Explore</Link>
        <Link to="/customer/home">Home</Link>
        <Link to="/customer/messages">Messages</Link>
        <Link to="/customer/search">Search</Link>
        <a href='https://angkor-backend.onrender.com/logout'>Logout</a>
    </div>
  )
}

export default Farmer