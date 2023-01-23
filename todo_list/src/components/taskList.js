import Task from "./task"

const TaskList = (props) => {
    const {tasks} = props;

    return(
        <ul>
            {tasks.map((t) => <Task description={t}/>)}
        </ul>
    )
}
export default TaskList;