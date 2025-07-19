import React from 'react'

const TaskListNum = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl w-[25%] bg-amber-300 px-6 py-9'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[25%] bg-blue-500 px-6 py-9'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-2xl font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl w-[25%] bg-emerald-400 px-6 py-9'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-2xl font-medium'>Failed Task</h3>
        </div>
        <div className='rounded-xl w-[25%] bg-red-400 px-6 py-9'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-2xl font-medium'>Accepted Task</h3>
        </div>
    </div>
  )
}

export default TaskListNum