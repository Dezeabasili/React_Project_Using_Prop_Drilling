import { FaRegTrashAlt } from "react-icons/fa";

const TasksList = ({ tasksList, setTasksList, editButton, deleteTask, edited }) => {
    const checkedTask = (id) => {
        const newCheckedTask = tasksList.filter(task => task.id === id)
        const completedTask = { ...newCheckedTask[0], completed: !newCheckedTask[0].completed }
        const newTasksList = tasksList.map(task => task.id === id ? completedTask : task)
        setTasksList(newTasksList)
    }

    return (
        <main>
            <ul>
                {tasksList.map(task => (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.completed} onChange={() => checkedTask(task.id)} />
                        <label >{task.task}</label>
                        {!edited && <FaRegTrashAlt onClick={() => deleteTask(task.id)}></FaRegTrashAlt>}
                        <button onClick={() => editButton(task.id)}>Edit</button>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default TasksList
