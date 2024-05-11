import {useEffect, useState} from "react";

type IProps = {
    id: number,
    name?:string
}
const useFetch = (url: string, endpoint: string) => {

    const [data, setData] = useState<IProps[]>([]);

    useEffect(() => {

        fetch(url + endpoint)
            .then(value => value.json())
            .then(value => {
                setData(value)
            });
    }, [url,endpoint]);

    return data;

}

export {useFetch}