const retrieveLocalStorageData = <T, >(key: string) => {

    const itemLocalStorage = localStorage.getItem(key) || '';
    if (!itemLocalStorage) {
        return {} as T
    }
    const parseItem = JSON.parse(itemLocalStorage);
    return parseItem as T

}

export {retrieveLocalStorageData}