import { useState} from "react";

const useToggle = (initialValue = false) => {

    const [value,setValue] = useState<any>(initialValue)

    const toggle = () => {
        setValue(!value)
    }

    return [value,toggle]
}

export default useToggle;