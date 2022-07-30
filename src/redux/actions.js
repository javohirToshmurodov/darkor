import axios from "axios"

export const BASE_URL = "http://172.105.136.151:8080"



const language = localStorage.getItem("language")
export const accesstoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIlVTRVIiXSwiaXNzIjoiaHR0cDovLzE3Mi4xMDUuMTM2LjE1MTo4MDgwL2FwaS9sb2dpbiIsImV4cCI6MTY1OTkzODIwOH0.kfSWpAQP6ouPZjrAzxz0jTT8X_lZSNAVxtk2d9GT6Ck"
export const instance = axios.create({
   headers: {
      Authorization: `Bearer ${accesstoken}`,
   },
   baseURL: BASE_URL,
   "Accept": "*/*",
   "Accept-Language": `${language}`
})