import React from "react";
import useUsersStore from "../../StateManagment/UsersStore";
import './ColumnsPicker.css'

const ColumnsPicker = ({index}) => {
    const { selectColumn, removeColumn } = useUsersStore((state) => {
        return { selectColumn : state.selectColumns, removeColumn: state.removeColumn }
    })
    const checkBoxChanged = (event) => {
        event.currentTarget.checked ? selectColumn(event.currentTarget.id, index) : removeColumn(event.currentTarget.id, index);
    }

    return (
        <div className="checkbox-container">
            <input type="checkbox" className="column-picker" id="date"
                   onChange={(event) => checkBoxChanged(event)} />
            <label>Date</label>
            <input type="checkbox" className="column-picker" id="name"
                   onChange={(event) => checkBoxChanged(event)} />
            <label>Name</label>
            <input type="checkbox" className="column-picker" id="address"
                   onChange={(event) => checkBoxChanged(event)} />
            <label>Address</label>
        </div>
    )
}

export default ColumnsPicker;