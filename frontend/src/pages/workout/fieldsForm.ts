

type ValidFieldNames =
  | "email"
  | "githubUrl"
  | "yearsOfExperience"
  | "password"
  | "confirmPassword";

export interface IFieldsForm {
    type: string,
    name: ValidFieldNames,
    placeholder: string,
    // rules?: Record<string, string | boolean>
}

export const fieldsForm : IFieldsForm[] = [
    {
        type: "text",
        name:"email",
        placeholder: "email",
        // rules: {required: true, message: "ce champ est obligatoire"},
    }
]