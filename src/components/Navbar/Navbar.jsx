"use client";
import UserContext from "@/Providers/UserProvider/UserContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import toast from "react-hot-toast";
import img from "../../../public/home-logo.png";
import img1 from "../../../public/user.png";
import NavLink from "../NavLink/NavLink";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  const handleLogOut = () => {
    setUser(null);
    toast.success("User signed out successfully");
  };

  const navData = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/beer",
      title: "Beer",
    },
    {
      path: "/#about",
      title: "About",
    },
    {
      path: "/#pricing",
      title: "Pricing",
    },
    {
      path: "/#contact",
      title: "Contact",
    },
  ];

  return (
    <div>
      <div className="navbar bg-black z-[999] fixed text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className=" lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              {navData.map(({ path, title }) => (
                <li key={path} className="mx-auto">
                  <NavLink
                    className=" font-medium  border-yellow-500 pb-1 uppercase font-serif px-2 hover:border-b-2"
                    href={path}
                    activeClassName="text-yellow-500"
                    exact={path === "/"}
                  >
                    {title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link className="ml-8" href="/">
            {" "}
            <Image src={img} height={45} width={60} alt="Logo"></Image>{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex items-center justify-between menu-horizontal px-1">
            {navData.map(({ path, title }) => (
              <li key={path} className="mx-auto">
                <NavLink
                  className=" font-medium  border-yellow-500 pb-1 uppercase font-serif px-2 hover:border-b-2 mr-6"
                  href={path}
                  activeClassName="text-yellow-500"
                  exact={path === "/"}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center">
              <Image
                title={user?.name}
                src={img1}
                width={45}
                height={45}
                alt=""
              ></Image>
              <button
                onClick={handleLogOut}
                className="border border-yellow-500 rounded-lg py-2 px-4 mx-6 hover:bg-yellow-500 transition-all duration-500"
              >
                logout
              </button>
            </div>
          ) : (
            <Link
              className="border border-yellow-500 rounded-lg py-2 px-4 mr-6 hover:bg-yellow-500 transition-all duration-500"
              href="/"
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
