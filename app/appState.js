import { observable } from "mobx"

const appState = observable({
    timer: 0
})

appState.resetTimer = () => {
    appState.timer = 0
}

export default appState
