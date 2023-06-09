import React from 'react'
import {faCircleCheck,faPen,faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const ToDoTask = ({toDo,markDone,setUpdateData,deleteTask}) => {
  return (
          
    <>
        {/*Didplay Todo List*/}
        {toDo && toDo
          .sort((a,b) => a.id > b.id ? 1: -1)
          .map((task,index) => {
              return(
                <React.Fragment key={task.id}>
    
                  <div className='col taskBg'>
                    <div className={task.status?'done':''}>
                      <span className='taskNumber'>{index+1}</span>
                      <span className='taskText'>{task.title}</span>
                    </div>
                    <div className='iconsWrap'>
                      <span title='Completed' onClick={()=>markDone(task.id)}>
                        <FontAwesomeIcon icon={faCircleCheck}/>
                      </span>
    
                      {
                        task.status?null:
                        <span title='edit' onClick={() =>setUpdateData({
                          id:task.id,
                          title:task.title,
                          status:task.status
                        })}>
                          <FontAwesomeIcon icon={faPen}/>
                        </span>
                      }
    
                      <span title='delete' onClick={() => deleteTask(task.id)}>
                        <FontAwesomeIcon icon={faTrashCan}/>
                      </span>
                    </div>
                  </div>
                  
                </React.Fragment>
              )
            })
          }
    </>
  )
}

export default ToDoTask
