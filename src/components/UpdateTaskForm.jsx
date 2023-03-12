import React from 'react'

const UpdateTaskForm = ({updateData,changeTask,updateTask,cancelUpdate}) => {
  return (
        <div className='row mb-20'>
        <div className='col'>
        <input  value={updateData && updateData.title}
        onChange={(e)=>changeTask(e)}
        className='form-control form-control-lg'/>
        </div>
        <div className='col-auto'>
        <button onClick={updateTask} className='btn btn-lg btn-success mr-20'>Update</button>
        <button  onClick={cancelUpdate} className='btn btn-lg btn-warning '>cancel</button>
        </div>
    </div>
  )
}

export default UpdateTaskForm
