import axios from "axios"

export const BASE_URL = "http://172.105.136.151:8080"




export const accesstoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIlVTRVIiXSwiaXNzIjoiaHR0cDovLzE3Mi4xMDUuMTM2LjE1MTo4MDgwL2FwaS9sb2dpbiIsImV4cCI6MTY1OTg5MjA5MX0.JrDijBKLWxPll1ngqVUGqt9Fl3dKLs6bV1JDn1Lcilc"
export const instance = axios.create({
   headers: {
      Authorization: `Bearer ${accesstoken}`,
   },
   baseURL: BASE_URL,
   "Accept": "*/*",
   "Accept-Language": "uz"
})