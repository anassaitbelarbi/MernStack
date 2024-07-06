import Form from "@components/forms/Form";
import {fieldsForm} from "./fieldsForm"

function CreateWorkout() {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Form fields={fieldsForm}  />
    </main>
  );
}

export default CreateWorkout;