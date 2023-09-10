"use client"

import UserContext from "@/Providers/UserProvider/UserContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const { user } = useContext(UserContext);

  const isAuthenticated = user;

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return children;
};

export default PrivateRoute;
