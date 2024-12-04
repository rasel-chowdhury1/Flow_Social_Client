import React, { ForwardedRef } from "react";

interface TextInputProps {
  type?: string; // Type of input, e.g., "text", "email", "password"
  placeholder?: string; // Optional placeholder
  styles?: string; // Optional custom styles for input
  label?: string; // Optional label text
  labelStyles?: string; // Optional custom styles for label
  register?: Record<string, unknown>; // Props passed by react-hook-form (or replace with appropriate type)
  name?: string; // Name attribute for input
  error?: string; // Error message, if any
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    { type, placeholder, styles, label, labelStyles, register, name, error },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className="w-full flex flex-col mt-2">
        {label && (
          <p className={`text-ascent-2 text-sm mb-2 ${labelStyles}`}>{label}</p>
        )}

        <div>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            ref={ref}
            className={`bg-secondary rounded border border-[#66666690] outline-none text-sm text-ascent-1 px-4 py-3 placeholder:text-[#666] ${styles}`}
            {...register}
            aria-invalid={error ? "true" : "false"}
          />
        </div>
        {error && (
          <span className="text-xs text-[#f64949fe] mt-0.5">{error}</span>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
