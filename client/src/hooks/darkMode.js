import {useEffect} from "react";
import {useLocalStorage} from "./useLocalStorage";

function useDarkMode(){
    const [otherVal, setOtherVal] = useLocalStorage("key");

    useEffect(()=>{
        if(otherVal === true){
            document.body.classList.add("dark-mode");
        }else{
            document.body.classList.remove("dark-mode");
        }

        // toggle when state changes
    },[otherVal])
    return [otherVal, setOtherVal];
}
export default useDarkMode;