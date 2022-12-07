import { FaPlus } from "react-icons/fa";
let max_id = 0;

const AddNewTask = ({ tasksList, setTasksList, edited, setEdited, taskId, setTaskId, inputRef, newTask, setNewTask }) => {


    const calculate_id = () => {
        if (!tasksList.length) {
            max_id = 1;
            return 1
        } else {
            max_id = max_id + 1;
            return max_id;
        }
    }

    // const calculate_id2 = () => {
    //     if (tasksList.length)
    //         //get the id of the last task in the list and add 1 to it
    //         return tasksList[tasksList.length - 1].id + 1
    //     else
    //         return 1
    // }

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

            const comp1 = newTaskList2.filter(task => task.completed === true)
            const comp2 = newTaskList2.filter(task => task.completed === false)
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

            // setTasksList(newTaskList2)
            setEdited(false)
            setTaskId(0)
        } else {
            const newItem = {
                "id": calculate_id(),
                "task": newTask,
                "completed": false
            }
            const newTaskList = [...tasksList, newItem]

            const comp1 = newTaskList.filter(task => task.completed === true)
            const comp2 = newTaskList.filter(task => task.completed === false)
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

            // setTasksList(newTaskList)
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
