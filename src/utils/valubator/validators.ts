export const requiredField = (value: any) => {
    if (value && !!value) return undefined
    return 'Field is required'
}

export const maxLengthCreator = (maxLength: number) => (value: any) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}
export const minLengthCreator = (minLength: number) => (value: any) => {
    if (value.length < minLength) return `Min length is ${minLength} symbols`
    return undefined
}


// minLength2