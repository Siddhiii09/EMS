import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext)

  return (
    <div id='AllTask' className='bg-[#1c1c1c] p-5 mt-5 rounded h-60 overflow-auto'>
        
        <div className='bg-red-400 py-3 px-6 flex justify-between mb-2'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Complete</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>

        <div className='h-[80%] overflow-auto'>
            {userData.employees.map(function(elem, index) {
            return <div key={index} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between'>
            <h2 className='text-lg font-medium w-1/5 text-white'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-500'>{elem.taskCounts.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCounts.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div>
        
        {/* <div className='bg-amber-300 py-3 px-6 flex justify-between mb-2'>
            <h2>Siddhi</h2>
            <h3>Make UI design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-blue-400 py-3 px-6 flex justify-between mb-2'>
            <h2>Siddhi</h2>
            <h3>Make UI design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-green-400 py-3 px-6 flex justify-between mb-2'>
            <h2>Siddhi</h2>
            <h3>Make UI design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-fuchsia-400 py-3 px-6 flex justify-between mb-2'>
            <h2>Siddhi</h2>
            <h3>Make UI design</h3>
            <h5>Status</h5>
        </div> */}
    </div>
  )
}

export default AllTask