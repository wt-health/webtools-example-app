import React, {ChangeEventHandler} from 'react';
import classNames from "classnames";

interface TextInputProps {
    type?: string;
    name: string;
    id: string;
    value?: string;
    autoComplete?: string;
    required?: boolean;
    handleChange?: ChangeEventHandler | undefined;
    className?: string;
    children?: React.ReactNode;
}

const TextInput = (
    {type = 'text', name, id, value, className = '', autoComplete, required, handleChange}
        :
        TextInputProps
) => {

    const inputClass = classNames({
        'block font-medium text-sm text-gray-700 ': true,
        [`${className}`]: true
    });


    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                className={inputClass}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
};

export default TextInput;
