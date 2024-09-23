import envConfig from "@/src/config/envConfig";
import  Axios  from "axios";

export const AxiosInstance = Axios.create({
    baseURL: envConfig.baseApi, 
    
  });