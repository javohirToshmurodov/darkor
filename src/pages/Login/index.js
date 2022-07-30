import React from 'react'
import { useRef } from "react";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { instance, accesstoken } from '../../redux/actions';
const Login = () => {

   const usernameRef = useRef();
   const [user, setUser] = useState("");
   const [password, setPassword] = useState("");
   const [success, setSuccess] = useState(false);
   const [loader, setLoader] = useState(false)


   const navigate = useNavigate()
   return (
      <div>Login</div>
   )
}

export default Login