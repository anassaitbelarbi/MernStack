// import TextField from '@mui/material/TextField';
import { FormFieldProps } from 'types/forms';

const TextInput: React.FC<FormFieldProps> = (props) => {
    return (
        <input
          {...props}
        />
    )
}

export default TextInput