import { useMutation } from "@tanstack/react-query"
import { registerUser } from "../services/AuthServices"
import { FieldValues } from "react-hook-form"

export const useUserRegistration = () => {
    return useMutation<any , Error , FieldValues>({
        mutationKey : ["USER_REGISTRATION"],
        mutationFn : async(userData) => await registerUser(userData),
        onSuccess: () => {
          console.log("Successfully")
    
        },
        onError: () => {
    
        },
        
      })
}