import {useRef} from "react";

const usePrevious = (value: any) => {
    const ref = useRef()
    const currentRef = useRef(value)

    if (value !== currentRef.current) {
        ref.current = currentRef.current
        currentRef.current = value;
    }

    return ref.current

}

export default usePrevious;

