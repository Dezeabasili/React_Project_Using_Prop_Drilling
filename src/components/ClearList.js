import React from 'react'

const ClearList = ({clearList}) => {
  return (
    <button className='clearList' onClick={clearList}>
      Clear List
    </button>
  )
}

export default ClearList
