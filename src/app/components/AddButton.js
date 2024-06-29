'use client';
import React from 'react'

const AddButton = ({ action }) => {
    return (
        <div>
            <button onClick={action} className="p-2 bg-blue-500 rounded-md">
                Add Task
            </button>
        </div>
    )
}

export default AddButton
