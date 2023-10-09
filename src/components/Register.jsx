
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import swal from "sweetalert";
import { updateProfile } from "firebase/auth";

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

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    const isPasswordValid = passwordRegex.test(password);
    if (!isPasswordValid) {
      console.log("Invalid password. Please check the requirements.");
      return;
    }
    createUser(email,password,photo,name)
    
    .then((result) => {
      const createdUser = result.user;
      profileUpdate(name, photo, createdUser);
      Navigate("/");
      // Signed up 
      const user = result.user;
     console.log(user);
     swal("Welcome", "Registration successfully", "success");

    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      swal("Failed", " Please fill out all field ", "error");
    });
    }
    const profileUpdate = (name, photo, createdUser) => {
      updateProfile(createdUser, {
        displayName: name,
        photoURL: photo,
      })
        .then((result) => {
          const createdUser = result.user;
          console.log(createdUser);
        })
        .catch((error) => {
          console.log(error);
        });
    };
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