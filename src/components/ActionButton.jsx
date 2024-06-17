import React, { useContext } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { IoDuplicate } from "react-icons/io5";
import JobContext from '../context/JobContext';

const ActionButton = () => {
  const { handleDuplicateJob, handleDeleteJob, selectedJobId } = useContext(JobContext)
  return (
    <div className='flex'>
      <button className='button bg-[#e93736] px-3 py-1 rounded font-semibold text-white me-4 flex items-center gap-2' onClick={() => { handleDeleteJob(selectedJobId)}}>
        <span>
          <FaTrashAlt/>
        </span>
        <span>
          Delete
        </span>
      </button>
      <button className='button bg-[#ffdd00] px-3 py-1 rounded font-semibold text-white flex items-center gap-2' onClick={() => { handleDuplicateJob(selectedJobId) }}>
        <span>
          <IoDuplicate/>
        </span>
        <span>
          Duplicate
        </span>
      </button>
    </div>
  )
}

export default ActionButton
