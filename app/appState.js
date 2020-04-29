import { observable } from "mobx"

const appState = observable({
    timer: 0,
    tasks: ['one', 'two', 'three']
})

appState.add = (task) => {
    appState.tasks.push(task)
}

appState.resetTimer = () => {
    appState.timer = 0
}

export default appState
