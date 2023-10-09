import { Link } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import swal from "sweetalert";
const Login = () => {
  const {signIn,googleSignIn } = useContext(AuthContext)
  const HandleLogin = (e) => {
    
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email =form.get("email")
    const password =form.get("password")
    console.log(email,password);

    signIn(email,password)
    .then((result) => {
      // Signed up 
      const user = result.user;
      console.log(user);
      swal("Welcome", "Login successfully", "success");
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      swal("Failed", "Login Failed", "error");

    })
    }
    const handleGoogleSignIn= () =>{
        googleSignIn()
        .then((result) => {
          const user = result.user;
          console.log(user);
         
        }).catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        
        })
    }
  return (
    
      <div className="mx-auto w-full ">
      <h2 className="text-center text-2xl">Please Login</h2>
      <div className="card-body mx-auto  md:w-2/4">
              <form onSubmit={HandleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    required
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    name="password"
                    required
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-blue-700 text-white">Login</button>
                  <button onClick={handleGoogleSignIn} className="btn border-blue-600 mt-4"><span ><FaGoogle ></FaGoogle></span> Login with google</button>
                </div>
              </form>
              <p>
                New to this website? please{" "}
                <Link to="/register" className="underline text-blue-700">
                  Register
                </Link>
              </p>
            </div>
      </div>
  )
}

export default Login
