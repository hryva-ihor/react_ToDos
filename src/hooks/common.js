import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValue = '') => {
    console.log(key);
    const [value, setValue] = useState(localStorage.getItem(key) || defaultValue);
    useEffect(() => {
        console.log(key);
        console.log(value);
        localStorage.setItem(key, value);
    }, [key,value]);
    return [value, setValue]
}