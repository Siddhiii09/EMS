import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[50%] w-full overflow-x-auto flex items-center justify-start py-5 px-2 mt-10 gap-5'>
      {data.tasks.map((elem, index) => {

        if(elem.active){
          return <AcceptTask  key={index} data={elem}/>
        }
        if(elem.completed){
          return <CompleteTask key={index} data={elem} />
        }
        if(elem.failed){
          return <FailedTask key={index} data={elem} />
        }
        if(elem.new){
          return <NewTask key={index} data={elem} />
        }
        

      }
      
    
    )}
    </div>
  )
}

export default TaskList 