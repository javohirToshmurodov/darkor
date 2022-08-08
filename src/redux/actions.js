import axios from "axios"

export const BASE_URL = "http://45.33.122.156:8080"



export const language = localStorage.getItem("language") || "uz";
export const accesstoken = localStorage.getItem("accesstoken")
export const instance = axios.create({
   baseURL: BASE_URL,
   headers: {
      Authorization: `${accesstoken}`,
      "Accept": "*/*",
      "Accept-Language": `${language}`,
   },
})