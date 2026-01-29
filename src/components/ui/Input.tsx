import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
}

export const Input = ({ label, id, required, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-primary para-text-u">
          {label}
          {required && <sup>*</sup>}
        </label>
      )}

      <input
        id={id}
        className="border-primary para-text-u border-b-2 bg-transparent py-1 text-white outline-0"
        required={required}
        {...props}
      />
    </div>
  );
};
