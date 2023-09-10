"use client"
import { useContext, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { users } from '../../data/Users';
import UserContext from "@/Providers/UserProvider/UserContext";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const search = useSearchParams();
  console.log(search.get)
  const from = search.get("/beer") || "/";
  const { replace, refresh } = useRouter();
  const { user, setUser } = useContext(UserContext);

  

  const handleLogin = (e) => {
    e.preventDefault()
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setUser(user);
     
        toast.success("User signed in successfully");
     refresh();
        replace(from);
    } else {
     
      toast.error(error.message || "User not signed in");
    }
  };

  return (
    <div className="login pt-16  min-h-screen">
      <div className="bg-black opacity-70 flex items-center justify-center min-h-screen">
        <div className=" w-80 md:w-[350px] my-10  bg-white  text-black rounded-md">
          <div className="flex flex-col items-center justify-center">
            <h1 className=" w-full py-2  bg-yellow-400 text-center font-medium text-xl">
              Please Login
            </h1>
            <span className="text-center border-4 mt-3 border-black rounded-full p-2">
              <AiOutlineUser size={40} color="black"></AiOutlineUser>
            </span>
          </div>
          <form onSubmit={handleLogin}
            action=""
            className="flex p-8 items-center flex-col justify-center"
          >
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="py-2 px-4 w-full border rounded-full  border-black"
              type="text"
              placeholder="Enter your user name"
            />
            <input
             value={password}
             onChange={(e) => setPassword(e.target.value)}
              className="py-2 px-4 w-full border rounded-full  m-6 border-black"
              type="password"
              placeholder="Enter your password"
            />
            <br />
            <input
              type="submit"
              className="py-2 px-4 w-full border rounded-full border-yellow-400 bg-yellow-400 hover:bg-yellow-500 text-xl font-semibold text-black"
              value="Login"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
