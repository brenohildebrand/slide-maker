const setTimer = (callback, time = 1000) => {
    const newID = setTimeout(callback, time);
    return newID;
}

const resetTimer = (ID, callback, time = 1000) => {
    clearTimeout(ID);
    let newID = setTimeout(callback, time);
    return newID;
}

const createAutosave = (callback, time) => {
    let timeoutID = setTimer(callback, time);
    return () => timeoutID = resetTimer(callback, time);
};

export { createAutosave };