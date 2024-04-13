import { Link } from 'react-router-dom';

const Login = ({handleClick}) => {

    return(
        <div>
            <h1>Login</h1>
            <Link to="/register">New User? Register</Link>
            <form  onSubmit={handleClick}>
                <div>
                <input type="email" id="email" name="email" placeholder="Email" required />
                </div>
                <div>
                    <input type="password" id="password" name="password" placeholder="Password" required />
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    )
}

export default Login;