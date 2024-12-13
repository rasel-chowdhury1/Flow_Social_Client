import React, { ForwardedRef } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface TextInputProps {
  type?: string; // Input type (e.g., text, email, password)
  placeholder?: string; // Placeholder for input field
  styles?: string; // Custom Tailwind styles for input
  label?: string; // Optional label text
  labelStyles?: string; // Custom Tailwind styles for label
  register?: UseFormRegisterReturn; // Register prop from react-hook-form
  name?: string; // Name of the input field
  error?: string | FieldError  | undefined // Error message or FieldError from react-hook-form
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    { type = "text", placeholder, styles, label, labelStyles, register, name, error },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className="w-full flex flex-col mt-2">
        {/* Render Label */}
        {label && (
          <label
            htmlFor={name}
            className={`text-ascent-2 text-sm mb-2 ${labelStyles}`}
          >
            {label}
          </label>
        )}

        {/* Input Field */}
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          ref={ref}
          {...register} // Spread react-hook-form's register props
          className={`bg-secondary rounded border border-[#66666690] outline-none text-sm text-ascent-1 px-4 py-3 placeholder:text-[#666] ${styles}`}
          aria-invalid={error ? "true" : "false"}
        />

        {/* Error Message */}
        {error && (
          <span className="text-xs text-[#f64949fe] mt-0.5">
            {typeof error === "string" ? error : error.message}
          </span>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
