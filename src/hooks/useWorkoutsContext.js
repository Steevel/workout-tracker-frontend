import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContexts = () => {
    const context = useContext(WorkoutsContext)

    if (!context) {
        throw Error("WorkoutsContext must be used inside an WorkoutsContextProvider")
    }

    return context
}