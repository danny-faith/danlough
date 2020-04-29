import { observer } from "mobx-react"
import Context from '../Context'
import { useContext } from 'react'

const Parent = observer((props) => {
    const context = useContext(Context)
    const { tasks } = context
    const addTodo = (todo) => {
        console.log('hello');
        context.add(`seven_${Math.floor(Math.random() * 10)}`)
    }
    return (
        <div>
            <p>{props.children}</p>
            <ul>
                {tasks.map((task) => <li key={task}>{task}</li>)}
            </ul>
            <button onClick={addTodo}>Add todo</button>
        </div>
    )
})

export default Parent
