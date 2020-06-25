const objectIsEmpty = (object: Object): boolean => {
    return Object.keys(object).length === 0;
}

const objectSize = (object: Object): number => {
    return Object.keys(object).length;
}

export {
    objectIsEmpty,
    objectSize
}
