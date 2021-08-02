// action types
export const module = {
    INITIALIZE: 'module/INITIALIZE',
    SET_VALUE: 'module/SET_VALUE',
}

// action creators
export const moduleActions = {
    initialize: () => {
        return { type: module.INITIALIZE}
    },
    setValue: (params : boolean) => {
        return { type: module.SET_VALUE, payload : params}
    }
}