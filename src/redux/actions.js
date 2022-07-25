import axios from "axios"

export const BASE_URL = "http://172.105.136.151:8080/"




export const accesstoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIlVTRVIiXSwiaXNzIjoiaHR0cDovLzE3Mi4xMDUuMTM2LjE1MTo4MDgwL2FwaS9sb2dpbiIsImV4cCI6MTY1OTY1NjE3M30.Vg5qkEyTJlhqT6UEyeE9_sAViXzIizqr6e7Uzu-Yrlo"
export const instance = axios.create({
   Authorization: accesstoken,
   baseURL: BASE_URL,
   "Accept": "*/*",
   "Accept-Language": "uz"
})