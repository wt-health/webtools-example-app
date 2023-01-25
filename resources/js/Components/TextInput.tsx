import React, {forwardRef} from 'react';

interface TextInputProps {
    type?: string;
    name: string;
    id: string;
    value?: string;
    autoComplete?: string;
    required?: boolean;
    handleChange?: any;
    className?: string;
    children?: React.ReactNode;
}

export default forwardRef(function TextInput(
    {type = 'text', name, id, value, className, autoComplete, required, handleChange}: TextInputProps,
) {

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                className={
                    `border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ` +
                    className
                }
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
});
