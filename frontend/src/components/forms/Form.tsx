import { Suspense, lazy } from 'react';
// import { useForm } from "react-hook-form";
// import { FormData } from "types/forms";
// import FormField from "./FormField";
import global from '@constants/global';
import {IFieldsForm} from "@pages/workout/fieldsForm"
// import TextInput from "./TextInput"

const TextInput = lazy(() => import("./TextInput"));

type Props = {
    fields: IFieldsForm[]
}

function Form({fields} : Props) {
  return (
    <>
    <Suspense fallback={"..........."}>
    {fields && fields?.map(field => {
         {JSON.stringify(field.type)}
        if(field.type === global.TEXT) {
          return <TextInput {...field} />
        }
    })}
    </Suspense>
  
    </>
  );
}

export default Form;