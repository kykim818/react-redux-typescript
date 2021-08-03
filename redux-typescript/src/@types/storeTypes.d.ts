type ModuleState = {
    appState : boolean;
}

type moduleAction = 
| ReturnType<typeof setAppState>;