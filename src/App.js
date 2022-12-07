import { useState, useRef, useEffect } from 'react'
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import Footer from "./components/Footer";
import AddNewTask from "./components/AddNewTask";
import SearchTasksList from './components/SearchTasksList';


function App() {
  const inputRef = useRef()

  const [tasksList, setTasksList] = useState(JSON.parse(localStorage.getItem("tasks_list")) || [])

  const [newTask, setNewTask] = useState('')
  const [searchTask, setSearchTask] = useState('')
  const [edited, setEdited] = useState(false)
  const [taskId, setTaskId] = useState(0)

  useEffect(() => {
    localStorage.setItem("tasks_list", JSON.stringify(tasksList))
  }, [tasksList])

  //Define what to display in the tasks list based on what is in the search box
  const tasksToDisplay = tasksList.filter(task => task.task.toLowerCase().includes(searchTask.toLowerCase()))

  let editButton = (id) => {
    const editedTask = tasksList.filter(task => task.id === id)

    inputRef.current.focus()
    setNewTask(editedTask[0].task)
    // console.log(newTask)
    // if (newTask) {
    setEdited(true)
    setTaskId(id)
    // }
    // setTasksList(tasksList.filter(task => task.id !== id))
  }

  const deleteTask = (id) => {
    const newList = tasksList.filter(task => task.id !== id)
    setTasksList(newList)
  }

  return (
    <div className="App">
      <Header />
      <AddNewTask newTask={newTask} setNewTask={setNewTask} tasksList={tasksList} setTasksList={setTasksList} edited={edited} setEdited={setEdited} taskId={taskId} setTaskId={setTaskId} inputRef={inputRef} />
      <SearchTasksList searchTask={searchTask} setSearchTask={setSearchTask} />
      <TasksList tasksList={tasksToDisplay} setTasksList={setTasksList} deleteTask={deleteTask} editButton={editButton} edited={edited} />
      <Footer />

    </div>
  );
}

export default App;
