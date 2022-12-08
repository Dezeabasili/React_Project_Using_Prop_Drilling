const SearchTasksList = ({ searchTask, setSearchTask }) => {

    return (
        <form className="searchTaskList">
            <input
                type="text"
                value={searchTask}
                onChange={(e) => setSearchTask(e.target.value)}
            />
        </form>
    )
}

export default SearchTasksList
