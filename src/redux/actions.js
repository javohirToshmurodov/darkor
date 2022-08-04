import axios from "axios"

export const BASE_URL = "http://45.33.122.156:8080"



export const language = localStorage.getItem("language") || "uz";
export const accesstoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIlVTRVIiXSwiaXNzIjoiaHR0cDovLzE3Mi4xMDUuMTM2LjE1MTo4MDgwL2FwaS9sb2dpbiIsImV4cCI6MTY1OTkzODIwOH0.kfSWpAQP6ouPZjrAzxz0jTT8X_lZSNAVxtk2d9GT6Ck"
export const instance = axios.create({
   baseURL: BASE_URL,
   headers: {
      Authorization: `Bearer ${accesstoken}`,
      "Accept": "*/*",
      "Accept-Language": `${language}`,
   },
})