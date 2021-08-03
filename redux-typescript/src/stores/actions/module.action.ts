// action types
export const module = {
    INITIALIZE: 'module/INITIALIZE' as const,
    SET_APP_STATE: 'module/SET_APP_STATE' as const,
}

// action creators
export const moduleActions = {
    initialize: () => {
        return { type: module.INITIALIZE}
    },
    setAppState: (params : boolean) => {
        return { type: module.SET_APP_STATE, payload : params}
    }
}