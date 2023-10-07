import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext)

    const HandleRegister = e =>{

        e.preventDefault()
        console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name =form.get("name")
    const photo =form.get("photo")
    const email =form.get("email")
    const password =form.get("password")
    console.log(name,photo,email,password);

    createUser(email,password,photo,name)
    .then((result) => {
      // Signed up 
      const user = result.user;
     console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
    }
    return (
        <div>
          
        <div className="mx-auto w-full ">
        <h2 className="text-center text-2xl">Please Register</h2>
        <div className="card-body mx-auto w-full md:w-2/4">
              <form onSubmit={HandleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder=" name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    required
                    placeholder="url"
                    className="input input-bordered"
                  />
                </div>
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
                <div className="form-control mb-4">
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
                 
                </div>
                <input type="checkbox"/> <span>Accept Term & Conditions</span>

                <div className="form-control mt-6">
                  <button className="btn  bg-blue-700">Register</button>
                </div>
              </form>
              <p>
                Already have account? please {" "}
                <Link to="/login" className="underline text-blue-700">
                  Login
                </Link>
              </p>
            </div>
        </div>
        </div>
    );
};

export default Register;