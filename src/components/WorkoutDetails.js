import React from 'react'
import { useWorkoutsContexts } from '../hooks/useWorkoutsContext'

// date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


const WorkoutDetails = ({ workout }) => {

    const { dispatch } = useWorkoutsContexts()

    const handleClick = async () => {
        const response = await fetch(process.env.REACT_APP_API_URI + workout._id, {
            method: 'DELETE'
        })

        const json = await response.json()
        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg):&nbsp;</strong>{workout.load}</p>
            <p><strong>Load (kg):&nbsp;</strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined background" onClick={handleClick}>delete</span>
        </div>
    )
}

export default WorkoutDetails