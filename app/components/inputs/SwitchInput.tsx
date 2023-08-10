"use client";

import { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface SwitchInputProps {
  id: string;
  register: UseFormRegister<FieldValues>;
  enabledLabel: string;
  disabledLabel: string;
  tooltip?: string;
}
const SwitchInput: React.FC<SwitchInputProps> = ({ 
  id,
  register,
  enabledLabel,
  disabledLabel
}) => {
  const [checked, setChecked] = useState(true);

  const toggleSwitch = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex justify-between">
      <div className={`font-semibold ${checked ? "text-primary-shade" : "text-red-400"} `}>
        { checked ? enabledLabel : disabledLabel }
      </div>
      <label className="relative inline-block">
        <input
          id={id}
          {...register(id)}
          type="checkbox"
          checked={checked}
          onChange={toggleSwitch}
          className="sr-only"
        />
        <div
          className={`w-12 h-6 bg-gray-300 rounded-full transition-colors ${
            checked ? "bg-primary-main" : "bg-red-400"
          }`}
        >
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md transform ${
              checked ? "translate-x-6" : "translate-x-0"
            } transition-transform`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default SwitchInput;
