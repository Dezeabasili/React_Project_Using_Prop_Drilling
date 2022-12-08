import { FaRegTrashAlt } from "react-icons/fa";

const TasksList = ({ tasksList, setTasksList, editButton, deleteTask, edited }) => {

    const checkedTask = (id) => {
        const newCheckedTask = tasksList.filter(task => task.id === id)
        const completedTask = { ...newCheckedTask[0], completed: !newCheckedTask[0].completed }
        const newTasksList = tasksList.map(task => task.id === id ? completedTask : task)
        const comp1 = newTasksList.filter(task => task.completed === true)
        const comp2 = newTasksList.filter(task => task.completed === false)
        if ((comp1.length) && !(comp2.length)) {
            comp1.sort((a, b) => a.id - b.id)
            setTasksList(comp1)
        }
        else if ((comp2.length) && !(comp1.length)) {
            comp2.sort((a, b) => a.id - b.id)
            setTasksList(comp2)
        }
        else {
            comp1.sort((a, b) => a.id - b.id)
            comp2.sort((a, b) => a.id - b.id)
            const comp3 = comp2.concat(comp1)
            setTasksList(comp3)
        }
    }

    return (
        <main>
            <ul>
                {tasksList.map(task => (
                    <li className="task" key={task.id}>
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
