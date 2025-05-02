import { ChangeEvent } from "react";

interface InputFieldProps {
  label?: string;
  type?: string;
  name: string;
  id?: string;
  placeholder?: string;
  value?: string | number;
  checked?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  className?: string;
}

export default function InputField({
  label,
  type = "text",
  name,
  id = name,
  placeholder,
  value,
  checked,
  onChange,
  onBlur,
  minLength,
  maxLength,
  required = false,
  className = "",
}: InputFieldProps) {
  const isCheckbox = type === "checkbox";

  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={isCheckbox ? undefined : value}
      checked={isCheckbox ? checked : undefined}
      onChange={onChange}
      onBlur={onBlur}
      minLength={minLength}
      maxLength={maxLength}
      required={required}
      aria-label={placeholder || label || name}
    />
  );
}
