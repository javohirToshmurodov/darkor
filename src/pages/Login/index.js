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

   const handleSubmit = (e) => {
      e.preventDefault()

      try {
         instance.post("api/v1/auth/login", {
            username: `${user}`,
            password: `${password}`,
         }).then((res) => {
            console.log(res?.data);
            localStorage.setItem("accesstoken", `Bearer ${res?.data.body.accessToken}`)
            console.log(user, password);
            if (user && password) {
               navigate("/admin")
            } else {
               navigate("/login")
            }
         })

         if (user === "admin" && password === "admin") {
            setSuccess(true)
         } else if (user !== "admin" && password !== "admin") {
            setSuccess(false)
            alert("username or password is incorrect")
         } else {
            alert("username or password is incorrect")
         }

         setPassword("")
         setUser("")
      } catch (err) {
         console.log(err);
      }
   }

   return (

      <>
         {
            success ? (
               <>
                  <Outlet />
               </>
            ) : (
               <>
                  <div className="row justify-content-center py-5">
                     <div className="col-xl-5 col-lg-6 col-md-8 col-sm-8 col-12">
                        <div className="card">
                           <div className="card-header">Login</div>
                           <div className="card-body">
                              <form action="#" onSubmit={handleSubmit}>
                                 <input
                                    type="text"
                                    ref={usernameRef}
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required
                                    placeholder="username"
                                    className="mb-3 form-control"
                                 />
                                 <input
                                    type="text"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                    placeholder="password"
                                    className="mb-3 form-control"
                                 />
                                 <div className="text-end">
                                    <button className="btn btn-success">Submit</button>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </>
            )
         }

      </>
   )
}

export default Login