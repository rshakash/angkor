import { Link } from "react-router-dom";

const HomePage = () => {

    return ( 
        <div>
            
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti saepe explicabo odio dignissimos impedit obcaecati ullam dolores cum officia accusamus, animi quis maxime, itaque sint tenetur voluptate maiores. Eius, dignissimos!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium amet nisi vitae quae distinctio fugiat ex unde vel assumenda nobis eligendi quos, iste officiis eum commodi similique sed excepturi ipsam?</p>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>        

          {/* <a href="http://localhost:3000/logout">Logout</a> */}
        </div>
    )
}

export default HomePage;