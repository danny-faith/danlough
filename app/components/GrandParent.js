import Parent from "./Parent"
import Context from '../Context'
import { useContext } from 'react'
import { observer } from "mobx-react"

const GrandParent = observer((props) => {
    const context = useContext(Context)
    const { tasks } = context
    return (
        <React.Fragment>
            <Parent>Parent</Parent>
            <ul>
                {tasks.map((task) => <li key={task}>{task}</li>)}
            </ul>
        </React.Fragment>
    )
})

// class GrandParent extends React.Component {
//     render() {
//         const { tasks } = this.context
//         return (
//             <ul>
//                 {tasks.map((task) => <li key={task}>{task}</li>)}
//             </ul>
//         )
//     }
// }
// GrandParent.contextType = Context

export default GrandParent
