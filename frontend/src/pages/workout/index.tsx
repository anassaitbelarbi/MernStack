import { useQueryWorkouts } from "@queries/workout/queryWorkout";

// UI Components
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

// Custom Components
import WorkoutPreview from "./WorkoutPreview";
import CreateWorkout from "./CreateWorkout";

function Workout() {
   
    const {data, isLoading} = useQueryWorkouts()

   if(isLoading) return <p>........</p>

    return (
        <>
        <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 240,
                            }}
                        >
                           {data?.map((data) => <WorkoutPreview key={data._id} {...data} />)}
                        </Paper>
                    </Grid>
                    {/* Recent Deposits */}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 240,
                            }}
                        >
                            <CreateWorkout />
                        </Paper>
                    </Grid>
                    {/* Recent Orders */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            {/* <Orders /> */}
                        </Paper>
                    </Grid>
                </Grid>
        </>
    )
}

export default Workout