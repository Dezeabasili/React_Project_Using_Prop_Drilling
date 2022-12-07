const SearchTasksList = ({ searchTask, setSearchTask }) => {

    return (
        <form>
            <input
                type="text"
                value={searchTask}
                onChange={(e) => setSearchTask(e.target.value)}
            />
        </form>
    )
}

export default SearchTasksList
