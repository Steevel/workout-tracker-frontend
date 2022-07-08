import React, { useEffect } from 'react'
import { useWorkoutsContexts } from '../hooks/useWorkoutsContext'

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {

    console.log(process.env);

    const { workouts, dispatch } = useWorkoutsContexts()

    useEffect(() => {
        const fetchWorkout = async () => {
            const response = await fetch(process.env.REACT_APP_API_URI)
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_WORKOUTS', payload: json })
            }
        }

        fetchWorkout()
    }, [dispatch])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home