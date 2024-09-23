"use server"

import { AxiosInstance } from "@/src/lib/AxiosInstance";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async(userData : FieldValues) => {
    try {
        const {data} = await AxiosInstance.post("/auth/register" , userData)
        if(data.success){
            cookies().set("accessToken" , data?.data?.accessToken)
            cookies().set("refreshToken" , data?.data?.refreshToken)
        }
        return data;
    } catch (error) {
        console.log(error);
        
    }
}
export const loginUser = async(userData : FieldValues) => {
    try {
        const {data} = await AxiosInstance.post("/auth/login" , userData)
        if(data.success){
            cookies().set("accessToken" , data?.data?.accessToken)
            cookies().set("refreshToken" , data?.data?.refreshToken)
        }
        return data;
    } catch (error) {
        console.log(error);
        
    }
}