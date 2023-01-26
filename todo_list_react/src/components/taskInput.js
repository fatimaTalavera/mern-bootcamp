import {useState} from 'react'

const TaskInput = ({list, setList}) => {
    const [description, setDescription] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        setList([...list, {description, done: false}]);
    }

  return (
    <div className='card p-3 my-5'>
        <form className="form" onSubmit={onSubmit} >
            <div className="mb-3">
                <input type="text" onChange={(evento) =>setDescription(evento.target.value)}  className="form-control" placeholder='Add a new task'/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
export default TaskInput