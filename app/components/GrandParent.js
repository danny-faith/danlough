import Parent from "./Parent"


const GrandParent = (props) => {
    return <Parent>{props.children}</Parent>
}

export default GrandParent
