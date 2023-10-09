import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  const AllServices = (
    <>
      <li className="text-lg">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-fuchsia-400 active"
              : ""
          }
        >
          {" "}
          Home
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-fuchsia-400 active"
              : ""
          }
        >
          {" "}
          Services
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink
          to="/event"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-fuchsia-400 active"
              : ""
          }
        >
          {" "}
          Events
        </NavLink>
      </li>

      <li className="text-lg">
        <NavLink
          to="/trainers"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-fuchsia-400 active"
              : ""
          }
        >
          {" "}
          Trainers
        </NavLink>
      </li>

      <li className="text-lg">
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-fuchsia-400 active"
              : ""
          }
        >
          {" "}
          Blog
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink
          to="/aboutus"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-fuchsia-400 "
              : ""
          }
        >
          {" "}
          About Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar  bg-[#292B2B] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" bg-[#292B2B] menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              {AllServices}
            </ul>
          </div>
          <div className="flex gap[0px] md:gap-3 items-center">
            <img
              className="w-[100px] h-[60px] md:w-[150px] md:h-[85px] text-white"
              src="https://i.ibb.co/MChLttR/images-removebg-preview.png"
            ></img>
            <h2 className="text-lg md:text-2xl">
              L<span className="text-fuchsia-400 font-bold">A</span>SK
              <span className="text-fuchsia-400 font-bold">A</span> YOGA
            </h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 hover:text-white">{AllServices}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
             <div className="grid justify-center items-center mx-auto ">
             <div className="avatar online mx-auto">
  <div className="w-11 rounded-full">
    <img src={user?.photo} />
  </div>
</div>
             <p>{user?.email}</p>
             </div>
              
              <button onClick={handleLogOut} className="btn rounded-full w-24 text-white  bg-[#292B2B] border-fuchsia-400">
                Sign Out
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn rounded-full w-24 text-white  bg-[#292B2B] border-fuchsia-400"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
