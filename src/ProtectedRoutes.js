import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "./pages/Login";
const useAuth = () => {
   const hasToken = localStorage.getItem("accesstoken")
   return hasToken
};
export default function ProtectedRoutes() {
   const isAuth = useAuth();
   return isAuth ? <Outlet /> : <Login />;
}