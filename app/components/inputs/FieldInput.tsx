"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface FieldInputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  textarea?: boolean;
  errors: FieldErrors;
}
const FieldInput: React.FC<FieldInputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  register,
  required,
  textarea,
  errors,
}) => {
  return (
    <div className="flex flex-col gap-2 mb-8">
      <label className="text-lg font-semibold text-Slate-900">
        {label}
        {required && <span className="text-red-500 ">*</span>}
      </label>

      {!textarea ? (
        <input
          id={id}
          disabled={disabled}
          {...register(id, { required: required })}
          type={type}
          className={`
          w-full
          min-w-0
          outline-transparent
          outline-offset-2
          relative
          appearance-none
          text-lg
          px-4
          h-12
          rounded
          border
          border-gray-300
          focus:border-blue-500
          bg-transparent
          ${errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}`}
        ></input>
      ) : (
        <textarea
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          className="
          w-full
          outline-transparent
          outline-offset-2
          pt-2
          pb-2
          leading-5
          align-top
          text-base
          pl-3
          pr-3
          h-80
          rounded-sm
          border
          border-gray-300
          focus:border-blue-500"
        ></textarea>
      )}
    </div>
  );
};

export default FieldInput;
