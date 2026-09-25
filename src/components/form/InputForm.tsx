import { type InputHTMLAttributes, type ReactNode, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { FiLock } from "react-icons/fi";
import styles from "./InputForm.module.css";

interface FormProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    name?: string;
    placeholder: string;
    label?: string;
    required?: boolean;
    icon?: ReactNode;
    error?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function getDefaultIcon(type: string): ReactNode {
    if (type === "email") return <MdOutlineEmail />;
    if (type === "password") return <FiLock />;
    return null;
}

function InputForm({
    value,
    name,
    placeholder,
    label,
    required,
    icon,
    error,
    type = "text",
    onChange,
    ...rest
}: FormProps) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const resolvedType = isPassword ? (showPassword ? "text" : "password") : type;
    const resolvedIcon = icon ?? getDefaultIcon(type);

    return (
        <div className={styles.group}>
            {label && (
                <label htmlFor={name} className={styles.label}>
                    {label}
                </label>
            )}

            <div className={styles.inputWrapper}>
                {resolvedIcon && <span className={styles.icon}>{resolvedIcon}</span>}

                <input
                    id={name}
                    name={name}
                    value={value}
                    required={required}
                    placeholder={placeholder}
                    type={resolvedType}
                    onChange={onChange}
                    className={`${styles.input} ${resolvedIcon ? styles.hasIcon : ""} ${
                        isPassword ? styles.hasToggle : ""
                    }`}
                    {...rest}
                />

                {isPassword && (
                    <button
                        type="button"
                        className={styles.toggleButton}
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                    >
                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </button>
                )}
            </div>

            {error && <span className={styles.errorText}>{error}</span>}
        </div>
    );
}

export default InputForm;