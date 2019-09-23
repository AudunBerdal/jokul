import React from "react";
import { SupportLabel } from "@fremtind/jkl-typography-react";

interface Props {
    label: string;
    items: string[];
    inline?: boolean;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    autoComplete?: string;
    helpLabel?: string;
    errorLabel?: string;
    variant?: "secondary" | "small";
    placeholder?: string;
    value?: string;
}

export function Select({
    label,
    items,
    className = "",
    onChange,
    inline = false,
    helpLabel,
    errorLabel,
    variant,
    placeholder,
    value,
    ...rest
}: Props) {
    // Set value to value given, or to first item if no value or placeholder is given:
    value = value ? value : placeholder ? "" : items[0];
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(event);
    };
    const componentClassName = "jkl-dropdown"
        .concat(inline ? ` jkl-dropdown--inline` : "")
        .concat(!!errorLabel ? ` jkl-dropdown--invalid` : "")
        .concat(value === "" ? ` jkl-dropdown--no-value` : "")
        .concat(className ? ` ${className}` : "");
    const labelClassName = "jkl-label".concat(variant ? ` jkl-label--${variant}` : "");
    return (
        <label className={componentClassName}>
            <span className={labelClassName}>{label}</span>
            <select
                value={value}
                className="jkl-dropdown__value"
                onBlur={handleChange}
                onChange={handleChange}
                {...rest}
            >
                {placeholder && value === "" && (
                    <option disabled value="">
                        {placeholder}
                    </option>
                )}
                {items.map((item) => (
                    <option data-testid="jkl-dropdown__option" key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
            <span className="jkl-dropdown__chevron" />
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} />
        </label>
    );
}
