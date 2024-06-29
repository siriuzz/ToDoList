import React from 'react'
import PropTypes from 'prop-types';

const TodoList = ({ items, onCheckboxChange }) => {
    console.log(items);
    return (
        <div className="px-96">
            <ul>
                {items.map((item, index) => (
                    <li key={index} className="text-xl">
                        <input
                            type="checkbox"
                            className="mx-4 "
                            checked={item.done}
                            onChange={() => onCheckboxChange(index)}
                        />
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    items: PropTypes.array.isRequired,
};

export default TodoList
