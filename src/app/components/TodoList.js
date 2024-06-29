import React from 'react'
import PropTypes from 'prop-types';

const TodoList = ({ items, onCheckboxChange, onDeleteItem }) => {
    return (
      <div className="px-96">
        <ul>
          {items.map((item, index) => (
            <li key={index} className="text-xl flex items-center">
              <input
                type="checkbox"
                className="mx-4"
                checked={item.done}
                onChange={() => onCheckboxChange(index)}
              />
              {item.text}
              <button onClick={() => onDeleteItem(index)} className="ml-4 p-2 bg-red-500 rounded-md">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};
  
  export default TodoList;
  
