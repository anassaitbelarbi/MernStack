import { useQuery } from "@tanstack/react-query";
import { getWorkouts } from "api/workout/getWorkouts";
import keys from "@constants/keys"



export const useQueryWorkouts = () => {
    return useQuery({
        queryKey: [keys.WORKOUTS],
        queryFn: getWorkouts
    })
}