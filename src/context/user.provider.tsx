import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"
import { IUser } from "../types"


const useContext = createContext<IUserProviderValues | undefined>(undefined);

interface IUserProviderValues {
    user : IUser | null,
    isLoading : boolean,
    setUser : (user : IUser | null) => void,
    setIsLoading : Dispatch<SetStateAction<boolean>>,
}


const userProvider = ({children} : {children : ReactNode}) => {
    const [user , setUser] = useState<IUser | null>(null);
    const [isLoading , setIsLoading] = useState(false);

    return (
        <useContext.Provider value={{user , setUser , isLoading , setIsLoading}}>
            {children}
        </useContext.Provider>
    )
}

export default userProvider;