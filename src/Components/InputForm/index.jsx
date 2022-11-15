import {Control , Controller} from 'react-hook-form'
import Input from "../Input";

const InputForm = ({ control, name }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value} }) => (
                <Input
                    onChange={onChange}
                    value={value}
                    
                />
            )}

        />
    )
}

export default InputForm;