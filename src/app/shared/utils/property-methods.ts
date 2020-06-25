function propertyIsValid(property: string): boolean {

    const propertyIsValid = 
        property !== null && property !== 'null' &&
        property !== undefined && property !== 'undefined' &&
        property !== '';

    return propertyIsValid;
}

export default propertyIsValid;