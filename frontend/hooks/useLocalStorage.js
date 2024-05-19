import { useState } from'react';

export function useLocalStorage(key, value) {
    const [v, setV] = useState(() => {
        const initalValue = localStorage.getItem(key)
        return initalValue ? JSON.parse(initalValue) : value
    })
    const setValueLS = value => {
        setV(value)
        localStorage.setItem(key, JSON.stringify(value))
    }
    return [v, setValueLS]
}