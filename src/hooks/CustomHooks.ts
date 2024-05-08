// 1. useToggle - custom React hook that allows a component to toggle a value between true and false

import {useEffect, useRef, useState} from "react";

// const useToggle = (defaultValue: boolean) => {
//     const [value, setValue] = useState<boolean>(defaultValue);
//
//     function toggleValue(valueState: boolean) {
//         setValue(prevValue => !valueState);
//     }
//
//     return [value, toggleValue];
// };
//
// let [value,toggleValue] = useToggle(true);
//
// toggleValue(false);


// 2. usePrevious - hook that allows a component to keep track of the previous value of a variable
// const usePrevious = <T, >(value: T): T | undefined => {
//     const currentRef = useRef<T>(value);
//     const previousRef = useRef<T | undefined>();
//
//     if (currentRef.current !== value) {
//         previousRef.current = currentRef.current;
//     }
//     return previousRef.current;
// }
// //
// usePrevious<number>(100);

// 3. useStorage - hook that allows a component to store a value in the browser's LocalStorage


// const useStorage = (key, localStorageObject, defualtValue) => {
//
//     const [value, setValue] = useState(() => {
//         let jsonValue = localStorageObject.getItem(key);
//         if (jsonValue !== null) return JSON.parse(jsonValue);
//
//         if (typeof defualtValue === 'function') {
//             return defualtValue();
//         } else {
//             return defualtValue;
//         }
//
//     });
//
//     useEffect(() => {
//         if (value === undefined) return localStorageObject.removeItem(key);
//         localStorageObject.setItem(key, JSON.stringify(value));
//     }, [key, value, localStorageObject]);
//
//
//     return [value, setValue];
// }// and of custom hook
//
// useStorage('asd', 'def', window.localStorage);
