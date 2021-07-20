const localStorage = {

    getItem: (key) => {

        const dataAsString = windows.localStorage.getItem(key);
        const dataAsObject = JSON.parse(dataAsString);

        return dataAsObject;
        
    },
    setItem: (key, value) => {

        const dataAsString = JSON.stringify(value);
        window.localStorage.setItem(key, dataAsString);

    },

}

export default localStorage;