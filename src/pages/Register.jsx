import { Link } from "react-router-dom";

const Register = ({registerUser, errors, message}) => {
    return (
        <div>
        <h1>Register</h1>
        <Link to="/login">Already a user? Login</Link>
        {errors && errors.map(error => <p>{error.message}</p>)}
        <p>{message && message}</p>
        <form onSubmit={registerUser}>
            <div>
                Role:
                <select name="role" id="role" required>
                    <option value="customer">Customer</option>
                    <option value="farmer">Farmer</option>
                </select>
            </div>
            <div>
                <input type="text" id="name" name="name" placeholder="Name" required />
            </div>
            <div>
                <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div>
                <input type="text" id="username" name="username" placeholder="Username" required />
            </div>
            <div>
                <input type="password" id="password" name="password" placeholder="Password" required />
            </div>
            <div>
                <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirm Password" required />
            </div>
            <div>
                <input type="submit" value="Register" />
            </div>
        </form>
        </div>
    );
}

export default Register;