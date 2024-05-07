import useLocalStorage from "../../custom-hooks/useLocalStorage";

const StorageComponent = () => {
    const addToLocalStorage = useLocalStorage()

    const addData = () => {
        const data = {name: "Name", age: 20}
        addToLocalStorage("data", data)
    }

    return (
        <div>
            <button onClick={addData}>add to LocalStorage</button>
        </div>
    );
};

export {StorageComponent};