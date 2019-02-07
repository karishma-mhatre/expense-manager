import React from 'react';
import './addButton.scss';

const AddButton = () => {
    return (
        <label className="add-btn">
            <input type="checkbox" />
            <i className="fa fa-plus"></i>
        </label>
    );
}

export default AddButton;