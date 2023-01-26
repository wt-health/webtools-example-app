import React from "react";
import classNames from "classnames";

interface InputLabelProps {
    forInput?: string;
    value?: string;
    className?: string;
    children?: React.ReactNode;
}

const InputLabel = ({forInput, value, className = '', children}: InputLabelProps): JSX.Element => {

    const inputClass = classNames({
        'block font-medium text-sm text-gray-700 ': true,
        [`${className}`]: true
    });

    return (
        <label htmlFor={forInput} className={inputClass}>
            {value ? value : children}
        </label>
    );
}

export default InputLabel;
