const TaskList = ({list, setList}) => {

    const deleteTask = (index) =>{
        list.splice(index, 1);
        setList([...list]);
    }

    const markAsDone = (index) =>{
        list[index].done = !list[index].done;
        setList([...list]);
    }
    return (
    <>
        {
            list.map((task, index)=>(
                <div className={task.done? 'done task' : 'task'}>
                    <div className="task-description fs-3 me-3">{task.description}</div>
                    <input type="checkbox" className="form-check-input me-auto" onChange={()=>markAsDone(index)}/>
                    <button className='btn btn-dark' onClick={()=> deleteTask(index)}>Delete</button>
                </div>   
            ))
        }
    </>
    )
}

export default TaskList;