import {useEffect, useState} from "react";

export default function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] { // T - тип значення, яке зберігається в localStorage
    const [storedValue, setStoredValue] = useState(() =>
        JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue))
    );

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue));
    }, [storedValue, key]);


    return [storedValue, setStoredValue];
}