//in this project i'll take adifferent approch of contextApi
 import React from "react";
import {createContext,useContext} from "react"
export  const  themeContext=createContext({ 
    themeMode:'light',
    darkTheme:()=>{},
    lightTheme:()=>{},

})

export const Themeprovider=themeContext.Provider

//the below usetheme is use  to make the coe simple by reducing it's no. of import statement

export default function useTheme(){
    return useContext(themeContext )  
}