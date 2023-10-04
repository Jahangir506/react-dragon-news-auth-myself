import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)

        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password);

        createUser(email, password)
        .then(result =>{
            const registerUser = result.user;
            console.log(registerUser);
        })
        .catch(error => {
            console.error(error);
        })

    }


  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <h2 className="text-3xl text-center">Please Register</h2>
        <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name='password'
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center">Already have an account? <Link to='/login' className="text-blue-500 font-semibold underline">Login</Link></p>
      </div>
    </div>
    );
};

export default Register;