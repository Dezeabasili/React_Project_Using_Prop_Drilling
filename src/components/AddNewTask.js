import { FaPlus } from "react-icons/fa";

const AddNewTask = ({ tasksList, setTasksList, edited, setEdited, taskId, setTaskId, inputRef, newTask, setNewTask }) => {
    const calculate_id = () => {
        if (tasksList.length)
            //get the id of the last task in the list and add 1 to it
            return tasksList[tasksList.length - 1].id + 1
        else
            return 1
    }

    const addTask = (e) => {
        e.preventDefault()
        if (!newTask) {
            setEdited(false)
            setTaskId(0)
            return
        }

        if (edited) {
            const newItem2 = {
                "id": taskId,
                "task": newTask,
                "completed": false
            }
            const newTaskList2 = tasksList.map(task => task.id === taskId ? newItem2 : task)
            setTasksList(newTaskList2)
            setEdited(false)
            setTaskId(0)
        } else {
            const newItem = {
                "id": calculate_id(),
                "task": newTask,
                "completed": false
            }
            const newTaskList = [...tasksList, newItem]
            setTasksList(newTaskList)
        }

        setNewTask('')
    }

    return (
        <form onSubmit={addTask}>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                ref={inputRef}
            />
            <FaPlus onClick={addTask}></FaPlus>
        </form>
    )
}

export default AddNewTask
