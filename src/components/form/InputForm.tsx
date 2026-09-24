import {type InputHTMLAttributes } from "react"

interface FormProps extends InputHTMLAttributes<HTMLInputElement>{
    value:string;
    name?:string;
    placeholder:string;
    label?: string;
    required?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputForm({value,name,placeholder, label,required, onChange}:FormProps){
    return(
        <div>
            {label && <label htmlFor={name}>
                {label}
            </label>}
            <input
            id={name}
            value={value}
            required={required}
            placeholder={placeholder}
            onChange={onChange}
            />
        </div>
    )
}

export default InputForm