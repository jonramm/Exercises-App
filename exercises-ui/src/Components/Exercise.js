import React from 'react';
import { RiDeleteBin2Line, RiEditLine } from 'react-icons/ri'

function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><RiEditLine onClick={() => onEdit(exercise)}/></td>
            <td><RiDeleteBin2Line onClick={() => onDelete(exercise._id)}/></td>
        </tr>
    );
}

export default Exercise;