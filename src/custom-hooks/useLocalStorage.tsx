const useLocalStorage = () => {

    function addToLocalStorage(key: string, value: {}) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    return addToLocalStorage

}


export default useLocalStorage;