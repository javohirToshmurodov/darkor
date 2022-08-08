import axios from "axios"

export const BASE_URL = "http://45.33.122.156:8080"



export const language = localStorage.getItem("language") || "uz";
export const accesstoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIlVTRVIiXSwiaXNzIjoiaHR0cDovLzQ1LjMzLjEyMi4xNTY6ODA4MC9hcGkvbG9naW4iLCJleHAiOjE2NjA4MTkwMTB9.h-r0TaJYH1DgCbg4YZILJCKP5U_5UZJfJF_afJvi-HU"
export const instance = axios.create({
   baseURL: BASE_URL,
   headers: {
      Authorization: `Bearer ${accesstoken}`,
      "Accept": "*/*",
      "Accept-Language": `${language}`,
   },
})