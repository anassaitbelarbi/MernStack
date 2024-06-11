import { useQueryWorkouts } from "@queries/workout/queryWorkout";

function Test() {
   
    const {data, isLoading} = useQueryWorkouts()

   if(isLoading) return <p>........</p>

    return (
        <>{data?.map((data) => <p key={data._id}>{data.title}</p>)}</>
    )
}

export default Test