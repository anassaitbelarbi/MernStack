import httpService from "@services/http.service"
import { IWorkout } from "types/models/Workout"
import apis  from "@constants/apis"


export const getWorkouts = async () => {
   // const http = new HttpService()
   const response = httpService.get<IWorkout[]>(apis.WORKOUTS)
   return response
}

