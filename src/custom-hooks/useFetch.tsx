import {useEffect, useState} from "react";

const useFetch = <T, >(url: string, endpoint: string, initialState: T) => {

    const [data, setData] = useState(initialState);

    useEffect(() => {

        fetch(url + endpoint)
            .then(value => value.json())
            .then(value => {
                setData(value)
            });
    }, []);

    return data;

}

export {useFetch}


